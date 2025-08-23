import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { addToCart } from "../../cart/cart";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id as string;

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { orderId, clearCart } = await request.json();

  // Optional: Clear existing cart
  if (clearCart) {
    await prisma.cartItem.deleteMany({ where: { userId } });
  }

  // Fetch order items
  const orderItems = await prisma.orderItem.findMany({
    where: { orderId },
    select: { productId: true, productVariantId: true, quantity: true },
  });

  if (orderItems.length === 0) {
    return NextResponse.json({ message: "No items in order" }, { status: 404 });
  }

  // ✅ Reuse add-to-cart logic
  for (const item of orderItems) {
    await addToCart(userId, item.productId, item.productVariantId, item.quantity);
  }

  return NextResponse.json({ message: "Reorder added to cart" });
}