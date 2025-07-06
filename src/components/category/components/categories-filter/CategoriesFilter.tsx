"use client";

import React from "react";

//components
import CircleCheckbox from "../circle-checkbox/CircleCheckbox";
import CategoryAccordion from "../categories-accordion/CategoriesAccordion";

const CategoriesFilter = () => {
  const categories = [
    {
      title: "Fresh Vegetables",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
      subcategories: ["Arugula", "Broccoli", "Spinach"],
    },
    {
      title: "Fruits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
      subcategories: ["Apple", "Banana", "Orange"],
    },
    {
      title: "Dairy Products",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7S7Jv8jRcgvw6Jer_oGOSWY6eCEYDcJcHc3yDpGUhfxVdDl8LhZ1UBu3EExL9OIybfx8qg-CFUF4g8DSvKfuWz73TbmTW5aZb_SwTc8XZkunjD98EtzDWQZkRjTHX7KqTT6J4_HvanYMOYKGAUg6dqOjwWpYp7rVMChnuAmUhL0sqerBu08omTDSwjm0RTKK4K0OBYbHUejq1LyYF42UdfymFnjIEie8fXmqILEb5-vFRuP-9JXkZBE6tHUNkvFK-J9ZTE3M2yxQ",
      subcategories: ["Milk", "Cheese", "Butter"],
    },
  ];

  const brands = ["Good & Gather", "Green Giant", "Veg-land"];

  return (
    <div className="sticky top-16 hidden shrink-0 lg:block h-full w-80 xl:w-96 pt-4 ltr:pr-8 rtl:pl-8 xl:ltr:pr-16 xl:rtl:pl-16">
      {/* Categories */}
      <div>
        <h3 className="mb-5 font-semibold text-lg">Categories</h3>
        <div className="border border-gray-200 rounded-xl">
          {categories.map((cat, index) => (
            <CategoryAccordion
              key={index}
              title={cat.title}
              image={cat.image}
              subcategories={cat.subcategories}
              isLast={index === categories.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="my-5 font-semibold text-lg">Brands</h3>
        <div className="border border-gray-200 rounded-xl px-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`flex justify-between items-center py-3 ${
                index !== brands.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <p className="text-gray-700">{brand}</p>
              <CircleCheckbox />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesFilter;
