'use client'

import React from "react";
import { useParams, useRouter } from "next/navigation";

//components
import CategoriesFilter from "./components/categories-filter/CategoriesFilter";
import CategoriesCard from "./components/categories-card/CategoriesCard";

//slices
import { useGetProductsByCategoryQuery } from "@/lib/slices/categoriesApiSlice";

const Categories = () => {
  const params = useParams();
  const category = String(params.category).charAt(0).toUpperCase() + String(params.category).slice(1);
  const {data:products} = useGetProductsByCategoryQuery({category:category});

  return (
    <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
      <div className="flex pb-16 pt-7 lg:pt-7 lg:pb-20 gap-[2rem]">
        <CategoriesFilter />
        <CategoriesCard  products={products}/>
      </div>
    </div>
  );
};

export default Categories;
