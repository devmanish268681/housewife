import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { updateOrder } from "../services/OrdersService";
import {
  CreatePaymentInput,
  updatePaymentsRecord,
} from "../services/paymentsService";

export const paymentWebHookController = async (body: any) => {
  try {
    return await prisma.$transaction(
      async (tx: Prisma.TransactionClient) => {
        const paymentsObj: CreatePaymentInput = {
          orderId: body.orderId,
          razorpayOrderId: body.razorpayOrderId,
          amount: body.amount,
          currency: "INR",
          status: "paid",
        };

        const updatedPayement = await updatePaymentsRecord(
          body.razorpayOrderId,
          paymentsObj,
          tx
        );

        const orderObj: any = {
          paymentStatus: "paid",
          status: "confirmed",
        };

        const updatedOrder = await updateOrder(
          orderObj,
          body.razorpayOrderId,
          tx
        );
        return updatedOrder;
      }
      // { timeout: 200000 }
    );
  } catch (error) {
    console.log("Error in placeOrderController", error);
    throw error;
  }
};
