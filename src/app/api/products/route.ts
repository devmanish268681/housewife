import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import { validateAccess } from "@/lib/roles/validateAccess";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log("session", session);

    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    const whereClause: { categoryId: string | undefined } = {
      categoryId: undefined,
    };

    if (category) {
      const categoryData = await prisma.category.findFirst({
        where: { name: category },
      });
      if (!categoryData) {
        return NextResponse.json(
          { message: "category not found" },
          { status: 404 }
        );
      }
      whereClause.categoryId = categoryData.id;
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
