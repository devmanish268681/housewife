import { prisma } from "@/lib/prisma";

export const createOrderItemsRecord = async (orderItemObj: any) => {
  try {
    const orderItem = await prisma.orderItem.create({ data: orderItemObj });
    return orderItem;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};
