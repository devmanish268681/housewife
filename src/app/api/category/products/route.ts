import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const subCategoryIds = searchParams.getAll("subCategoryId");
    const brandIds = searchParams.getAll("brandId"); // multiple allowed

    // Step 1: Validate subCategoryIds exist in DB

    let productWhere: any = {};
    if (subCategoryIds.length > 0) {
      const validSubCategories = await prisma.subCategory.findMany({
        where: { id: { in: subCategoryIds } },
        select: { id: true },
      });

      const validIds = validSubCategories.map((sc) => sc.id);
      if (validIds.length > 0) {
        productWhere.subCategoryId = { in: validIds };
      }
    }

    if (brandIds.length > 0) {
      productWhere.brandId = { in: brandIds };
    }

    console.log("🔍 Product WHERE:", productWhere);

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
