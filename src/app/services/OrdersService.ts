import { prisma } from "@/lib/prisma";

export const createOrderRecord = async (orderObj: any) => {
  try {
    const order = await prisma.order.create({ data: orderObj });
    return order;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};
