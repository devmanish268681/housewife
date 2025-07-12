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
      const categoryData = await prisma.category.findMany({
        where: { name: category },
      });
      whereClause.categoryId = categoryData[0].id;
    }

    const products = await prisma.product.findMany({
      where: whereClause,
      include: { category: true },
    });

    return NextResponse.json(products);
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
