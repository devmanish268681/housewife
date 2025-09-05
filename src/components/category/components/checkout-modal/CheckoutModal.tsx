"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

//third-party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

//hooks
import { useAppSelector } from "@/lib/hooks";

//slices & context
import { useGetAllCartItemsQuery } from "@/lib/slices/cartApiSlice";
import { usePlaceOrdersMutation } from "@/lib/slices/orderApiSlice";
import { useAuth } from "@/lib/context/authContext";

//types
import { CheckoutModalProps } from "./types";

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  //hooks
  const { user } = useAuth();
  const modalRef = useRef<HTMLDivElement>(null);

  //slices
  const { address: userAddress } = useAppSelector(
    (state) => state.userLocation
  );
  const { data: cartItemsData } = useGetAllCartItemsQuery(undefined, { skip: !isOpen });
  const [placeOrders] = usePlaceOrdersMutation();


  const [street, state, country] = userAddress?.split(",") || [];

  //formik
  const validationSchema = useMemo(() => Yup.object({
    fullName: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
  }), []);

  const { values, setFieldValue } = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      address: userAddress || "",
      doorno: "",
      area: "",
      landmark: "",
      pincode: "",
      deliveryMethod: "",
      paymentMethod: "",
    },
    validationSchema,
    onSubmit: () => {
      console.log("submitted");
    },
  });

  const {
    fullName,
    phone,
    address,
    doorno,
    area,
    landmark,
    pincode,
    paymentMethod,
  } = values;

  const subtotal = cartItemsData?.result?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = 50;
  const total = Number(subtotal) + deliveryFee;

  const handlePlaceOrder = async () => {
    if (!cartItemsData?.result?.length) {
      alert("Your cart is empty");
      return;
    }

    const products = cartItemsData.result.map((item) => ({
      productId: item.productId,
      productVariantId: item.variantId,
      quantity: item.quantity,
    }));

    const payload = {
      products,
      street: area,
      flatNo: doorno,
      state,
      city: state,
      country,
      landmark,
      zipCode: pincode,
      paymentMethod: paymentMethod.toLowerCase(),
      address,
      deliveryFee,
    };

    try {
      const res = await placeOrders(payload); // API call
      const data = res?.data?.placeOrder?.placeOrder?.order;

      if (!data?.id || !data?.amount) {
        console.error("Invalid Razorpay order data:", data);
        alert("Failed to create Razorpay order. Please try again.");
        return;
      }

      openRazorpayCheckout(data);
    } catch (err) {
      console.error("Order placement failed:", err);
      alert("Something went wrong while placing your order. Please try again.");
    }
  };

  /**
   * Opens Razorpay checkout with given order data
   */
  const openRazorpayCheckout = (orderData: {
    id: string;
    amount: number;
    currency?: string;
  }) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency || "INR",
      name: "My Grocery Store",
      description: "Order Payment",
      order_id: orderData.id,
      handler: async (response: any) => {
        try {
          const verifyRes = await fetch("/api/payment/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              orderId: orderData.id,
            }),
          });

          if (!verifyRes.ok) {
            throw new Error("Payment verification failed");
          }

          alert("Payment successful! Your order is placed.");
        } catch (err) {
          console.error("Payment verification failed:", err);
          alert(
            "Payment successful but verification failed. Please contact support."
          );
        }
      },
      prefill: {
        name: fullName || "",
        email: user?.email || "",
        contact: phone || "",
      },
      theme: { color: "#3399cc" },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusable = modalRef.current.querySelectorAll(
        'button, input, textarea, select, a[href]'
      );
      const first = focusable[0] as HTMLElement;
      const last = focusable[focusable.length - 1] as HTMLElement;

      const trapFocus = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      document.addEventListener("keydown", trapFocus);
      return () => document.removeEventListener("keydown", trapFocus);
    }
  }, [isOpen]);

  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex justify-center items-center" aria-modal="true"
      role="dialog">
      {/* Modal */}
      <div ref={modalRef} className="m-3 bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Checkout</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
            aria-label="Close checkout modal"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 space-y-6">
          {/* Customer Details */}
          <div className="space-y-3">
            <h3 className="font-semibold">Customer Details</h3>
            <input
              type="text"
              value={fullName}
              placeholder="Full Name"
              onChange={(e) => setFieldValue("fullName", e.target.value)}
              className="w-full border rounded p-2"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setFieldValue("phone", e.target.value)}
              placeholder="Phone Number"
              className="w-full border rounded p-2"
            />
          </div>

          {/* Delivery Address */}
          <div className="space-y-3">
            <h3 className="font-semibold">Address</h3>
            <input
              type="text"
              value={address}
              onChange={(e) => setFieldValue("address", e.target.value)}
              placeholder="Enter Address"
              className="w-full border rounded p-2"
            />
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Door / Flat No.</h3>
            <input
              type="text"
              value={doorno}
              onChange={(e) => setFieldValue("doorno", e.target.value)}
              placeholder="Enter Door number"
              className="w-full border rounded p-2"
            />
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Street</h3>
            <input
              type="tel"
              value={area}
              onChange={(e) => setFieldValue("area", e.target.value)}
              placeholder="Enter Area"
              className="w-full border rounded p-2"
            />
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Landmark</h3>
            <input
              type="tel"
              value={landmark}
              onChange={(e) => setFieldValue("landmark", e.target.value)}
              placeholder="Enter Landmark"
              className="w-full border rounded p-2"
            />
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Pin Code</h3>
            <input
              type="tel"
              value={pincode}
              onChange={(e) => setFieldValue("pincode", e.target.value)}
              placeholder="Enter Pincode"
              className="w-full border rounded p-2"
            />
          </div>

          {/* Order Summary */}
          <div className="space-y-3 border-t pt-4">
            <h3 className="font-semibold">Order Summary</h3>
            {cartItemsData?.result.map((item) => (
              <div
                key={item.productId}
                className="flex justify-between text-gray-700"
              >
                <span>
                  {item.productName} x {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>{`₹${deliveryFee}`}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>

        {/* Sticky Place Order Button */}
        <div className="p-4 border-t">
          <button
            type="button"
            onClick={() => handlePlaceOrder()}
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
