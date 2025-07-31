import { prisma } from "@/lib/prisma";
import { getUserById } from "../services/userService";
import { createAddressRecord } from "../services/addressService";
import { OrderStatus, Prisma } from "@prisma/client";
import { createOrderRecord } from "../services/OrdersService";
import { createOrderItemsRecord } from "../services/OrderItemsService";
import { updatedProductVariant } from "../services/ProductsService";

export const placeOrderController = async (body: any, userId: string) => {
  try {
    const user = await getUserById(userId);

    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const adressObj = {
        userId: user.id,
        street: body.street,
        city: body.city,
        country: body.country,
        zipCode: body.zipCode,
        state: body.state,
      };

      const userAdress = await createAddressRecord(tx, adressObj);
      console.log("userAdress", userAdress);
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
        status: OrderStatus.PENDING,
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
        console.log("orderItems", orderItems);

        const updatedProduct = await updatedProductVariant(
          tx,
          item.productVariantId,
          item.quantity
        );
        console.log("updatedProduct", updatedProduct);
        await Promise.all(orderItemPromises);
      });
    });
  } catch (error) {
    console.log("Error in placeOrderController", error);
    throw error;
  }
};
