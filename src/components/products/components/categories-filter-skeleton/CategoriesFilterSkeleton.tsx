"use client";

import FilterSidebarSkeleton from "./FilterSidebarSkeleton";

export default function CategoriesFilterSkeleton() {
  return (
    <aside>
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <div className="h-12 w-28 rounded-full bg-gray-200 animate-pulse" />
      </div>

      <div className="sticky top-16 hidden shrink-0 lg:block h-full w-80 xl:w-96 ltr:pr-8 rtl:pl-8 xl:ltr:pr-16 xl:rtl:pl-16 max-h-[90vh]">
        <FilterSidebarSkeleton />
      </div>
    </aside>
  );
}
