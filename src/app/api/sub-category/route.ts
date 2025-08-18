import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const subCategories = await prisma.subCategory.findMany();
        return NextResponse.json(subCategories);
    } catch (error: any) {
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
                { message: "userId is missing" },
                { status: 400 }
            );
        }

        const { name, image, categoryId } = await request.json();

        await prisma.subCategory.create({
            data: {
                name,
                image,
                categoryId
            }
        })

        return NextResponse.json({
            message: 'SubCategory added successfully',
        },{status:201})
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
                { message: "userId is missing" },
                { status: 400 }
            );
        }

        const { searchParams } = new URL(request.url);
        const subCategoryId = searchParams.get("id");

        const { name, image, categoryId } = await request.json();

        await prisma.subCategory.update({
            where:{
                id:String(subCategoryId)
            },
            data: {
                name,
                image,
                categoryId
            }
        })

        return NextResponse.json({
            message: 'SubCategory updated successfully',
        },{status:201})
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
        const session = await getServerSession(authOptions);
        const userId = session?.user?.id as string;

        if (!userId) {
            return NextResponse.json(
                { message: "userId is missing" },
                { status: 400 }
            );
        }

        const { searchParams } = new URL(request.url);
        const subCategoryId = searchParams.get("id");

        await prisma.subCategory.delete({
            where:{
                id:String(subCategoryId)
            }
        })

        return NextResponse.json({
            message: 'SubCategory deleted successfully',
        },{status:201})
    } catch (error: any) {
        return NextResponse.json(
            {
                message: error.message || "Internal Server Error",
            },
            { status: 500 }
        );
    }
}

