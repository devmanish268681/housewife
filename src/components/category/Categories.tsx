"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

//components
import CategoriesFilter from "./components/categories-filter/CategoriesFilter";
import CategoriesCard from "./components/categories-card/CategoriesCard";

//slices
import { useLazyGetProductsByCategoryQuery } from "@/lib/slices/categoriesApiSlice";

const Categories = () => {
  const searchParams = useSearchParams();
  const [subCatId, setSubCatId] = useState<string>();
  const [brandId, setBrandId] = useState<string>();
  const categoryId = searchParams.get("categoryId");
  const [getProductsByCategory, { data: products }] =
    useLazyGetProductsByCategoryQuery();

  useEffect(() => {
    const params = {
      categoryId: categoryId,
      subCategoryId: subCatId,
      brandId: brandId,
    };
    getProductsByCategory(params);
  }, [subCatId, categoryId, brandId]);

  return (
    <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
      <div className="flex pb-16 pt-7 lg:pt-7 lg:pb-20 gap-[2rem]">
        <CategoriesFilter
          categoryId={categoryId}
          subCatId={subCatId}
          setBrandId={setBrandId}
          setSubCatId={setSubCatId}
        />
        <CategoriesCard products={products?.products || []} />
      </div>
    </div>
  );
};

export default Categories;
