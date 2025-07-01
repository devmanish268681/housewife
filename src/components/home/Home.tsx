import React from "react";

//components
import Input from "../common/Input";
import Chip from "../common/Chip";
import Category from "./components/category/Category";

const HomePage = () => {
  return (
    <div className="mt-12">
      <Input placeholder="Search for products" />
      <div className="flex gap-3 p-3 flex-wrap pr-4 pt-5">
        <Chip>Vegetables</Chip>
        <Chip>Fruits</Chip>
        <Chip>Dairy</Chip>
        <Chip>Snacks</Chip>
        <Chip>Beverages</Chip>
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
    </div>
  );
};

export default HomePage;
