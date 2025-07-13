import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: "asc" },
      include: {
        products: { include: { brand: true } },
        subCategory: {
          orderBy: { name: "asc" },
          select: { id: true, name: true },
        },
      },
    });

    let formattedRes = categories.map((category) => {
      const uniqueBrandsMap = new Map();

      category.products.forEach((product) => {
        if (product.brand) {
          uniqueBrandsMap.set(product.brand.id, {
            id: product.brand.id,
            name: product.brand.name,
          });
        }
      });

      const brands = Array.from(uniqueBrandsMap.values());

      return {
        id: category.id,
        name: category.name,
        image: category.image,
        subCategory: category.subCategory,
        brands,
      };
    });

    return NextResponse.json({
      categories: formattedRes,
    });
  } catch (error: any) {
    console.error("Catalog API error:", error);
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
