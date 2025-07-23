import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const subCategoryId = searchParams.get("subCategoryId") as string;
    const brandId = searchParams.get("brandId") as string;

    let productWhere: any = {};
    if (subCategoryId) {
      const validSubCategoryId = await prisma.subCategory.findUnique({
        where: { id: subCategoryId },
        select: { id: true },
      });
      productWhere.subCategoryId = validSubCategoryId?.id;
    }

    if (brandId) {
      productWhere.brandId = brandId;
    }

    // Step 3: Fetch products
    const products = await prisma.product.findMany({
      where: productWhere,
      include: {
        variants: true,
      },
    });

    return NextResponse.json({ products });
  } catch (error: any) {
    console.error("Catalog API error:", error);
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
