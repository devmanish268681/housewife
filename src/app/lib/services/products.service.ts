import { prisma } from "@/lib/prisma";

export async function getProducts(categoryId?: string | null) {
  const whereClause: any = {};

  if (categoryId) {
    whereClause.categoryId = categoryId;
  }

  const products = await prisma.product.findMany({
    where: whereClause,
    include: {
      category: true,
      variants: {
        where: { deleted: false },
        orderBy: { price: "asc" },
      },
    },
  });

  const totalCount = await prisma.product.count({
    where: whereClause,
  });

  const formattedData = products.map((product) => {
    const variant = product.variants[0]; // cheapest variant

    return {
      id: product.id,
      name: product.name,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      description: product.description,
      categoryId: product.categoryId,
      images: product.images,
      subCategoryId: product.subCategoryId,
      brandId: product.brandId,

      price: variant?.price ?? 0,
      discountedPrice: variant?.discountedPrice ?? 0,
      variantId: variant?.id ?? null,
      unit: variant?.unit ?? null,
      unitSize: variant?.unitSize ?? null,
      stock: variant?.stock ?? 0,

      category: {
        id: product.category.id,
        name: product.category.name,
        image: product.category.image,
      },
    };
  });

  return {
    data: formattedData,
    totalCount,
  };
}
