"use client";
import React from "react";

//components
import ProductCard from "../product-card/ProductCard";

//constants
import { products } from "@/constants/constants";

const CategoriesCard = () => {
  
  return (
    <div className="w-full lg:pt-[4rem] lg:ltr:-ml-4 lg:rtl:-mr-2 xl:ltr:-ml-8 xl:rtl:-mr-8 lg:-mt-1">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-3 md:gap-4 2xl:gap-5">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
            quantityText={product.quantityText}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesCard;
