"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

//third-party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

//components
import ProductModal from "@/components/product-modal/ProductModal";

//constants
import { decrementQuantity, incrementQuantity } from "@/lib/slices/cartSlice";

//slices
import {
  useAddToCartMutation,
  useDeleteFromCartMutation,
  useGetAllCartItemsQuery,
} from "@/lib/slices/cartApiSlice";

//context & hooks
import { useAppDispatch } from "@/lib/hooks";
import { useAuth } from "@/lib/context/authContext";

//types
import { ProductCardProps } from "./types";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  price,
  stock,
  variantId,
  category,
  quantityText = "1 pack (200g)",
  image,
}) => {
  //hooks
  const [quantity, setQuantity] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { user } = useAuth();

  //slices
  const [addToCart] = useAddToCartMutation();
  const [deleteFromCart] = useDeleteFromCartMutation();
  const { data: cartItems } = useGetAllCartItemsQuery();

  const isProductInCart = cartItems?.result?.filter(
    (item) => item.productId === id
  );

  const product = {
    id: id,
    title: title,
    description: description,
    price: price,
    variantId: variantId,
    stock: stock,
    category: category,
    tags: ["category"],
    image: image,
  };

  const updateCart = async (newQuantity: number) => {
    const payload = {
      productId: id,
      productVariantId: variantId,
      quantity: newQuantity,
    };

    if (user) {
      try {
        await addToCart(payload).then(() => setQuantity(newQuantity));
      } catch (error) {
        toast.error("Failed to update cart");
      }
    } else {
      if (newQuantity > quantity) {
        dispatch(
          incrementQuantity({
            id,
            name: title,
            image,
            price,
            quantity: newQuantity,
          })
        );
      } else {
        dispatch(
          decrementQuantity({
            id,
          })
        );
      }
      setQuantity(newQuantity);
    }
  };

  const handleAddButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const newQuantity = quantity + 1;
    await updateCart(newQuantity);
    toast.success("Product added successfully to cart");
  };

  const handleIncrementQuantity = async (action: "increment" | "decrement") => {
    const newQuantity = action === "increment" ? quantity + 1 : quantity !== 1 ? quantity - 1 : 0;
    if (newQuantity < 1) return;
    await updateCart(newQuantity);
  };

  useEffect(() => {
    if (isProductInCart && isProductInCart.length > 0) {
      setQuantity(isProductInCart[0].quantity);
    }
  }, []);

  return (
    <>
      <article
        className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition-transform duration-300 ease-in-out cursor-pointer hover:-translate-y-1"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Product Image */}
        <div className="relative flex justify-center">
          <Image
            src={image}
            alt={title}
            width={150}
            height={150}
            className="p-4"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Price and Quantity Controls */}
          <div className="flex justify-between items-center font-bold mb-2">
            <p>&#8377;{price}</p>
            <div>
              {quantity === 0 ? (
                <button
                  onClick={(e) => handleAddButton(e)}
                  className="bg-red-600 text-white rounded-full px-3 py-1 text-sm font-semibold shadow hover:bg-red-700"
                >
                  Add
                </button>
              ) : (
                <div className="flex items-center bg-red-600 text-white rounded-full px-3 py-1 gap-2 text-sm font-semibold">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleIncrementQuantity("decrement");
                    }}
                    className="hover:text-gray-200"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleIncrementQuantity("increment");
                    }}
                    className="hover:text-gray-200"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-base font-semibold text-gray-900 mb-1">
            {title}
          </h3>
          <p className="text-xs text-gray-400">{quantityText}</p>
        </div>
      </article>

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;
