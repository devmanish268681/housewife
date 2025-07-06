"use client";

import React from "react";

//types
type CarouselItem = {
  title: string;
  image: string;
};

type CarouselProps = {
  title: string;
  items: CarouselItem[];
  onClick?: (item: CarouselItem) => void;
};

const Carousel: React.FC<CarouselProps> = ({ title, items, onClick }) => {
  return (
    <section className="px-4">
      <h2 className="text-xl font-bold mb-3 text-[#181111]">{title}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[250px] flex-shrink-0 flex flex-col gap-2 cursor-pointer"
            onClick={() => onClick?.(item)}
          >
            <div
              className="aspect-square rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <p className="text-sm font-medium text-[#181111]">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
