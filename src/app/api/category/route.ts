import { getCategories } from "@/app/lib/services/category.service";
import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await getCategories();
    return NextResponse.json({ categories });
  } catch (e: any) {
    return NextResponse.json(
      { message: e.message },
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
        { message: "user id missing" },
        { status: 404 }
      );

    }

    const body = await request.json();
    const { name, description, image } = body;

    await prisma.category.create({
      data: {
        name,
        description,
        image
      }
    })

    return NextResponse.json({
      message: "Category added successfully",
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
        { message: "user id missing" },
        { status: 404 }
      );

    }

    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('id');
    const body = await request.json();

    await prisma.category.update({
      where: {
        id: String(categoryId)
      },
      data: {
        ...body
      }
    })

    return NextResponse.json(
      { message: "Category updated successfully" },
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


export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") as string;

    await prisma.category.delete({
      where: {
        id: id
      }
    })

    return NextResponse.json({
      message: "Category deleted successfully"
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
