"use client";

import React, { useState } from "react";
import Image from "next/image";

//third-party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

//components
import ProductModal from "@/components/product-modal/ProductModal";


//types
type ProductCardProps = {
  title: string;
  subtitle: string;
  price: string;
  quantityText?: string;
  image: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  subtitle,
  price,
  quantityText = "1 pack (200g)",
  image,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  const product = {
    title: "Lay's Kettle Cooked Jalapeno Potato Chips",
    description:
      "Crispy, crunchy kettle-cooked chips with a spicy kick of jalapeño. Perfect snack for parties or solo munching!",
    price: 22000,
    stock: 342,
    category: "Snacks",
    tags: ["chips", "spicy", "kettle cooked", "lay's"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
  };

  return (
    <>
      <article
        className="w-[220px] bg-white rounded-2xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition-transform duration-300 ease-in-out cursor-pointer hover:-translate-y-1"
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
          <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-md hover:scale-110 transition">
            <FontAwesomeIcon
              icon={faHeart}
              size="lg"
              className="text-red-500"
            />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Price and Quantity Controls */}
          <div className="flex justify-between items-center font-bold mb-2">
            <p>{price}</p>
            <div>
              {quantity === 0 ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    increment();
                  }}
                  className="bg-red-600 text-white rounded-full px-3 py-1 text-sm font-semibold shadow hover:bg-red-700"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              ) : (
                <div className="flex items-center bg-red-600 text-white rounded-full px-3 py-1 gap-2 text-sm font-semibold">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      decrement();
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
          <p className="text-sm text-gray-500 mb-1">{subtitle}</p>
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
