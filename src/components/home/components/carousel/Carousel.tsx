"use client";

import { Product } from "@/lib/types/products";
import { useRouter } from "next/navigation";
import React from "react";

//types
type CarouselItem = {
  title: string;
  image: string;
};

type CarouselProps = {
  title: string;
  items: Product[];
  onClick?: (item: CarouselItem) => void;
};

const Carousel: React.FC<CarouselProps> = ({ title, items, onClick }) => {
  const router = useRouter();
  return (
    <section className="px-4">
      <h2 className="text-xl font-bold mb-3 text-[#181111]">{title}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {items?.map((item, idx) => (
          <div
            key={idx}
            className="w-[250px] flex-shrink-0 flex flex-col gap-2 cursor-pointer"
            onClick={() =>
              router.push(`category/groceries?categoryId=${item.categoryId}`)
            }
          >
            <div
              className="aspect-square rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${item.images[0]})` }}
            ></div>
            <p className="text-sm font-medium text-[#181111]">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
