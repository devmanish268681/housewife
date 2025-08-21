"use client";

import React from "react";
import { useRouter } from "next/navigation";

//components
import Chip from "../common/Chip";
import Category from "./components/category/Category";
import Recommended from "./components/recommended/Recommended";
import DeliverySteps from "./components/delivery-steps/DeliverySteps";
import SectionCard from "./components/section-card/SectionCard";
import FeatureProducts from "./components/feature-products/FeatureProducts";

//constants
import { popularSearches } from "@/constants/constants";
import { useGetCategoriesQuery } from "@/lib/slices/categoriesApiSlice";
import { useGetProductsQuery } from "@/lib/slices/productsApiSlice";

const HomePage = () => {
  const { data: categoriesData } = useGetCategoriesQuery();
  const { data: products } = useGetProductsQuery();
  const beautyCategoryId = categoriesData?.categories.find(
    (category) => category.name === "Cosmetics & Personal Care"
  )?.id;
  const groceryCategoryId = categoriesData?.categories.find(
    (category) => category.name === "Groceries"
  )?.id;
  const dryFruitsCategoryId = categoriesData?.categories.find(
    (category) => category.name === "Dry Fruits & Nuts"
  )?.id;
  const stationaryCategoryId = categoriesData?.categories.find(
    (category) => category.name === "Stationery Items"
  )?.id;
  const beautyCategoryProducts = products?.data
    .filter((product) => product.categoryId === beautyCategoryId)
    .slice(0, 10);
  const dryFruitsCategoryProducts = products?.data
    .filter((product) => product.categoryId === dryFruitsCategoryId)
    .slice(0, 10);
  const groceryCategoryProducts = products?.data
    .filter((product) => product.categoryId === groceryCategoryId)
    .slice(0, 10);
  const stationaryCategoryProducts = products?.data
    .filter((product) => product.categoryId === stationaryCategoryId)
    .slice(0, 10);

  const getMiddleTwo = (arr: any[]) => {
    if (!arr || arr.length < 2) return arr || [];
    const mid = Math.floor(arr.length / 2);
    return arr.slice(mid - 1, mid + 1);
  };

  const popularItems = [
    ...getMiddleTwo(beautyCategoryProducts || []),
    ...getMiddleTwo(dryFruitsCategoryProducts || []),
    ...getMiddleTwo(groceryCategoryProducts || []),
    ...getMiddleTwo(stationaryCategoryProducts || []),
  ];
  const router = useRouter();

  return (
    <div className="mt-4">
      <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Popular Searches
      </h2>
      <div className="flex gap-3 p-3 flex-wrap">
        {popularSearches.map((item, index) => (
          <Chip
            key={index}
            onClick={() => router.push(`/products/${item.toLowerCase()}`)}
          >
            {item}
          </Chip>
        ))}
      </div>
      <Category />
      <FeatureProducts />
      {/* <DealSection /> */}
      <Recommended items={popularItems || []} />
      <DeliverySteps />
      <SectionCard
        title="Beauty & Self-Care"
        items={beautyCategoryProducts || []}
      />
      <SectionCard
        title="Daily Fresh & Pantry"
        items={dryFruitsCategoryProducts || []}
      />
      <SectionCard
        title="Healthy Snacking"
        items={groceryCategoryProducts || []}
      />
      <SectionCard
        title="Back to School / Work Essentials"
        items={stationaryCategoryProducts || []}
      />
    </div>
  );
};

export default HomePage;
