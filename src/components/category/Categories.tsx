"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

//components
import CategoriesFilter from "./components/categories-filter/CategoriesFilter";
import CategoriesCard from "./components/categories-card/CategoriesCard";

//slices
import { useGetCategoriesQuery, useLazyGetProductsByCategoryQuery } from "@/lib/slices/categoriesApiSlice";
import Loading from "../common/Loading";

const Categories = () => {
  const searchParams = useSearchParams();
  const [subCatId, setSubCatId] = useState<string>();
  const [brandId, setBrandId] = useState<string>();
  const categoryId = searchParams.get("categoryId");
  const [getProductsByCategory, { data: products,isLoading:isProductsLoading,isFetching:isProductsFetching}] =
    useLazyGetProductsByCategoryQuery();
  const { data: categoriesData, isLoading: isCategoryLoading } =
      useGetCategoriesQuery();

  useEffect(() => {
    const params = {
      categoryId: categoryId,
      subCategoryId: subCatId,
      brandId: brandId,
    };
    getProductsByCategory(params);
  }, [subCatId, categoryId, brandId]);

  const isLoading = isCategoryLoading || isProductsLoading;

  return (
    <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
      <div className="flex pb-16 pt-7 lg:pt-7 lg:pb-20 gap-[2rem]">
        {
          isLoading ? (
            <Loading size={60} thickness={5} color="#dc2626" />
          ) : (
            <>
              <CategoriesFilter
                categoryId={categoryId}
                subCatId={subCatId}
                setBrandId={setBrandId}
                setSubCatId={setSubCatId}
                categoriesData={categoriesData}
              />
              <CategoriesCard products={products?.products || []} isProductsFetching={isProductsFetching} />
            </>
          )
        }
      </div>
    </div>
  );
};

export default Categories;
