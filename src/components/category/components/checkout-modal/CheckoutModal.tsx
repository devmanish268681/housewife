"use client";

import React, { useEffect, useState } from "react";

//third-party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMoneyBillWave,
  faWallet,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

//constants
import { cartItemsMock } from "@/constants/constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGeolocation } from "@/lib/hooks/use-geolocation";
import { useAppSelector } from "@/lib/hooks";

//types
export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CheckoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { address: userAddress } = useAppSelector(
    (state) => state.userLocation
  );
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Name is required"),
    phone: Yup.string().required("Password is required"),
    address: Yup.string().required("Address is required"),
  });

  const { values, setFieldValue, handleSubmit } = useFormik({
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
    onSubmit: (value) => {
      console.log(value);
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

  const subtotal = cartItemsMock.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 500 ? 0 : 40;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    alert(`Order placed successfully with ${paymentMethod} payment!`);
    onClose(); // Close modal after placing order
  };

  const paymentMethods = ["COD", "UPI", "Card"];

  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex justify-center items-center">
      {/* Modal */}
      <div className="m-3 bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
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

          {/* Payment Options */}
          <div className="space-y-3">
            <h3 className="font-semibold">Payment Method</h3>
            <div className="space-y-2">
              {paymentMethods.map((method) => {
                const iconsMap = {
                  COD: faMoneyBillWave,
                  UPI: faWallet,
                  Card: faCreditCard,
                } as const;

                const colorsMap = {
                  COD: "text-green-600",
                  UPI: "text-purple-600",
                  Card: "text-blue-600",
                } as const;

                return (
                  <label
                    key={method}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={() => setFieldValue("paymentMethod", method)}
                      className="cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={iconsMap[method]}
                      className={colorsMap[method]}
                    />
                    {method === "COD"
                      ? "Cash on Delivery"
                      : method === "UPI"
                        ? "UPI / Wallet"
                        : "Credit / Debit Card"}
                  </label>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-3 border-t pt-4">
            <h3 className="font-semibold">Order Summary</h3>
            {cartItemsMock.map((item) => (
              <div key={item.id} className="flex justify-between text-gray-700">
                <span>
                  {item.name} x {item.quantity}
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
              <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}</span>
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
            onClick={() => handleSubmit()}
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
