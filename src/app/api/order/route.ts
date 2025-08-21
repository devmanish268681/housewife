import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { validateRequest } from "../../lib/validateRequest";
import { productOrderSchema } from "../products/productOrderSchema";
import { placeOrderController } from "@/app/controller/orderController";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id as string;

    if (!userId) {
      return NextResponse.json(
        { message: "userId is missing" },
        { status: 400 }
      );
    }

    const body = await request.json();

    const {
      products,
      street,
      city,
      country,
      zipCode,
      state
    } = body;

    const validation = await validateRequest(body, productOrderSchema);

    if (!validation.success) {
      return NextResponse.json({ errors: validation.error }, { status: 400 });
    }

    if (!products || products.length === 0) {
      return NextResponse.json(
        { message: "No products provided" },
        { status: 400 }
      );
    }

    const bodyData = {
      products,
      street,
      city,
      country,
      zipCode,
      state,
    };

    const placeOrder = await placeOrderController(bodyData, userId);

    console.log("placeOrder", placeOrder);

    return NextResponse.json({
      placeOrder,
    });
  } catch (error: any) {
    console.error("Internal server error", error);
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id as string;

    if (!userId) {
      return NextResponse.json(
        { message: "userId is missing" },
        { status: 400 }
      );
    }
    const orders = await prisma.order.findMany({
      orderBy: {
        createdAt: "asc"
      },
    })
    const ordersCount = await prisma.order.count();
    return NextResponse.json({ orders: orders, totalCount: ordersCount })
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    )
  }
}
