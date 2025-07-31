import { Prisma } from "@prisma/client";

export const updatedProductVariant = async (
  tx: Prisma.TransactionClient,
  productVariantId: string,
  quantity: number
) => {
  try {
    const updatedProductStock = await tx.productVariant.update({
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
