// /app/api/webhooks/razorpay/route.ts (Next.js App Router)
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

import { paymentWebHookController } from "@/app/services/razorpayService";

export async function POST(req: NextRequest) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET!; // Set this in Razorpay dashboard & .env

  const rawBody = await req.text(); // Get raw body to validate signature
  const razorpaySignature = req.headers.get("x-razorpay-signature");
  console.log("rawBody", rawBody);

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

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
      const webhookRes = await paymentWebHookController(payload);

      return NextResponse.json({ success: true });
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
