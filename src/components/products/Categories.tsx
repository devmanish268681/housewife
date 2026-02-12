"use client";

import React, {useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

//slices
import {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} from "@/lib/slices/categoriesApiSlice";

//components
import Loading from "../common/Loading";
import CategoriesCard from "./components/categories-card/CategoriesCard";
import CategoriesFilter from "./components/categories-filter/CategoriesFilter";
import CategoriesFilterSkeleton from "./components/categories-filter-skeleton/CategoriesFilterSkeleton";
import CategoriesCardSkeleton from "./components/categories-card-skeleton/CategoriesCardsSkeleton";

const Categories = () => {
  //state & hooks
  const searchParams = useSearchParams();
  const [subCatId, setSubCatId] = useState<string>();
  const [brandId, setBrandId] = useState<string>();

  //params
  const category = searchParams.get("category");
  const params = useParams();
  const categoryId = params?.categoryId as string;

  //slices
  const { data: products, isLoading: isProductsLoading, isFetching: isProductsFetching } =
    useGetProductsByCategoryQuery({categoryId,subCategoryId:subCatId,brandId});
  const { data: categoriesData, isLoading: isCategoryLoading } = useGetCategoriesQuery();

  return (
    <main className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10" style={{ height: "100vh" }}>
      <h1 className="text-3xl font-bold text-center p-6 capitalize">{category}</h1>
      <div className="flex gap-[2rem] pb-16 lg:pb-20" aria-label="Product Categories">
        {isCategoryLoading ? <CategoriesFilterSkeleton /> : (
          <CategoriesFilter
            categoryId={categoryId}
            subCatId={subCatId}
            setBrandId={setBrandId}
            setSubCatId={setSubCatId}
            categoriesData={categoriesData}
          />
        )}
        {isProductsLoading ? <CategoriesCardSkeleton /> : (
            <CategoriesCard products={products?.products || []} isProductsFetching={isProductsFetching} />
        )}
      </div>
    </main>
  );
};

export default Categories;
