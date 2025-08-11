"use client";

import React from "react";
import { useRouter } from "next/navigation";

//components
import Chip from "../common/Chip";
import Category from "./components/category/Category";
import Recommended from "./components/recommended/Recommended";
import DealSection from "./components/deals/Deals";
import DeliverySteps from "./components/delivery-steps/DeliverySteps";
import SectionCard from "./components/section-card/SectionCard";
import FeatureProducts from "./components/feature-products/FeatureProducts";

//constants
import {popularSearches } from "@/constants/constants";
import { beautyItems, schoolItems } from "./constants";

const HomePage = () => {
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
      <DealSection />
      <SectionCard title="Beauty & Self-Care" items={beautyItems} />
      <SectionCard
        title="Back to School / Work Essentials"
        items={schoolItems}
      />
      <DeliverySteps />
      <Recommended />
    </div>
  );
};

export default HomePage;
