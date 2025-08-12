import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");

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
          orderBy: {
            price: "asc",
          },
        },
      },
    });

    //total count of products
    const totalCount = await prisma.product.count();

    let formattedData;
    formattedData = products.map((product) => ({
      id: product.id,
      name: product.name,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      description: product.description,
      categoryId: product.categoryId,
      images: product.images,
      subCategoryId: product.subCategoryId,
      brandId: product.brandId,
      price: product.variants[0].price,
      variantId: product.variants[0].id,
      unit: product.variants[0].unit,
      unitSize: product.variants[0].unitSize,
      stock: product.variants[0].stock,
      category: {
        id: product.category.id,
        name: product.category.name,
        image: product.category.image,
      },
    }));

    return NextResponse.json({ data: formattedData, totalCount: totalCount }, { status: 201 });
  } catch (error: any) {
    console.log("Internal server error", error);
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id as string;

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { name, description, categoryId, images, brandId, subCategoryId, price, stock, unit, unitSize } = body;

    await prisma.product.create({
      data: {
        name,
        description,
        categoryId,
        images,
        brandId,
        subCategoryId,
        variants: {
          create: {
            price,
            stock,
            unit,
            unitSize
          },
        },
      },
      include: {
        variants: true,
      }
    })

    return NextResponse.json({
      message: "Product added successfully",
    }, { status: 201 })

  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id as string;

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");
    const variantId = searchParams.get("variantId");
    const body = await request.json();
    const { name, description, categoryId, images, brandId, subCategoryId, price, stock, unit, unitSize } = body;

    await prisma.product.update({
      where: {
        id: String(productId)
      },
      data: {
        name: name,
        description: description,
        ...(categoryId && {
          category: { connect: { id: categoryId } }
        }),
        ...(brandId && {
          brand: { connect: { id: brandId } }
        }),
        ...(subCategoryId && {
          subCategory: { connect: { id: subCategoryId } }
        }),
        images: images,
        variants: {
          update: {
            where: { id: String(variantId) },
            data: {
              price,
              stock,
              unit,
              unitSize
            }
          }
        }
      }
    })

    return NextResponse.json(
      { message: "Product updated successfully" },
      { status: 201 }
    )
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
