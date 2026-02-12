"use client";

export default function FilterSidebarSkeleton() {
  return (
    <section
      className="h-full w-full px-4 lg:w-80 xl:w-96 ltr:pr-8 rtl:pl-8 xl:ltr:pr-16 xl:rtl:pl-16 overflow-y-auto bg-white"
      style={{ height: "calc(100vh - 100px)" }}
    >
      {/* Search Bar Skeleton */}
      <div className="mb-4 mt-[7px] px-2">
        <div className="h-10 w-full rounded bg-gray-200 animate-pulse" />
      </div>

      {/* Subcategories Skeleton */}
      <div className="flex flex-col gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-2 rounded-lg"
          >
            {/* Image */}
            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />

            {/* Name */}
            <div className="h-4 flex-1 rounded bg-gray-200 animate-pulse" />

            {/* Count */}
            <div className="h-4 w-8 rounded bg-gray-200 animate-pulse" />
          </div>
        ))}
      </div>

      {/* Brands Skeleton */}
      <div className="mt-8">
        <div className="h-5 w-24 mb-4 rounded bg-gray-200 animate-pulse" />

        <div className="flex flex-col gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-9 w-full rounded bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
