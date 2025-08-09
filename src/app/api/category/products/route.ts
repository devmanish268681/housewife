import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId") as string;
    const subCategoryId = searchParams.get("subCategoryId") as string | null;
    const brandId = searchParams.get("brandId") as string | null;

    if (!categoryId) {
      return NextResponse.json(
        { message: "categoryId is required" },
        { status: 400 }
      );
    }

    // Get all valid subCategoryIds and brandIds for this category
    const [subCategories, productBrands] = await Promise.all([
      await prisma.subCategory.findMany({
        where: { categoryId },
        select: { id: true },
      }),
      await prisma.product.findMany({
        where: { categoryId },
        select: { brandId: true },
        distinct: ["brandId"],
      }),
    ]);

    const allSubCategoryIds = subCategories.map((s) => s.id);
    const brandIds = productBrands.map((p) => p.brandId);

    // Build filters
    const productWhere: any = {
      subCategoryId: subCategoryId ? subCategoryId : { in: allSubCategoryIds },
      brandId: brandId ? brandId : { in: brandIds },
    };

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
