"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

//third-party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTrash,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

//components
import CheckoutModal from "../category/components/checkout-modal/CheckoutModal";

//context
import { useAuth } from "@/lib/context/authContext";

//slices
import {
  useAddToCartMutation,
  useDeleteFromCartMutation,
  useGetAllCartItemsQuery,
} from "@/lib/slices/cartApiSlice";

//types
type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  //hooks
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const { isLoggedIn, user } = useAuth();
  const router = useRouter();

  //slices
  const [addToCart] = useAddToCartMutation();
  const [deleteFromCart] = useDeleteFromCartMutation();
  const { data: cartItemsData } = useGetAllCartItemsQuery();

  const handleLogin = () => {
    params.set("signIn", "true");
    console.log(params.toString());
    router.push(`?${params.toString()}`);
  };

  const updateCart = async (
    newQuantity: number,
    id: string,
    variantId: string
  ) => {
    const payload = {
      productId: id,
      productVariantId: variantId,
      quantity: newQuantity,
    };

    if (user) {
      try {
        await addToCart(payload);
      } catch (error) {
        toast.error("Failed to update cart");
      }
    }
  };

  const handleIncrementQuantity = async (
    action: "increment" | "decrement",
    quantity: number,
    id: string,
    variantId: string
  ) => {
    const newQuantity =
      action === "increment" ? quantity + 1 : quantity !== 1 ? quantity - 1 : 0;
    if (newQuantity < 1) return;
    await updateCart(newQuantity, id, variantId);
  };

  const handleDelete = (id: string) => {
    deleteFromCart(id).then(() =>
      toast.success("Item removed from cart successfully")
    );
  };

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const getSubtotal = () =>
    cartItemsData?.result?.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

  const deliveryFee = 50;
  const total = Number(getSubtotal()) + deliveryFee;

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 right-0 h-full w-full lg:w-[400px] bg-white shadow-lg z-50"
      style={{ transition: "transform 0.3s ease-in-out" }}
    >
      {/* Cart Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>

      {isLoggedIn ? (
        <>
          <div className="p-4 space-y-4 overflow-y-auto max-h-[70vh]">
            {cartItemsData?.result?.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">
                Your cart is empty 😔
              </p>
            ) : (
              cartItemsData?.result?.map((item) => (
                <div
                  key={item.productId}
                  className="flex items-center gap-3 border rounded-lg p-3"
                >
                  <Image
                    src={item?.image[0]}
                    alt={item.productName}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.productName}</h3>
                    <p className="text-sm text-gray-500">
                      ₹{item.price} per kg
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleIncrementQuantity(
                          "decrement",
                          item.quantity,
                          item.productId,
                          item.variantId
                        );
                      }}
                      className="p-1 border rounded hover:bg-gray-100"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => {
                        handleIncrementQuantity(
                          "increment",
                          item.quantity,
                          item.productId,
                          item.variantId
                        );
                      }}
                      className="p-1 border rounded hover:bg-gray-100"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          {cartItemsData && cartItemsData?.result?.length > 0 && (
            <div className="p-4 border-t space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{getSubtotal()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
              <button
                className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition"
                onClick={() => handleCheckout()}
              >
                Proceed to Checkout
              </button>
            </div>
          )}

          <CheckoutModal
            isOpen={isCheckoutOpen}
            onClose={() => setIsCheckoutOpen(false)}
          />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <div className="mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-xs border">
            <h3 className="text-lg font-semibold mb-4 text-[#181111] text-center">
              Please login to access cart
            </h3>
            <button
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold shadow transition"
              onClick={() => handleLogin()}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
