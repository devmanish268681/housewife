import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const categories = await prisma.category.findMany({
      where: { deleted: false },
      include: {
        subCategory: {
          where: { deleted: false },
        },
        products: {
          where: { deleted: false },
          include: {
            brand: true,
            subCategory: true,
            variants: {
              where: { deleted: false },
            },
          },
        },
      },
    });

    const formatted = categories.map((category) => {
      // Group products by subcategory
      const subCategoryMap: Record<
        string,
        {
          id: string;
          name: string;
          subCategoryProductStock: number;
          brands: {
            id: string;
            name: string;
            individualBrandStock: number;
          }[];
        }
      > = {};

      for (const product of category.products) {
        const subCat = product.subCategory;
        if (!subCat) continue;

        const subCatId = subCat.id;
        const brandId = product.brand?.id || "unknown";
        const brandName = product.brand?.name || "Unknown Brand";

        // Initialize subcategory if not already
        if (!subCategoryMap[subCatId]) {
          subCategoryMap[subCatId] = {
            id: subCatId,
            name: subCat.name,
            subCategoryProductStock: 0,
            brands: [],
          };
        }

        let productTotalStock = 0;
        for (const variant of product.variants) {
          productTotalStock += variant.stock;
          subCategoryMap[subCatId].subCategoryProductStock += variant.stock;
        }

        // Update indivdualProductStock per brand
        const brandEntry = subCategoryMap[subCatId].brands.find(
          (b) => b.id === brandId
        );
        if (brandEntry) {
          brandEntry.individualBrandStock += productTotalStock;
        } else {
          subCategoryMap[subCatId].brands.push({
            id: brandId,
            name: brandName,
            individualBrandStock: productTotalStock,
          });
        }
      }

      return {
        id: category.id,
        name: category.name,
        image: category.image,
        subCategories: Object.values(subCategoryMap),
      };
    });

    return NextResponse.json({ categories: formatted });
  } catch (error: any) {
    console.error("Catalog API error:", error);
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
