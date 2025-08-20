// /app/api/webhooks/razorpay/route.ts (Next.js App Router)
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

import { paymentWebHookController } from "@/app/services/razorpayService";
import {
  getOrderById,
  getOrderByOrderId,
  updateOrder,
} from "@/app/services/OrdersService";
import { bulkDeleteCartItemsByProductId } from "@/app/services/cartItemsService";

export async function POST(req: NextRequest) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET!; // Set this in Razorpay dashboard & .env

  const rawBody = await req.text(); // Get raw body to validate signature
  const razorpaySignature = req.headers.get("x-razorpay-signature");
  console.log("rawBody", rawBody);

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  console.log(expectedSignature);
  if (razorpaySignature !== expectedSignature) {
    console.error("Webhook signature verification failed");
    return NextResponse.json({ status: "unauthorized" }, { status: 401 });
  }

  const payload = JSON.parse(rawBody);

  try {
    if (
      payload.event === "payment.captured" &&
      payload.payload?.payment?.entity
    ) {
      // const paymentData = payload.payload.payment.entity;
      // console.log("paymentData", paymentData);

      // const razorpayOrderId = paymentData.order_id as string;
      // const razorpayPaymentId = paymentData.id;
      // const amount = paymentData.amount; // in paise
      // console.log("razorpayOrderId", razorpayOrderId);
      // console.log("razorpayPaymentId", razorpayPaymentId);

      // ✅ Update payment record in DB

      // console.log("payload.payment", payload.payload);

      const order = await getOrderById(
        payload.payload.payment.entity.notes.internalOrderId
      );

      const productIds = order?.items.map((item) => item.productId) || [];

      let data;
      if (
        order?.items &&
        Array.isArray(order.items) &&
        order.items.length > 0
      ) {
        [data] = order.items.map((item) => ({
          userName: order.user.name,
          userEmail: order.user.email,
          contact: payload.payload.payment.entity.contact,
          productName: item.product.name,
          productDescription: item.product.description,
          amount: item.price * 100, // In paise
          currency: "INR",
          quantity: item.quantity,
          paymentId: payload.payload.payment.entity.id,
          razorpayOrderId: payload.payload.payment.entity.order_id as string,
          orderId: order.id,
          status: "paid",
        }));
      } else {
        throw new Error("Order items not found or empty");
      }

      const webhookRes = await paymentWebHookController(data);

      const orderData = await getOrderByOrderId(data.orderId);

      const orderObj: any = {
        ...orderData,
        invoice: webhookRes.orderInvoice?.short_url || "",
      };

      const updatePaymentsData = await updateOrder(orderObj, data.orderId);

      await bulkDeleteCartItemsByProductId(productIds);

      return NextResponse.json({
        success: true,
      });
    }

    return NextResponse.json({ message: "Event ignored" });
  } catch (error: any) {
    console.error("Error handling Razorpay webhook:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
