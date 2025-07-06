"use client";

import React from "react";
import { useRouter } from "next/navigation";

//components
import Input from "../common/Input";
import Chip from "../common/Chip";
import Category from "./components/category/Category";
import DailyDeals from "./components/deals/Deals";
import Recommended from "./components/recommended/Recommended";

const HomePage = () => {
  const router = useRouter();

  const categories = ["Vegetables", "Fruits", "Dairy", "Snacks", "Beverages"];
  return (
    <div className="mt-12">
      <Input placeholder="Search for products" />
      <div className="flex gap-3 p-3 flex-wrap pr-4 pt-5">
        {categories.map((category) => (
          <Chip
            onClick={() => router.push(`/category/${category.toLowerCase()}`)}
          >
            {category}
          </Chip>
        ))}
      </div>
      <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Popular Searches
      </h2>
      <div className="flex gap-3 p-3 flex-wrap">
        <Chip>Organic Apples</Chip>
        <Chip>Local Honey</Chip>
        <Chip>Artisan Cheese</Chip>
        <Chip>Craft Beer</Chip>
        <Chip>Gluten-Free Bread</Chip>
      </div>
      <Category />
      <DailyDeals />
      <Recommended />
    </div>
  );
};

export default HomePage;
