"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";

//components
import CircleCheckbox from "../circle-checkbox/CircleCheckbox";
import CategoryAccordion from "../categories-accordion/CategoriesAccordion";
import { products as mockProducts } from "@/constants/constants";
import ProductCard from "../product-card/ProductCard";

//constants
import { useGetCategoriesQuery } from "@/lib/slices/categoriesApiSlice";

const CategoriesFilter = ({ category }: { category: string }) => {
  const { data: categoriesData, isLoading: isCategoryLoading } = useGetCategoriesQuery();
  const [search, setSearch] = useState("");

  // Find the current category object
  const currentCategory = categoriesData?.categories?.find(
    (cat) => cat?.name?.toLowerCase() === category?.toLowerCase()
  );

  if (!currentCategory) return null;

  // Prepare mock products for this category with all required fields
  const filteredProducts = mockProducts
    .map((product, idx) => ({
      id: String(('id' in product && product.id) ? product.id : idx),
      title: product.title,
      subtitle: String(('subtitle' in product && product.subtitle) ? product.subtitle : ""),
      description: String(('description' in product && product.description) ? product.description : "Sample description for demo."),
      price: typeof product.price === "string" ? Number(product.price.replace(/[^\d.]/g, "")) : (product.price || 0),
      quantityText: product.quantityText,
      image: product.image,
      stock: Number(('stock' in product && product.stock) ? product.stock : 10),
      category: currentCategory.name,
      variantId: ('variantId' in product && product.variantId) ? String(product.variantId) : undefined,
    }));

  // Filtered subcategories and brands
  const filteredSubcategories = currentCategory.subCategory?.filter((sub) =>
    sub.name.toLowerCase().includes(search.toLowerCase())
  );
  const filteredBrands = currentCategory.brands?.filter((brand) =>
    brand.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="sticky top-16 hidden shrink-0 lg:block h-full w-80 xl:w-96 pt-4 ltr:pr-8 rtl:pl-8 xl:ltr:pr-16 xl:rtl:pl-16 overflow-y-auto max-h-[90vh]">
      <h2 className="text-xl font-bold mb-6 text-center">{currentCategory.name}</h2>
      {/* Search Bar */}
      <div className="mb-4 px-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search subcategories or brands..."
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>
      {/* Subcategories List */}
      <div className="flex flex-col gap-2">
        {filteredSubcategories && filteredSubcategories.length > 0 ? (
          filteredSubcategories.map((sub, idx) => (
            <div
              key={sub.id}
              className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${idx === 0 ? 'bg-purple-100' : ''}`}
            >
              <img
                src={currentCategory.image}
                alt={sub.name}
                className="w-10 h-10 object-cover rounded-full border"
              />
              <span className="font-medium text-gray-800 flex-1">{sub.name}</span>
              <span className="text-xs bg-gray-200 rounded px-2 py-0.5 text-gray-600">
                {/* Mock product count */}
                {Math.floor(Math.random() * 20) + 1}
              </span>
            </div>
          ))
        ) : (
          <span className="text-gray-400 text-center">No subcategories found.</span>
        )}
      </div>
      {/* Brands List */}
      {filteredBrands && filteredBrands.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">Brands</h3>
          <div className="flex flex-col gap-2">
            {filteredBrands.map((brand) => (
              <div key={brand.id} className="px-4 py-2 rounded bg-gray-100 text-gray-800 font-medium flex items-center justify-between">
                <span>{brand.name}</span>
                <span className="text-xs bg-gray-200 rounded px-2 py-0.5 text-gray-600">
                  {/* Mock product count */}
                  {Math.floor(Math.random() * 20) + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesFilter;
