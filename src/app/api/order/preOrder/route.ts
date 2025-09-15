import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAllCartItemsByUserId } from "@/app/services/cartItemsService";
import {
  calculateGSTBreakup,
  ProductWithTaxRates,
} from "@/app/services/OrdersService";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id as string;

    if (!userId) {
      return NextResponse.json(
        { message: "userId is missing" },
        { status: 400 }
      );
    }
    const cartData = await getAllCartItemsByUserId(userId);
    let cartWithGSTbreakup = [];

    let finalAmount = 0;
    for await (const cart of cartData) {
      const productWithTaxRates: ProductWithTaxRates = {
        basePrice: cart.productVariant?.discountedPrice as number,
        deliveryFee: 50,
        quantity: cart.quantity,
        cgstRate: cart.product.cgst,
        igstRate: cart.product.igst,
        sgstRate: cart.product.sgst,
      };

      const gstBreakup = await calculateGSTBreakup({
        productWithTaxRates: productWithTaxRates,
        buyerState: cart.user.Address[0].state,
      });
      finalAmount += gstBreakup.totalPrice;
      cartWithGSTbreakup.push({
        basePrice: cart.productVariant?.price,
        deliveryFee: 50,
        discountedPrice: cart.productVariant?.discountedPrice,
        cgstRate: gstBreakup.cgst,
        igstRate: gstBreakup.igst,
        sgstRate: gstBreakup.sgst,
        totalPrice: gstBreakup.totalPrice,
      });
    }

    return NextResponse.json({ cartWithGSTbreakup, finalAmount });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
