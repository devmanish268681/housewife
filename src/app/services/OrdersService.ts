import { Prisma } from "@prisma/client";

export type UpdateOrderInput = Partial<
  Omit<Order, "id" | "createdAt" | "updatedAt" | "deleted">
>;

export type CreateOrderInput = Omit<
  Order,
  "id" | "createdAt" | "updatedAt" | "deleted"
>;

export interface Order {
  id: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
  total: number;
  paymentStatus: string; // "pending", "success", "failed"
  status: string;
  addressId: string;
}

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

export const updateOrder = async (
  paymentsObj: CreateOrderInput,
  orderId: string,
  tx: Prisma.TransactionClient = prisma
) => {
  try {
    const updatePayementData = await tx.order.updateMany({
      where: { id: orderId },
      data: paymentsObj,
    });
    return updatePayementData;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};
export const getOrderById = async (
  orderId: string,
  tx: Prisma.TransactionClient = prisma
) => {
  try {
    const payementData = await tx.order.findUnique({
      where: { id: orderId },
    });

    return payementData;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};
