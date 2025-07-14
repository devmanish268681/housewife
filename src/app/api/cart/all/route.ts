import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log("session", session);
    const userId = session?.user?.id as string;

    const userCartItems = await prisma.cartItem.findMany({
      where: {
        userId: userId,
      },
      include: { productVariant: true, product: true },
    });

    const formattedRes = userCartItems.map((cart) => ({
      productName: cart.product.name,
      price: cart.productVariant?.price,
      unit: cart.productVariant?.unit,
      unitSize: cart.productVariant?.unitSize,
      quantity: cart.quantity,
      image: cart.product.images,
    }));

    return NextResponse.json({ result: formattedRes });
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
