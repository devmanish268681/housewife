import { validateRequest } from "@/app/lib/validateRequest";
import { createProduct } from "@/app/services/ProductsService";
import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import { validateAccess } from "@/lib/roles/validateAccess";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { createProductSchema } from "./productSchema";
import { getProducts } from "@/app/lib/services/products.service";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");

    const result = await getProducts(categoryId);

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error("Internal server error", error);
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id as string;

    if (!userId) {
      return NextResponse.json({ message: "user id missing" }, { status: 404 });
    }

    const hasAccess = await validateAccess({
      resource: "products",
      action: "create",
      userId: userId,
    });

    if (!hasAccess) {
      return NextResponse.json(
        {
          message:
            "Access denied. You do not have permission to access this route.",
        },
        { status: 403 }
      );
    }

    const body = await request.json();
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
    } = body;

    const validation = await validateRequest(body, createProductSchema);

    if (!validation.success) {
      return NextResponse.json({ errors: validation.error }, { status: 400 });
    }

    const createProductObj = {
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
    };

    const product = await createProduct(createProductObj);

    return NextResponse.json(
      {
        message: "Product added successfully",
        product,
      },
      { status: 201 }
    );
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
      return NextResponse.json({ message: "user id missing" }, { status: 404 });
    }

    const hasAccess = await validateAccess({
      resource: "products",
      action: "update",
      userId: userId,
    });

    if (!hasAccess) {
      return NextResponse.json(
        {
          message:
            "Access denied. You do not have permission to access this route.",
        },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");
    const variantId = searchParams.get("variantId");
    const body = await request.json();
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
    } = body;

    await prisma.product.update({
      where: {
        id: String(productId),
      },
      data: {
        name: name,
        description: description,
        ...(categoryId && {
          category: { connect: { id: categoryId } },
        }),
        ...(brandId && {
          brand: { connect: { id: brandId } },
        }),
        ...(subCategoryId && {
          subCategory: { connect: { id: subCategoryId } },
        }),
        images: images,
        variants: {
          update: {
            where: { id: String(variantId) },
            data: {
              price,
              stock,
              unit,
              unitSize,
            },
          },
        },
      },
    });

    return NextResponse.json(
      { message: "Product updated successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") as string;

    const session = await getServerSession(authOptions);
    const userId = session?.user?.id as string;

    const hasAccess = await validateAccess({
      resource: "products",
      action: "delete",
      userId: userId,
    });

    if (!hasAccess) {
      return NextResponse.json(
        {
          message:
            "Access denied. You do not have permission to access this route.",
        },
        { status: 403 }
      );
    }

    await prisma.product.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      message: "Product deleted successfully",
    });
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
