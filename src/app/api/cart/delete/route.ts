import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") as string;
    const userCartItems = await prisma.cartItem.findUnique({
      where: {
        id: id,
      },
    });

    if (!userCartItems) {
      return NextResponse.json(
        {
          message: "product not found",
        },
        { status: 404 }
      );
    }

    await prisma.cartItem.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      message: "product deleted from cart successfully",
    });
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
