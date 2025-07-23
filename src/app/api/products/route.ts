import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");

    const whereClause: any = {};

    if (categoryId) {
      whereClause.categoryId = categoryId;
    }

    const products = await prisma.product.findMany({
      where: whereClause,
      include: {
        category: true,
        variants: {
          where: { deleted: false },
          orderBy: {
            price: "asc",
          },
        },
      },
    });

    let formattedData;
    formattedData = products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      categoryId: product.categoryId,
      images: product.images,
      subCategoryId: product.subCategoryId,
      brandId: product.brandId,
      price: product.variants[0].price,
      variantId: product.variants[0].id,
      unit: product.variants[0].unit,
      unitSize: product.variants[0].unitSize,
      stock: product.variants[0].stock,
      category: {
        id: product.category.id,
        name: product.category.name,
        image: product.category.image,
      },
    }));

    return NextResponse.json(formattedData);
  } catch (error: any) {
    console.log("Internal server error", error);
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
