'use client'

import React, { useState } from "react";

//types
import { Product } from "./types";

//components
import EditProductModal from "./edit-product-modal/EditProductModal";

//constants
import { mockProducts } from "./constants";

const Products = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (product: Product) => {
    setEditProduct(product);
    setModalOpen(true);
  };

  const handleSave = (updated: Product) => {
    setProducts(products.map((p) => (p.id === updated.id ? updated : p)));
    setModalOpen(false);
  };
  return (
    <div className="w-full relative">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-64"
        />
      </div>
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center transition-transform hover:scale-105 group relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 group-hover:border-blue-400 mb-4 shadow"
              />
              <div className="w-full flex flex-col items-center mb-2">
                <span className="text-lg font-bold mb-1">
                  {product.name}
                </span>
                <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800 font-semibold mb-1">
                  {product.category}
                </span>
                <span className="text-xl font-semibold text-blue-600 mb-2">
                  ${product.price.toFixed(2)}
                </span>
                {product.stock > 0 ? (
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
                    {product.stock} in stock
                  </span>
                ) : (
                  <span className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold">
                    Out of stock
                  </span>
                )}
              </div>
              <div className="flex gap-2 mt-2 w-full justify-center">
                <button
                  className="px-4 py-1 rounded-lg bg-yellow-100 text-yellow-800 font-semibold hover:bg-yellow-200 transition"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button className="px-4 py-1 rounded-lg bg-red-100 text-red-800 font-semibold hover:bg-red-200 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        className="fixed bottom-8 right-8 z-20 px-6 py-3 rounded-full bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition text-lg flex items-center gap-2"
        style={{ boxShadow: "0 8px 32px rgba(59,130,246,0.15)" }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Add Product
      </button>
      <EditProductModal
        product={editProduct}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default Products;
