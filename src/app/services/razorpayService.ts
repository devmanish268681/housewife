import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { getOrderByOrderId, updateOrder } from "../services/OrdersService";
import {
  CreatePaymentInput,
  updatePaymentsRecord,
} from "../services/paymentsService";
import { getRazorpayOrder } from "../lib/createRazorpayOrder";

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

        const razorpayOrder = await getRazorpayOrder(data.razorpayOrderId);
        let updatedOrder = null;
        if (
          razorpayOrder.order.items[0].status === "captured" &&
          razorpayOrder.order.items[0].id === data.paymentId
        ) {
          const order = await getOrderByOrderId(data.orderId);

          const orderObj: any = {
            ...order,
            paymentStatus: "paid",
            status: "confirmed",
          };

          updatedOrder = await updateOrder(orderObj, data.orderId, tx);
        } else {
          throw new Error(
            "unable to update order details due invalid paymentId (Razorpay) or payment not received"
          );
        }

        return { razorpayOrder, updatedOrder };
      }
      // { timeout: 200000 }
    );
  } catch (error) {
    console.log("Error in placeOrderController", error);
    throw error;
  }
};

//  ✓ Compiled /api/order in 3.3s
// result undefined
// adminAddress {
//   id: '4feb846c-f68d-482b-bd3b-7121605d7724',
//   createdAt: 2025-08-22T11:01:16.083Z,
//   updatedAt: 2025-08-22T11:01:16.083Z,
//   deleted: false,
//   userId: 'bc847f0f-ec5d-4c32-ba93-46fe10c95482',
//   street: '123 Admin St',
//   city: 'Pune',
//   state: 'Maharashtra',
//   country: 'India',
//   zipCode: '411001'
// }
// productWithTaxRates {
//   basePrice: 160,
//   quantity: 1,
//   cgstRate: 12,
//   igstRate: 24,
//   sgstRate: 12
// }
// adrsss Maharashtra
// item.state undefined
// buyerState Maharashtra
// sellerState  Maharashtra
// gstBreakup {
//   subTotal: 160,
//   gstAmount: 38.4,
//   cgst: 19.2,
//   sgst: 19.2,
//   igst: 0,
//   totalPrice: 198.4,
//   isIGST: false
// }
// orderObj {
//   userId: 'e55763ab-1078-4622-ab68-48c83a9ad18f',
//   addressId: 'd305e8ca-eb5f-452c-bed2-c730544001ba',
//   total: 198.4,
//   status: 'pending',
//   isIGST: false,
//   subTotal: 160,
//   gstTotal: 38.4
// }
// result------ {
//   id: '67c43334-c49c-4250-bfb6-cafa8dba3c21',
//   createdAt: 2025-08-23T08:27:41.402Z,
//   updatedAt: 2025-08-23T08:27:41.402Z,
//   deleted: false,
//   userId: 'e55763ab-1078-4622-ab68-48c83a9ad18f',
//   total: 198.4,
//   subTotal: 160,
//   gstTotal: 38.4,
//   paymentStatus: 'pending',
//   status: 'pending',
//   addressId: 'd305e8ca-eb5f-452c-bed2-c730544001ba',
//   invoice: '',
//   invoiceId: null,
//   isIGST: false,
//   address: {
//     id: 'd305e8ca-eb5f-452c-bed2-c730544001ba',
//     createdAt: 2025-08-23T08:27:41.313Z,
//     updatedAt: 2025-08-23T08:27:41.313Z,
//     deleted: false,
//     userId: 'e55763ab-1078-4622-ab68-48c83a9ad18f',
//     street: 'sdrdsrfds',
//     city: ' Maharashtra',
//     state: ' Maharashtra',
//     country: ' India',
//     zipCode: '412105'
//   }
// }
// placeOrder {
//   placeOrder: {
//     success: true,
//     order: {
//       amount: 19840,
//       amount_due: 19840,
//       amount_paid: 0,
//       attempts: 0,
//       created_at: 1755937662,
//       currency: 'INR',
//       entity: 'order',
//       id: 'order_R8i4T2aVpMAZKM',
//       notes: [Object],
//       offer_id: null,
//       receipt: '67c43334-c49c-4250-bfb6-cafa8dba3c21',
//       status: 'created'
//     }
//   }
// }
//  POST /api/order 200 in 5106ms
//  POST /api/payment/verify 404 in 564ms
//  GET /api/auth/session 200 in 358ms
//  GET /api/auth/session 200 in 405ms
//  GET /api/auth/session 200 in 616ms
//  GET /api/auth/session 200 in 385ms
//  GET /api/auth/session 200 in 811ms
//  GET /api/auth/session 200 in 372ms
//  GET /api/auth/session 200 in 392ms
