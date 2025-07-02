import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import { validateAccess } from "@/lib/roles/validateAccess";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // const session = await getServerSession(authOptions);
  // console.log("session", session);

  // if (!session?.user.id) {
  //   return NextResponse.json("userId is required");
  // }
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const hasAccess = await validateAccess({
    resource: "products",
    action: "view",
    userId: "03aa0c52-5220-4aa5-859e-8b59a60e9f1b",
  });

  console.log("hasAccess", hasAccess);

  if (!hasAccess) {
    return NextResponse.json(
      {
        message: "You are not allowed to access this route",
      },
      { status: 403 }
    );
  }

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
}
