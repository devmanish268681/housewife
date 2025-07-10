"use client";

import React from "react";

//components
import CircleCheckbox from "../circle-checkbox/CircleCheckbox";
import CategoryAccordion from "../categories-accordion/CategoriesAccordion";

//constants
import { brands, filterCategories } from "@/constants/constants";
import { useGetCategoriesQuery } from "@/lib/slices/categoriesApiSlice";

const CategoriesFilter = () => {
  const { data: categoriesData, isLoading: isCategoryLoading } =
      useGetCategoriesQuery();
  const subcategories = ["Arugula", "Broccoli", "Spinach"];
  
  return (
    <div className="sticky top-16 hidden shrink-0 lg:block h-full w-80 xl:w-96 pt-4 ltr:pr-8 rtl:pl-8 xl:ltr:pr-16 xl:rtl:pl-16">
      {/* Categories */}
      <div>
        <h3 className="mb-5 font-semibold text-lg">Categories</h3>
        <div className="border border-gray-200 rounded-xl">
          {categoriesData?.map((category, index) => (
            <CategoryAccordion
              key={index}
              title={category?.name}
              image={category?.image}
              subcategories={subcategories}
              isLast={index === filterCategories.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="my-5 font-semibold text-lg">Brands</h3>
        <div className="border border-gray-200 rounded-xl px-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`flex justify-between items-center py-3 ${
                index !== brands.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <p className="text-gray-700">{brand}</p>
              <CircleCheckbox />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesFilter;
