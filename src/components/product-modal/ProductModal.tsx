"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

//types
type Product = {
  title: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  tags: string[];
  image: string;
};

type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  relatedProducts?: Product[];
  onAddToCart?: (product: Product, quantity: number) => void;
  onRelatedProductClick?: (product: Product) => void;
};

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product,
  relatedProducts = [],
  onAddToCart,
  onRelatedProductClick,
}) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOpen) setQuantity(1);
  }, [isOpen, product]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const increaseQty = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  if (!isOpen) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-labelledby="product-modal-title"
      aria-describedby="product-modal-description"
      tabIndex={-1}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded p-6 max-w-xl w-full shadow-lg overflow-y-auto max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 id="product-modal-title" className="text-xl font-semibold">
            {product.title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-gray-600 hover:text-gray-900 font-bold text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Image with overlay if out of stock */}
        <div className="flex justify-center mb-4 relative">
          <Image
            src={product.image}
            alt={product.title}
            width={250}
            height={250}
            className="rounded object-contain"
          />
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center rounded">
              <span className="text-red-600 font-bold text-lg">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Details */}
        <p id="product-modal-description" className="mb-2 text-gray-700">
          {product.description}
        </p>

        <p className="font-bold text-lg mb-1">
          {product.price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </p>
        <p className="mb-1">
          Stock:{" "}
          <span
            className={product.stock === 0 ? "text-red-600 font-semibold" : ""}
          >
            {product.stock}
          </span>
        </p>
        <p className="mb-2">
          Category: <span className="font-medium">{product.category}</span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4" aria-label="Product tags">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 rounded px-2 py-1 text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Quantity selector */}
        <div className="flex items-center mb-4" aria-label="Select quantity">
          <button
            onClick={decreaseQty}
            className="px-3 py-1 border rounded-l bg-gray-100 hover:bg-gray-200"
            disabled={quantity === 1 || product.stock === 0}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="px-4 py-1 border-t border-b" aria-live="polite">
            {quantity}
          </span>
          <button
            onClick={increaseQty}
            className="px-3 py-1 border rounded-r bg-gray-100 hover:bg-gray-200"
            disabled={quantity === product.stock || product.stock === 0}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Add to Cart button */}
        <button
          onClick={() => onAddToCart?.(product, quantity)}
          className={`w-full py-2 rounded text-white transition ${
            product.stock === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
          disabled={product.stock === 0}
          aria-disabled={product.stock === 0}
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-6" aria-labelledby="related-products-heading">
            <h4 id="related-products-heading" className="font-semibold mb-2">
              Related Products
            </h4>
            <div className="flex gap-4 overflow-x-auto" role="list">
              {relatedProducts.map((relProd) => (
                <div
                  key={relProd.title}
                  className="min-w-[120px] cursor-pointer"
                  role="listitem"
                  tabIndex={0}
                  onClick={() => onRelatedProductClick?.(relProd)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") onRelatedProductClick?.(relProd);
                  }}
                  aria-label={`View details for ${relProd.title}`}
                >
                  <Image
                    src={relProd.image}
                    alt={relProd.title}
                    width={120}
                    height={120}
                    className="rounded"
                  />
                  <p className="text-sm font-medium mt-1 truncate">
                    {relProd.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {relProd.price.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
