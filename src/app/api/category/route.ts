import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Always fetch all categories with subcategories
    const categories = await prisma.category.findMany({
      orderBy: { name: "asc" },
      include: {
        subCategory: {
          orderBy: { name: "asc" },
          select: { id: true, name: true },
        },
      },
    });

    return NextResponse.json({
      categories,
    });
  } catch (error: any) {
    console.error("Catalog API error:", error);
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

// import { prisma } from "@/lib/prisma";
// import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const categoryName = searchParams.get("category");
//     const subCategoryName = searchParams.get("subCategory");
//     const brandName = searchParams.get("brand");

//     // Always fetch all categories with subcategories
//     const categories = await prisma.category.findMany({
//       orderBy: { name: "asc" },
//       include: {
//         SubCategory: {
//           orderBy: { name: "asc" },
//           select: { id: true, name: true },
//         },
//       },
//     });

//     // Build product filter
//     let productWhere: any = {};
//     let selectedCategory = null;
//     let selectedSubCategory = null;

//     // Filter by category
//     if (categoryName) {
//       selectedCategory = await prisma.category.findFirst({
//         where: { name: categoryName },
//         include: { SubCategory: true },
//       });

//       if (selectedCategory) {
//         productWhere.categoryId = selectedCategory.id;

//         // Optional subcategory filter
//         if (subCategoryName) {
//           selectedSubCategory = selectedCategory.SubCategory.find(
//             (s) => s.name === subCategoryName
//           );
//           if (selectedSubCategory) {
//             productWhere.subCategoryId = selectedSubCategory.id;
//           }
//         }
//       }
//     }

//     // Filter by brand
//     if (brandName) {
//       const brand = await prisma.brand.findFirst({
//         where: { name: brandName },
//       });
//       if (brand) {
//         productWhere.brandId = brand.id;
//       }
//     }

//     // Fetch products based on filter
//     const products = await prisma.product.findMany({
//       where: productWhere,
//       include: {
//         brand: true,
//         variants: true,
//         subCategory: true,
//         category: true,
//       },
//     });

//     // Fetch brands used in these products
//     const brands = await prisma.brand.findMany({
//       where: {
//         products: {
//           some: {
//             ...(productWhere.categoryId && {
//               categoryId: productWhere.categoryId,
//             }),
//             ...(productWhere.subCategoryId && {
//               subCategoryId: productWhere.subCategoryId,
//             }),
//           },
//         },
//       },
//       orderBy: { name: "asc" },
//     });

//     return NextResponse.json({
//       categories,
//       selectedCategory: selectedCategory
//         ? {
//             id: selectedCategory.id,
//             name: selectedCategory.name,
//             image: selectedCategory.image,
//             subCategories: selectedCategory.SubCategory,
//           }
//         : null,
//       selectedSubCategory: selectedSubCategory || null,
//       brands,
//       products,
//     });
//   } catch (error: any) {
//     console.error("Catalog API error:", error);
//     return NextResponse.json(
//       { message: error.message || "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
