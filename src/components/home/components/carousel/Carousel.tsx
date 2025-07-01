import React from "react";

const Carousel = ({
  title,
  items,
}: {
  title: string;
  items: { title: string; image: string }[];
}) => {
  return (
    <section className="px-4">
      <h2 className="text-xl font-bold mb-3 text-[#181111]">{title}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[250px] flex-shrink-0 flex flex-col gap-2"
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
