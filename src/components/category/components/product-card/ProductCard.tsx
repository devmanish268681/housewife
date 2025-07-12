"use client";

import React, { useState } from "react";
import Image from "next/image";

//third-party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

//components
import ProductModal from "@/components/product-modal/ProductModal";

//constants
import { product } from "@/constants/constants";
import { useAppDispatch } from "@/lib/hooks";
import { decrementQuantity, incrementQuantity } from "@/lib/slices/cartSlice";

//types
type ProductCardProps = {
  id:string,
  title: string;
  subtitle: string;
  price: number;
  quantityText?: string;
  image: string;
  stock?: number;
  category?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  subtitle,
  price,
  stock,
  category,
  quantityText = "1 pack (200g)",
  image,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
   const dispatch = useAppDispatch();

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  const product = {
    id:id,
    title: title,
    description: "testing hhgdcf ngfdd",
    price: price,
    stock: stock,
    category: category,
    tags: ["category"],
    image: image,
  };


  const handleAddButton = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    increment();
    dispatch(incrementQuantity({ id: id, name: title, quantity:quantity+1,image:image,price:price}))
  }


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
                      decrement();
                      dispatch(decrementQuantity({ id: id}))
                    }}
                    className="hover:text-gray-200"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      increment();
                      dispatch(incrementQuantity({ id: id, name: title, quantity:quantity+1,image:image,price:price}));
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
