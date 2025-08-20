import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { updateOrder } from "../services/OrdersService";
import {
  CreatePaymentInput,
  updatePaymentsRecord,
} from "../services/paymentsService";
import { createOrderInvoice } from "./InvoiceService";

export const paymentWebHookController = async (data: any) => {
  try {
    return await prisma.$transaction(
      async (tx: Prisma.TransactionClient) => {
        const paymentsObj: CreatePaymentInput = {
          orderId: data.orderId,
          razorpayOrderId: data.razorpayOrderId,
          amount: data.amount,
          currency: data.currency,
          status: data.status,
        };

        const updatedPayement = await updatePaymentsRecord(
          data.razorpayOrderId,
          paymentsObj,
          tx
        );

        const orderObj: any = {
          paymentStatus: "paid",
          status: "confirmed",
        };

        const updatedOrder = await updateOrder(
          orderObj,
          data.razorpayOrderId,
          tx
        );

        const invoiceObj: any = {
          type: "invoice",
          customer: {
            name: data.userName,
            email: data.userEmail,
            contact: data.contact,
          },
          line_items: [
            {
              name: data.productName,
              amount: data.amount, // In paise
              currency: data.currency,
              quantity: data.quantity,
            },
          ],
          description: data.productDescription,
        };

        const orderInvoice = await createOrderInvoice(invoiceObj, tx);

        return { updatedOrder, orderInvoice };
      }
      // { timeout: 200000 }
    );
  } catch (error) {
    console.log("Error in placeOrderController", error);
    throw error;
  }
};
