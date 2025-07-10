import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import { validateAccess } from "@/lib/roles/validateAccess";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const hasAccess = await validateAccess({
      resource: "category",
      action: "view",
      userId: session?.user.id,
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

    const categories = await prisma.category.findMany()

    return NextResponse.json(categories);
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
