import React from "react";
import { useRouter } from "next/navigation";

//constants
import { useGetCategoriesQuery } from "@/lib/slices/categoriesApiSlice";
import Loading from "@/components/common/Loading";

const CategoriesSection = () => {
  const { data: categoriesData, isLoading: isCategoryLoading } =
    useGetCategoriesQuery();

  const router = useRouter();
  return (
    <div className="flex flex-1 py-5">
      <div className="layout-content-container flex flex-col flex-1">
        <h2 className="text-[#181111] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
          Shop by Category
        </h2>
        {isCategoryLoading ? (
          <Loading size={60} thickness={5} color="#dc2626" />
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4 cursor-pointer">
            {categoriesData?.categories?.map((category, index) => (
              <div
                key={index}
                className="flex flex-col relative gap-3 shadow-md rounded-xl"
                onClick={() =>
                  router.push(
                    `/category/${category?.name?.toLowerCase()}?categoryId=${category?.id}`
                  )
                }
              >
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
                <div
                  className="bg-white p-4 absolute bottom-0 w-full h-[70px] rounded-b-[12px]"
                >
                  <p className="text-[#181111] text-lg font-semibold leading-normal">
                    {category.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesSection;
