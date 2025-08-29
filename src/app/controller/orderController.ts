// import { prisma } from "@/lib/prisma";
// import { getUserById } from "../services/userService";
// import { createAddressRecord } from "../services/addressService";
// import { Prisma } from "@prisma/client";
// import { createOrderRecord } from "../services/OrdersService";
// import { createOrderItemsRecord } from "../services/OrderItemsService";
// import { updatedProductVariant } from "../services/ProductsService";
// import { createRazorpayOrder } from "../lib/createRazorpayOrder";
// import { createPaymentsRecord } from "../services/paymentsService";

// export const placeOrderController = async (body: any, userId: string) => {
//   try {
//     const user = await getUserById(userId);

//     const result = await prisma.$transaction(
//       async (tx: Prisma.TransactionClient) => {
//         const adressObj = {
//           userId: user.id,
//           street: body.street,
//           city: body.city,
//           country: body.country,
//           zipCode: body.zipCode,
//           state: body.state,
//         };

//         const userAdress = await createAddressRecord(tx, adressObj);
//         let total = 0;
//         const orderItemsData = [];

//         for (const item of body.products) {
//           const variant = await prisma.productVariant.findUnique({
//             where: { id: item.productVariantId },
//           });

//           if (!variant) {
//             throw new Error(
//               `invalid variant for variant ID: ${item.productVariantId}`
//             );
//           }

//           if (variant && variant.stock < item.quantity) {
//             throw new Error(`Insufficient stock`);
//           }

//           total += variant.price * item.quantity;

//           orderItemsData.push({
//             productId: item.productId,
//             quantity: item.quantity,
//             price: variant.price,
//             productVariantId: item.productVariantId,
//           });
//         }

//         const orderObj = {
//           userId,
//           addressId: userAdress.id,
//           total,
//           status: "pending",
//         };

//         const order = await createOrderRecord(tx, orderObj);

//         const orderItemPromises = orderItemsData.map(async (item) => {
//           const orderItemObj = {
//             orderId: order.id,
//             productId: item.productId,
//             productVariantId: item.productVariantId,
//             quantity: item.quantity,
//             price: item.price,
//           };

//           const orderItems = await createOrderItemsRecord(tx, orderItemObj);

//           const updatedProduct = await updatedProductVariant(
//             tx,
//             item.productVariantId,
//             item.quantity
//           );
//         });
//         await Promise.all(orderItemPromises);
//         return order;
//       },
//       { timeout: 200000 }
//     );

//     const placeOrder = await createRazorpayOrder(result);
//     const paymentsObj: any = {
//       razorpayOrderId: placeOrder?.order.id,
//       orderId: result.id,
//       status: "pending",
//       amount: placeOrder?.order.amount,
//     };

//     const paymentsRecord = await createPaymentsRecord(paymentsObj);
//     return { placeOrder, paymentsRecord };
//   } catch (error) {
//     console.log("Error in placeOrderController", error);
//     throw error;
//   }
// };

import { prisma } from "@/lib/prisma";
import { getRoleByName, getUserById } from "../services/userService";
import {
  createAddressRecord,
  getAddressByUserId,
} from "../services/addressService";
import { Prisma } from "@prisma/client";
import {
  calculateGSTBreakup,
  createOrderRecord,
  ProductWithTaxRates,
} from "../services/OrdersService";
import { createOrderItemsRecord } from "../services/OrderItemsService";
import { updatedProductVariant } from "../services/ProductsService";
import { createRazorpayOrder } from "../lib/createRazorpayOrder";
import { createPaymentsRecord } from "../services/paymentsService";
import { createOrderInvoice } from "../services/InvoiceService";
import { isUserWithinRadius } from "../services/locationService";

const isServerLive = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_WEBSOCKET_URL}/api/ping`);
    return res.ok;
  } catch (error) {
    console.error("🚫 Socket server not reachable:", error);
    return false;
  }
};

export const placeOrderController = async (body: any, userId: string) => {
  try {
    const user = await getUserById(userId);

    const result = await prisma.$transaction(
      async (tx: Prisma.TransactionClient) => {
        if (!user.latitude && !user.longitude) {
          throw new Error("user location not found");
        }

        const zone = await isUserWithinRadius(
          user.latitude as string,
          user.longitude as string
        );

        if (!zone.isWithinRadius) {
          throw new Error("Sorry, we do not deliver to your location yet.");
        }

        const adressObj = {
          userId: user.id,
          street: body.street,
          city: body.city,
          country: body.country,
          zipCode: body.zipCode,
          state: body.state,
        };

        const userAdress = await createAddressRecord(tx, adressObj);
        let total = 0;
        const orderItemsData = [];
        let gstBreakup: any;

        if (!body.products || body.products.length === 0) {
          throw new Error("No products found in order.");
        }

        for (const item of body.products) {
          const admin = await getRoleByName("admin");
          const adminUserId = admin.userData?.users[0].id as string;

          // console.log("admin", admin.userData?.users[0]);
          const adminAddress = await getAddressByUserId(adminUserId);
          console.log("adminAddress", adminAddress);

          if (!admin.success) {
            throw new Error(admin.message);
          }

          const variant = await prisma.productVariant.findUnique({
            where: { id: item.productVariantId },
          });

          if (!variant) {
            throw new Error(
              `invalid variant for variant ID: ${item.productVariantId}`
            );
          }

          if (variant && variant.stock < item.quantity) {
            throw new Error(`Insufficient stock`);
          }

          const product = await prisma.product.findUnique({
            where: { id: item.productId },
          });

          if (!product) {
            throw new Error(`invalid product ID: ${item.productVariantId}`);
          }

          total += variant.price * item.quantity;
          let deliveryFee = body.deliveryFee;
          const productWithTaxRates: ProductWithTaxRates = {
            basePrice: variant.price,
            deliveryFee: deliveryFee,
            quantity: item.quantity,
            cgstRate: product.cgst,
            igstRate: product.igst,
            sgstRate: product.sgst,
          };

          gstBreakup = await calculateGSTBreakup({
            productWithTaxRates,
            buyerState: body.state,
            sellerState: adminAddress.state,
          });
          console.log("gstBreakup", gstBreakup);

          orderItemsData.push({
            productId: item.productId,
            quantity: item.quantity,
            price: variant.price,
            productVariantId: item.productVariantId,
          });
        }

        const orderObj = {
          userId,
          addressId: userAdress.id,
          total:
            gstBreakup?.subTotal + gstBreakup?.gstAmount + body.deliveryFee,
          status: "pending",
          isIGST: gstBreakup?.isIGST,
          subTotal: gstBreakup?.subTotal,
          gstTotal: gstBreakup?.gstAmount,
          deliveryFee: body.deliveryFee,
        };

        const order = await createOrderRecord(tx, orderObj);
        console.log("order", order);

        const orderItemPromises = orderItemsData.map(async (item) => {
          const orderItemObj = {
            orderId: order.id,
            productId: item.productId,
            productVariantId: item.productVariantId,
            quantity: item.quantity,
            price: item.price,
          };

          const orderItems = await createOrderItemsRecord(tx, orderItemObj);

          const updatedProduct = await updatedProductVariant(
            tx,
            item.productVariantId,
            item.quantity
          );
        });
        await Promise.all(orderItemPromises);

        // Notify both user and admin
        if (await isServerLive()) {
          await fetch(`${process.env.NEXT_WEBSOCKET_URL}/sendNotification`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderId: order.id,
              userId: userId,
              userName: user.name || "user",
            }),
          });
        } else {
          console.warn("⚠️ Notification server is down, skipping send.");
        }

        return order;
      },
      { timeout: 200000 }
    );

    const placeOrder = await createRazorpayOrder(result);
    console.log("placeOrder", placeOrder);

    const paymentsObj: any = {
      razorpayOrderId: placeOrder.order.id,
      orderId: result.id,
      status: "pending",
      amount: placeOrder.order.amount,
    };

    // const order = await getOrderById(result.id);

    // let data;
    // if (order?.items && Array.isArray(order.items) && order.items.length > 0) {
    //   [data] = order.items.map((item) => ({
    //     userName: order.user.name,
    //     userEmail: order.user.email,
    //     contact: order.user.phoneNumber,
    //     productName: item.product.name,
    //     productDescription: item.product.description,
    //     amount: order.total * 100, // In paise
    //     currency: "INR",
    //     quantity: item.quantity,
    //     orderId: order.id,
    //     status: "paid",
    //   }));
    // } else {
    //   throw new Error("Order items not found or empty");
    // }

    // const invoiceObj: any = {
    //   type: "invoice",
    //   customer: {
    //     name: data.userName,
    //     email: data.userEmail,
    //     contact: data.contact,
    //   },
    //   line_items: [
    //     {
    //       name: data.productName,
    //       amount: data.amount, // In paise
    //       currency: data.currency,
    //       quantity: data.quantity,
    //     },
    //   ],
    //   description: data.productDescription,
    // };

    // const orderInvoice = await createOrderInvoice(invoiceObj);
    // console.log("orderInvoice", orderInvoice);

    const paymentsRecord = await createPaymentsRecord(paymentsObj);

    return { placeOrder };
  } catch (error) {
    console.log("Error in placeOrderController", error);
    throw error;
  }
};
