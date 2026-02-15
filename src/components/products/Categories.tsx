"use client";

import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useParams, useSearchParams } from "next/navigation";

//slices
import {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} from "@/lib/slices/categoriesApiSlice";

//components
import CategoriesCard from "./components/categories-card/CategoriesCard";
import CategoriesFilter from "./components/categories-filter/CategoriesFilter";
import CategoriesFilterSkeleton from "./components/categories-filter-skeleton/CategoriesFilterSkeleton";
import CategoriesCardSkeleton from "./components/categories-card-skeleton/CategoriesCardsSkeleton";

//types
import type { Categories, CategoryProduct } from "@/lib/types/categories";

type CategoriesContextType = {
  categoryId: string;
  subCatId: string;
  setBrandId: Dispatch<SetStateAction<string>>;
  setSubCatId: Dispatch<SetStateAction<string>>;
  categoriesData: { categories: Categories[] } | undefined;
  products: CategoryProduct | undefined;
  isProductsFetching: boolean;
};

const initial_values = {
  categoryId: "",
  subCatId: "",
  setBrandId: () => {},
  setSubCatId: () => {},
  categoriesData: undefined,
  products: undefined,
  isProductsFetching: false,
};

export const categoryContext =
  createContext<CategoriesContextType>(initial_values);

const Categories = () => {
  //state & hooks
  const searchParams = useSearchParams();
  const [subCatId, setSubCatId] = useState<string>("");
  const [brandId, setBrandId] = useState<string>("");

  //params
  const category = searchParams.get("category");
  const params = useParams();
  const categoryId = params?.categoryId as string;

  //slices
  const {
    data: products,
    isLoading: isProductsLoading,
    isFetching: isProductsFetching,
  } = useGetProductsByCategoryQuery({
    categoryId,
    subCategoryId: subCatId,
    brandId,
  });

  const { data: categoriesData, isLoading: isCategoryLoading } =
    useGetCategoriesQuery();

  return (
    <main
      className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10"
      style={{ height: "100vh" }}
    >
      <h1 className="text-3xl font-bold text-center p-6 capitalize">
        {category}
      </h1>
      <div
        className="flex gap-[2rem] pb-16 lg:pb-20"
        aria-label="Product Categories"
      >
        <categoryContext.Provider
          value={{
            categoryId,
            subCatId,
            setBrandId,
            setSubCatId,
            categoriesData,
            products,
            isProductsFetching,
          }}
        >
          {isCategoryLoading ? (
            <CategoriesFilterSkeleton />
          ) : (
            <CategoriesFilter />
          )}
          {isProductsLoading ? <CategoriesCardSkeleton /> : <CategoriesCard />}
        </categoryContext.Provider>
      </div>
    </main>
  );
};

export default Categories;
