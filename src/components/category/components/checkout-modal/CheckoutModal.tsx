"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// third-party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMoneyBillWave,
  faTimes,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

// hooks
import { useAppSelector } from "@/lib/hooks";

// slices & context
import { useGetAllCartItemsQuery } from "@/lib/slices/cartApiSlice";
import { usePlaceOrdersMutation } from "@/lib/slices/orderApiSlice";
import { useAuth } from "@/lib/context/authContext";

// types
import { CheckoutModalProps } from "./types";

type PaymentMethod = "COD" | "UPI" | "Card";

const paymentMethods: PaymentMethod[] = ["COD", "UPI", "Card"];

const iconsMap: Record<PaymentMethod, any> = {
  COD: faMoneyBillWave,
  UPI: faWallet,
  Card: faCreditCard,
};

const colorsMap: Record<PaymentMethod, string> = {
  COD: "text-green-600",
  UPI: "text-purple-600",
  Card: "text-blue-600",
};

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();

  // slices
  const { address: userAddress } = useAppSelector((state) => state.userLocation);
  const { data: cartItemsData } = useGetAllCartItemsQuery(undefined, {
    skip: !isOpen,
  });
  const [placeOrders, { isLoading: isPlacing }] = usePlaceOrdersMutation();

  // parse address safely (avoid 'state' naming confusion)
  const [streetParsed, stateName, country] = userAddress?.split(",") || [];

  // accessibility refs
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  // Esc to close
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // basic focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    focusable[0]?.focus();
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [isOpen]);

  const validationSchema = useMemo(
    () =>
      Yup.object({
        fullName: Yup.string().trim().required("Name is required"),
        phone: Yup.string()
          .trim()
          .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone")
          .required("Phone is required"),
        address: Yup.string().trim().required("Address is required"),
        doorno: Yup.string().trim().required("Door/Flat no. is required"),
        area: Yup.string().trim().required("Street/Area is required"),
        landmark: Yup.string().trim().nullable(),
        pincode: Yup.string()
          .trim()
          .matches(/^\d{6}$/, "Enter a valid 6-digit pincode")
          .required("Pincode is required"),
        paymentMethod: Yup.mixed<PaymentMethod>()
          .oneOf(paymentMethods as readonly PaymentMethod[], "Select a payment method")
          .required("Payment method is required"),
      }),
    []
  );

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      address: userAddress || "",
      doorno: "",
      area: streetParsed || "",
      landmark: "",
      pincode: "",
      deliveryMethod: "standard",
      paymentMethod: "" as "" | PaymentMethod,
    },
    validationSchema,
    onSubmit: async (vals) => {
      if (!cartItemsData?.result?.length) {
        alert("Your cart is empty");
        return;
      }

      const products = cartItemsData.result.map((item) => ({
        productId: item.productId,
        productVariantId: item.variantId,
        quantity: item.quantity,
      }));

      const deliveryFee = 50;
      const payload = {
        products,
        street: vals.area,
        flatNo: vals.doorno,
        state: stateName?.trim() || "",
        city: stateName?.trim() || "",
        country: country?.trim() || "India",
        landmark: vals.landmark,
        zipCode: vals.pincode,
        paymentMethod:
          (vals.paymentMethod as PaymentMethod)?.toLowerCase() ?? "cod",
        address: vals.address,
        deliveryFee,
        phone: vals.phone,
        fullName: vals.fullName,
      };

      try {
        const res = await placeOrders(payload);
        const data = res?.data?.placeOrder?.placeOrder?.order;

        if (!data?.id || !data?.amount) {
          console.error("Invalid Razorpay order data:", data);
          alert("Failed to create Razorpay order. Please try again.");
          return;
        }
        openRazorpayCheckout(data, vals);
      } catch (err) {
        console.error("Order placement failed:", err);
        alert("Something went wrong while placing your order. Please try again.");
      }
    },
  });

  const {
    values: {
      fullName,
      phone,
      address,
      doorno,
      area,
      landmark,
      pincode,
      paymentMethod,
    },
    errors,
    touched,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = formik;

  const deliveryFee = 50;
  const subtotal =
    cartItemsData?.result?.reduce((sum, item) => sum + item.price * item.quantity, 0) ?? 0;
  const total = subtotal + deliveryFee;

  const openRazorpayCheckout = (
    orderData: { id: string; amount: number; currency?: string },
    vals: typeof formik.values
  ) => {
    const options = {
      key: process.env.RAZORPAY_KEY_ID,
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

          if (!verifyRes.ok) throw new Error("Payment verification failed");
          alert("Payment successful! Your order is placed.");
          onClose();
        } catch (err) {
          console.error("Payment verification failed:", err);
          alert("Payment successful but verification failed. Please contact support.");
        }
      },
      prefill: {
        name: vals.fullName || "",
        email: user?.email || "",
        contact: vals.phone || "",
      },
      theme: { color: "#dc2626" }, // Tailwind red-600
      modal: {
        ondismiss: () => {
          // Optional: handle dismiss if needed
        },
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative mx-auto mt-10 w-[min(95vw,40rem)] max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl ring-1 ring-black/5
                   animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white/80 px-5 py-4 backdrop-blur">
          <h2 id="checkout-title" className="text-xl font-bold">
            Checkout
          </h2>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
            aria-label="Close checkout modal"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="space-y-6 px-5 py-5">
          {/* Customer Details */}
          <section aria-labelledby="customer-details" className="space-y-3">
            <h3 id="customer-details" className="font-semibold">
              Customer Details
            </h3>

            <div className="grid grid-cols-1 gap-3">
              <div>
                <input
                  name="fullName"
                  type="text"
                  value={fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full rounded-lg border px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                  aria-invalid={!!(touched.fullName && errors.fullName)}
                  aria-describedby={touched.fullName && errors.fullName ? "err-fullName" : undefined}
                />
                {touched.fullName && errors.fullName && (
                  <p id="err-fullName" className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              <div>
                <input
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full rounded-lg border px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                  aria-invalid={!!(touched.phone && errors.phone)}
                  aria-describedby={touched.phone && errors.phone ? "err-phone" : undefined}
                />
                {touched.phone && errors.phone && (
                  <p id="err-phone" className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>
          </section>

          {/* Address */}
          <section aria-labelledby="address-section" className="space-y-3">
            <h3 id="address-section" className="font-semibold">Address</h3>

            <div className="grid grid-cols-1 gap-3">
              <div>
                <input
                  name="address"
                  type="text"
                  value={address}
                  onChange={handleChange}
                  placeholder="Full Address"
                  className="w-full rounded-lg border px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                  aria-invalid={!!(touched.address && errors.address)}
                />
                {touched.address && errors.address && (
                  <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <input
                    name="doorno"
                    type="text"
                    value={doorno}
                    onChange={handleChange}
                    placeholder="Door / Flat No."
                    className="w-full rounded-lg border px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                    aria-invalid={!!(touched.doorno && errors.doorno)}
                  />
                  {touched.doorno && errors.doorno && (
                    <p className="mt-1 text-sm text-red-600">{errors.doorno}</p>
                  )}
                </div>

                <div>
                  <input
                    name="area"
                    type="text"
                    value={area}
                    onChange={handleChange}
                    placeholder="Street / Area"
                    className="w-full rounded-lg border px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                    aria-invalid={!!(touched.area && errors.area)}
                  />
                  {touched.area && errors.area && (
                    <p className="mt-1 text-sm text-red-600">{errors.area}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <input
                    name="landmark"
                    type="text"
                    value={landmark}
                    onChange={handleChange}
                    placeholder="Landmark (optional)"
                    className="w-full rounded-lg border px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                  />
                </div>

                <div>
                  <input
                    name="pincode"
                    type="tel"
                    value={pincode}
                    onChange={handleChange}
                    placeholder="Pincode"
                    className="w-full rounded-lg border px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                    aria-invalid={!!(touched.pincode && errors.pincode)}
                  />
                  {touched.pincode && errors.pincode && (
                    <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Payment */}
          <section aria-labelledby="payment-method" className="space-y-3">
            <h3 id="payment-method" className="font-semibold">Payment Method</h3>

            <div className="grid grid-cols-1 gap-2">
              {paymentMethods.map((method) => {
                const selected = paymentMethod === method;
                return (
                  <label
                    key={method}
                    className={`flex items-center gap-3 rounded-xl border p-3 transition
                    ${selected ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300"}`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={selected}
                      onChange={() => setFieldValue("paymentMethod", method)}
                      className="sr-only"
                    />
                    <FontAwesomeIcon
                      icon={iconsMap[method]}
                      className={`${colorsMap[method]} text-xl`}
                    />
                    <span className="select-none">
                      {method === "COD"
                        ? "Cash on Delivery"
                        : method === "UPI"
                          ? "UPI / Wallet"
                          : "Credit / Debit Card"}
                    </span>
                  </label>
                );
              })}
            </div>
            {touched.paymentMethod && errors.paymentMethod && (
              <p className="mt-1 text-sm text-red-600">{errors.paymentMethod as string}</p>
            )}
          </section>

          {/* Order Summary */}
          <section aria-labelledby="order-summary" className="space-y-3 border-t pt-4">
            <h3 id="order-summary" className="font-semibold">Order Summary</h3>

            <div className="space-y-2 text-gray-700">
              {cartItemsData?.result?.map((item) => (
                <div key={item.productId} className="flex justify-between">
                  <span className="truncate">
                    {item.productName} × {item.quantity}
                  </span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="sticky bottom-0 z-10 -mx-5 border-t bg-white/80 px-5 py-4 backdrop-blur">
            <button
              type="submit"
              disabled={isPlacing}
              className="w-full rounded-lg bg-red-600 py-3 font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              aria-busy={isPlacing}
            >
              {isPlacing ? "Processing..." : "Proceed to Pay"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
