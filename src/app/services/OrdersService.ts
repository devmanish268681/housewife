import { Prisma } from "@prisma/client";

export const createOrderRecord = async (
  tx: Prisma.TransactionClient,
  orderObj: Prisma.OrderUncheckedCreateInput
) => {
  try {
    const order = await tx.order.create({ data: orderObj });
    return order;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};
