import { Prisma } from "@prisma/client";

export const bulkDeleteCartItemsByProductId = async (
  productIds: string[],
  tx: Prisma.TransactionClient = prisma
) => {
  try {
    const cartItems = await tx.cartItem.findMany({
      where: { productId: { in: productIds } },
    });

    if (cartItems.length === 0) {
      return [];
    }

    await tx.cartItem.updateMany({
      where: { productId: { in: productIds } },
      data: { deleted: true },
    });

    return cartItems;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};

export const deleteCartItemsById = async (
  cartItemId: string,
  tx: Prisma.TransactionClient = prisma
) => {
  try {
    const cartItem = await tx.cartItem.findUnique({
      where: { id: cartItemId },
    });

    if (!cartItem) {
      throw new Error("product not found");
    }

    await tx.cartItem.update({
      where: { id: cartItemId },
      data: { deleted: true },
    });

    return cartItem;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};
