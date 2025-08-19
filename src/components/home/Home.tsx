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
  const stationaryCategoryId = categoriesData?.categories.find(
    (category) => category.name === "Stationery Items"
  )?.id;
  const beautyCategoryProducts = products?.data
    .filter((product) => product.categoryId === beautyCategoryId)
    .slice(0, 10);
  const stationaryCategoryProducts = products?.data
    .filter((product) => product.categoryId === stationaryCategoryId)
    .slice(0, 10);
  const router = useRouter();
  console.log(beautyCategoryProducts);

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
      <SectionCard
        title="Beauty & Self-Care"
        items={beautyCategoryProducts || []}
      />
      <SectionCard
        title="Back to School / Work Essentials"
        items={stationaryCategoryProducts || []}
      />
      <DeliverySteps />
      <Recommended />
    </div>
  );
};

export default HomePage;
