import React from "react";

//components
import CategoriesFilter from "./components/categories-filter/CategoriesFilter";
import CategoriesCard from "./components/categories-card/CategoriesCard";

const Categories = () => {
  return (
    <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
      <div className="flex pb-16 pt-7 lg:pt-7 lg:pb-20 gap-[2rem]">
        <CategoriesFilter />
        <CategoriesCard />
      </div>
    </div>
  );
};

export default Categories;
