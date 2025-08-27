"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

//types
import { CatgoriesFilterProps } from "./types";


const CategoriesFilter = ({
  categoryId,
  setSubCatId,
  setBrandId,
  categoriesData
}: CatgoriesFilterProps) => {
  const [search, setSearch] = useState("");

  const [drawerOpen, setDrawerOpen] = useState(false); // NEW

  // Find the current category object
  const currentCategory = useMemo(() => {
    return categoriesData?.categories?.find((cat) => cat?.id === categoryId);
  }, [categoriesData, categoryId]);

  // Filtered subcategories and brands
  const filteredSubcategories = useMemo(() =>
    currentCategory?.subCategories?.filter((sub) =>
      sub.name.toLowerCase().includes(search.toLowerCase())
    ), [currentCategory, search]);

  // Filter brands by name
  const filteredBrands = useMemo(() =>
    (currentCategory?.subCategories?.flatMap(sub => sub.brands) ?? []).filter((brand) =>
      brand.name.toLowerCase().includes(search.toLowerCase())
    ), [currentCategory, search]);

  if (!currentCategory) return null;

  // Filter UI content (reusable for sidebar and drawer)
  const filterContent = (
    <div className="h-full w-full px-4 lg:w-80 xl:w-96 ltr:pr-8 rtl:pl-8 xl:ltr:pr-16 xl:rtl:pl-16 overflow-y-auto bg-white" style={{ height: "calc(100vh - 140px)" }}>
      {/* Search Bar */}
      <div className="mb-4 mt-[7px] px-2">
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
        {filteredSubcategories && filteredSubcategories?.length > 0 ? (
          filteredSubcategories?.map((sub, index) => (
            <div
              key={`${sub?.id}-${index}`}
              className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer hover:bg-gray-100`}
              onClick={() => setSubCatId && setSubCatId(sub?.id)}
            >
              <Image
                src={currentCategory?.image}
                alt={sub?.name}
                width={40}
                height={40}
                className="w-10 h-10 object-cover rounded-full border"
              />
              <span className="font-medium text-gray-800 flex-1">
                {sub?.name}
              </span>
              <span className="text-xs bg-gray-200 rounded px-2 py-0.5 text-gray-600">
                {/* Mock product count */}
                {sub?.subCategoryProductStock}
              </span>
            </div>
          ))
        ) : (
          <span className="text-gray-400 text-center">
            No subcategories found.
          </span>
        )}
      </div>
      {/* Brands List */}
      {filteredBrands && filteredBrands?.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">Brands</h3>
          <div className="flex flex-col gap-2">
            {filteredBrands?.map((brand, index) => (
              <div
                key={`${brand?.id} - ${index}`}
                onClick={() => setBrandId && setBrandId(brand?.id)}
                className="px-4 py-2 rounded bg-gray-100 text-gray-800 font-medium flex items-center justify-between"
              >
                <span>{brand?.name}</span>
                <span className="text-xs bg-gray-200 rounded px-2 py-0.5 text-gray-600">
                  {/* Mock product count */}
                  {brand?.individualBrandStock}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile: Filter Button */}
      <button
        className="fixed bottom-6 right-6 z-40 bg-[#e82630] text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg lg:hidden"
        onClick={() => setDrawerOpen(true)}
      >
        Filter
      </button>
      {/* Mobile: Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={() => setDrawerOpen(false)}
            aria-label="true"
          ></div>
          {/* Drawer - now full width and from left */}
          <div className="absolute top-0 left-0 h-full w-full bg-white shadow-2xl flex flex-col animate-slideInLeft relative">
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close filter"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#181111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
            {filterContent}
          </div>
        </div>
      )}
      {/* Desktop: Sidebar */}
      <div className="sticky top-16 hidden shrink-0 lg:block h-full w-80 xl:w-96 ltr:pr-8 rtl:pl-8 xl:ltr:pr-16 xl:rtl:pl-16 overflow-y-auto max-h-[90vh]">
        {filterContent}
      </div>
    </>
  );
};

export default CategoriesFilter;
