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

export async function createRazorpayOrder(orderObj: any) {
  try {
    const razorpayOrder = await razorpay.orders.create({
      amount: orderObj.total * 100, // Razorpay expects amount in paise
      currency: "INR",
      receipt: orderObj.id,
      notes: {
        billing_state: orderObj.address.state,
        tax_breakup: JSON.stringify({
          gstTotal: orderObj.gstTotal,
          isIGST: orderObj.isIGST,
        }),
      },
    });

    return {
      success: true,
      order: razorpayOrder,
    };
  } catch (error) {
    console.error("Error creating Razorpay payment link:", error);
    throw error;
  }
}
export async function getRazorpayOrder(razorpayOrderId: any) {
  try {
    const razorpayOrder = await razorpay.orders.fetchPayments(razorpayOrderId);

    return {
      success: true,
      order: razorpayOrder,
    };
  } catch (error) {
    console.error("Error creating Razorpay payment link:", error);
    throw error;
  }
}
