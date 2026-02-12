import { prisma } from "@/lib/prisma";
import { SubCategoryStock } from "@/lib/types/categories";

export async function getCategories() {
  const categories = await prisma.category.findMany({
    where: { deleted: false },
    include: {
      subCategory: { where: { deleted: false } },
      Offers: { where: { deleted: false } },
      products: {
        where: { deleted: false },
        include: {
          brand: true,
          subCategory: true,
          variants: { where: { deleted: false } },
        },
      },
    },
  });

  return categories.map((category) => {
    const subCategoryMap: Record<string, SubCategoryStock> = {};

    for (const product of category.products) {
      if (!product.subCategory) continue;

      const subCatId = product.subCategory.id;

      if (!subCategoryMap[subCatId]) {
        subCategoryMap[subCatId] = {
          id: subCatId,
          name: product.subCategory.name,
          image: product.subCategory.image || "",
          subCategoryProductStock: 0,
          brands: [],
        };
      }

      let productStock = 0;

      // console.log(product.variants,"variants")
      for (const variant of product.variants) {
        productStock += variant.stock;
        subCategoryMap[subCatId].subCategoryProductStock += variant.stock;
      }

      const brandId = product.brand?.id ?? "unknown";
      const brandName = product.brand?.name ?? "Unknown";

      const brand = subCategoryMap[subCatId].brands.find(
        (b: any) => b.id === brandId
      );

      if (brand) {
        brand.individualBrandStock += productStock;
      } else {
        subCategoryMap[subCatId].brands.push({
          id: brandId,
          name: brandName,
          individualBrandStock: productStock,
        });
      }
    }

    return {
      id: category.id,
      name: category.name,
      image: category.image,
      description: category.description,
      offers: category.Offers.map(o => ({
        id: o.id,
        discountedValue: o.discountValue,
        type: o.type,
      })),
      subCategories: Object.values(subCategoryMap),
    };
  });
}

type BrandProductCount = {
  id: string;
  name: string;
  productCount: number;
};

type SubCategoryWithBrands = {
  id: string;
  name: string;
  image: string;
  productCount: number; // total products in subCategory
  brands: BrandProductCount[];
};

export async function getCategoryById(categoryId: string) {
  const category = await prisma.category.findUnique({
    where: {
      id: categoryId,
      deleted: false,
    },
    include: {
      Offers: {
        where: { deleted: false },
      },
      products: {
        where: { deleted: false },
        select: {
          id: true,
          brandId: true,
          brand: {
            select: {
              id: true,
              name: true,
            },
          },
          subCategoryId: true,
          subCategory: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      },
    },
  });

  if (!category) return null;

  const subCategoryMap: Record<string, SubCategoryWithBrands> = {};

  for (const product of category.products) {
    if (!product.subCategory) continue;
    const subCatId = product.subCategory.id;

    // Initialize subCategory
    if (!subCategoryMap[subCatId]) {
      subCategoryMap[subCatId] = {
        id: subCatId,
        name: product.subCategory.name,
        image: product.subCategory.image || "",
        productCount: 0,
        brands: [],
      };
    }

    // Increment subCategory total product count
    subCategoryMap[subCatId].productCount += 1;

    // Brand-wise product count
    const brandId = product.brand?.id ?? "unknown";
    const brandName = product.brand?.name ?? "Unknown";

    const brand = subCategoryMap[subCatId].brands.find((b) => b.id === brandId);

    if (brand) {
      brand.productCount += 1;
    } else {
      subCategoryMap[subCatId].brands.push({
        id: brandId,
        name: brandName,
        productCount: 1,
      });
    }
  }

  return {
    id: category.id,
    name: category.name,
    image: category.image,
    description: category.description,
    offers: category.Offers.map((o) => ({
      id: o.id,
      discountedValue: o.discountValue,
      type: o.type,
    })),
    subCategories: Object.values(subCategoryMap),
  };
}

