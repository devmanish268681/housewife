import { prisma } from "@/lib/prisma";

export const updatedProductVariant = async (
  productVariantId: string,
  quantity: number
) => {
  try {
    const updatedProductStock = await prisma.productVariant.update({
      where: { id: productVariantId },
      data: {
        stock: {
          decrement: quantity,
        },
      },
    });

    return updatedProductStock;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};
