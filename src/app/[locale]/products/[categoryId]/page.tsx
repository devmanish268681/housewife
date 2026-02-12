import React from "react";
import Categories from "@/components/products/Categories";

//components

export const metadata = {
  title: "Products | My Shop",
  description: "Browse product by categories on My Shop.",
};

const Page = () => {
  return (
    <main>
      <section aria-label="Product Categories">
        <Categories />
      </section>
    </main>
  );
};

export default Page;

