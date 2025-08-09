import React, { useState } from "react";

//components
import Carousel from "../carousel/Carousel";
import { useRouter } from "next/navigation";

//constants
import {
  frequentlyBought,
  popularItems,
  recommended,
} from "@/constants/constants";

const Recommended = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-6 flex flex-col gap-4">
      <Carousel
        title="Recommended for you"
        items={recommended}
        onClick={(item) => router.push(`/category/${item.title.toLowerCase()}`)}
      />
      <Carousel
        title="Frequently Bought"
        items={frequentlyBought}
        onClick={() => setIsModalOpen(true)}
      />
      <Carousel
        title="Popular Items"
        items={popularItems}
        onClick={() => setIsModalOpen(true)}
      />
      {/* 
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      /> */}
    </div>
  );
};

export default Recommended;
