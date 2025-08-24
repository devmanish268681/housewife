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

import { prisma } from "@/lib/prisma"; // adjust path to your Prisma client

interface CreateProductInput {
  name: string;
  description: string;
  categoryId: string;
  subCategoryId: string;
  brandId: string;
  images: string[]; // Assuming image URLs
  price: number;
  stock: number;
  unit: string;
  unitSize: number;
  cgst: number;
  sgst: number;
  igst: number;
  hsnCode: string;
}

export const createProduct = async (createProductObj: CreateProductInput) => {
  try {
    const {
      name,
      description,
      categoryId,
      images,
      brandId,
      subCategoryId,
      price,
      stock,
      unit,
      unitSize,
      cgst,
      hsnCode,
      igst,
      sgst,
    } = createProductObj;

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        categoryId,
        images,
        brandId,
        subCategoryId,
        cgst,
        hsnCode,
        igst,
        sgst,
        variants: {
          create: {
            price,
            stock,
            unit,
            unitSize,
          },
        },
      },
      include: {
        variants: true,
      },
    });

    return newProduct;
  } catch (error) {
    console.error("Failed to create product:", error);
    throw new Error("Product creation failed.");
  }
};
