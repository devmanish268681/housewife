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
import { getUserById } from "../services/userService";
import { createAddressRecord } from "../services/addressService";
import { Prisma } from "@prisma/client";
import { createOrderRecord } from "../services/OrdersService";
import { createOrderItemsRecord } from "../services/OrderItemsService";
import { updatedProductVariant } from "../services/ProductsService";
import { createRazorpayOrder } from "../lib/createRazorpayOrder";
import { createPaymentsRecord } from "../services/paymentsService";

export const placeOrderController = async (body: any, userId: string) => {
  try {
    const user = await getUserById(userId);

    const result = await prisma.$transaction(
      async (tx: Prisma.TransactionClient) => {
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

        for (const item of body.products) {
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

          total += variant.price * item.quantity;

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
          total,
          status: "pending",
        };

        const order = await createOrderRecord(tx, orderObj);

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
        return order;
      },
      { timeout: 200000 }
    );

    const placeOrder = await createRazorpayOrder({
      total: result.total,
      name: user.name || "Customer",
      email: user.email || "test@example.com",
      phone: "8143122425",
      orderId: result.id,
    });
    // const paymentsObj: any = {
    //   razorpayOrderId: placeOrder.order.id,
    //   orderId: result.id,
    //   status: "pending",
    //   amount: placeOrder.order.amount,
    // };

    // const paymentsRecord = await createPaymentsRecord(paymentsObj);
    return { placeOrder};
  } catch (error) {
    console.log("Error in placeOrderController", error);
    throw error;
  }
};
