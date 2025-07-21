"use client";

import React, { useState } from "react";

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
  const [paymentMethod, setPaymentMethod] = useState<"COD" | "UPI" | "Card">(
    "COD"
  );

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
              placeholder="Full Name"
              className="w-full border rounded p-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded p-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded p-2"
            />
          </div>

          {/* Delivery Address */}
          <div className="space-y-3">
            <h3 className="font-semibold">Delivery Address</h3>
            <textarea
              placeholder="Enter your delivery address"
              rows={3}
              className="w-full border rounded p-2"
            />
            <select
              className="w-full border rounded p-2"
              aria-label="Select delivery slot"
              defaultValue=""
            >
              <option value="" disabled>
                Select Delivery Slot
              </option>
              <option value="ASAP">ASAP (within 30 min)</option>
              <option value="Schedule">Schedule for later</option>
            </select>
          </div>

          {/* Payment Options */}
          <div className="space-y-3">
            <h3 className="font-semibold">Payment Method</h3>
            <div className="space-y-2">
              {(["COD", "UPI", "Card"] as const).map((method) => {
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
                      onChange={() => setPaymentMethod(method)}
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
            onClick={handlePlaceOrder}
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
