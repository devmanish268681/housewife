"use client";

export default function ProductCardSkeleton() {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow animate-pulse">
      {/* Image */}
      <div className="relative flex justify-center w-[150px] h-[150px] mx-auto">
        <div className="w-[120px] h-[120px] mt-4 bg-gray-200 rounded-lg" />
      </div>

      {/* Info */}
      <div className="p-4 space-y-3">
        {/* Price row */}
        <div className="flex gap-2 items-center">
          <div className="h-5 w-14 bg-gray-200 rounded" />
          <div className="h-4 w-10 bg-gray-200 rounded" />
          <div className="ml-auto h-6 w-16 bg-gray-200 rounded-full" />
        </div>

        {/* Quantity text */}
        <div className="h-3 w-24 bg-gray-200 rounded" />

        {/* Title */}
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-3/4 bg-gray-200 rounded" />
      </div>
    </article>
  );
}
