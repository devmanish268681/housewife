import React from "react";

// Components
import Category from "./components/category/Category";
import Recommended from "./components/recommended/Recommended";
import DeliverySteps from "./components/delivery-steps/DeliverySteps";
import SectionCard from "./components/section-card/SectionCard";
import FeatureProducts from "./components/feature-products/FeatureProducts";

//services
import { getCategories } from "@/app/lib/services/category.service";
import { getProducts } from "@/app/lib/services/products.service";

export default async function HomePage() {
  const [categoriesData, productsData] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  const categoryMap: Record<string, string | undefined> = {};
  categoriesData.forEach((cat) => {
    categoryMap[cat.name] = cat.id;
  });

  const getTopProducts = (categoryName: string) =>
  productsData.data
      .filter((p) => p.categoryId === categoryMap[categoryName])
      .slice(0, 10);

  const beautyCategoryProducts = getTopProducts("Cosmetics & Personal Care");
  const groceryCategoryProducts = getTopProducts("Groceries");
  const dryFruitsCategoryProducts = getTopProducts("Dry Fruits & Nuts");
  const stationaryCategoryProducts = getTopProducts("Stationery Items");

  // Utility to get middle 2 products from an array
  const getMiddleTwo = (arr: any[]) => {
    if (!arr || arr.length < 2) return arr || [];
    const mid = Math.floor(arr.length / 2);
    return arr.slice(mid - 1, mid + 1);
  };

  // Prepare popular items
  const popularItems = [
    ...getMiddleTwo(beautyCategoryProducts),
    ...getMiddleTwo(dryFruitsCategoryProducts),
    ...getMiddleTwo(groceryCategoryProducts),
    ...getMiddleTwo(stationaryCategoryProducts),
  ];

  return (
    <section className="mt-4">
      <Category data={categoriesData} />
      <FeatureProducts />
      <Recommended items={popularItems} />
      <DeliverySteps />
      <SectionCard
        title="Beauty & Self-Care"
        category="Cosmetics & Personal Care"
        items={beautyCategoryProducts}
      />
      <SectionCard
        title="Daily Fresh & Pantry"
        category="Groceries"
        items={groceryCategoryProducts}
      />
      <SectionCard
        title="Healthy Snacking"
        category="Dry Fruits & Nuts"
        items={dryFruitsCategoryProducts}
      />
      <div className="pb-[90px]">
        <SectionCard
          title="Back to School / Work Essentials"
          category="Stationery Items"
          items={stationaryCategoryProducts}
        />
      </div>
    </section>
  );
}
