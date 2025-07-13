import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { validateRequest } from "../lib/validateRequest";
import { addToCartSchema } from "./addToCartSchema ";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log("session", session);
    const userId = session?.user?.id as string;
    const body = await request.json();
    const { productId, productVariantId, quantity } = body;
    let baseProductVariantId = productVariantId;

    const validation = await validateRequest(body, addToCartSchema);

    if (!validation.success) {
      return NextResponse.json({ errors: validation.error }, { status: 400 });
    }

    if (!productVariantId) {
      const productVarients = await prisma.productVariant.findFirst({
        where: { productId: productId },
      });

      baseProductVariantId = productVarients?.id;
    }

    const existingCartItem = await prisma.cartItem.findFirst({
      where: {
        productId: productId,
        productVariantId: baseProductVariantId,
        userId: userId,
      },
    });

    if (existingCartItem) {
      return NextResponse.json(
        { message: "Item already aded to cart" },
        { status: 409 }
      );
    }

    const productAddedToCart = await prisma.cartItem.create({
      data: {
        quantity: quantity,
        productId: productId,
        productVariantId: baseProductVariantId,
        userId: userId,
      },
    });

    return NextResponse.json({
      message: "Product added to cart successfully",
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
