// import Razorpay from "razorpay";
// import { validateEnvVars } from "../utils/validateEnv";

// validateEnvVars(["RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET"]);

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID!,
//   key_secret: process.env.RAZORPAY_KEY_SECRET!,
// });

// export async function createRazorpayOrder(orderObj: any) {
//   try {
//     const razorpayOrder = await razorpay.orders.create({
//       amount: orderObj.total * 100, // Razorpay expects amount in paise
//       currency: "INR",
//       receipt: orderObj.id,
//     });

//     return {
//       success: true,
//       order: razorpayOrder,
//     };
//   } catch (error) {
//     console.log("Error in createRazorpayOrder", error);
//     throw error;
//   }
// }


import Razorpay from "razorpay";
import { validateEnvVars } from "../utils/validateEnv";

validateEnvVars(["RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET"]);

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function createRazorpayOrder(orderObj: {
  total: number;
  name: string;
  email: string;
  phone: string;
  orderId: string;
}) {
  try {
    const paymentLink = await razorpay.paymentLink.create({
      amount: orderObj.total * 100, // Amount in paise
      currency: "INR",
      accept_partial: false,
      description: "Order Payment",
      reference_id: orderObj.orderId,
      customer: {
        name: orderObj.name,
        email: orderObj.email,
        contact: orderObj.phone,
      },
      notify: {
        sms: true,
        email: true,
      },
      callback_url: "http://localhost:3000", // change to your callback
      callback_method: "get",
    });

    return {
      success: true,
      url: paymentLink.short_url,
      id: paymentLink.id,
    };
  } catch (error) {
    console.error("Error creating Razorpay payment link:", error);
    throw error;
  }
}


