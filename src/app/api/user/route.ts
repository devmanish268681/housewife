import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
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
        const id = searchParams.get("id");

        if (id) {
            const user = await prisma.user.findUnique({
                where: { id },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phoneNumber: true
                }
            })

            if (!user) {
                return NextResponse.json({ message: "User not found" }, { status: 404 });
            }

            return NextResponse.json(user);
        }

        const users = await prisma.user.findMany();
        const formattedResponse = users.map((user) => ({
            id: user.id,
            name: user.name,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            email: user.email,
            phone: user.phoneNumber
        }))
        return NextResponse.json(formattedResponse);
    } catch (error: any) {
        console.error("Catalog API error:", error);
        return NextResponse.json(
            { message: error.message || "Internal Server Error" },
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

        const { name, email, phoneNumber } = await request.json();
        console.log(phoneNumber, "phone")

        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                name: name,
                email: email,
                phoneNumber: phoneNumber
            }
        })

        return NextResponse.json({ message: "Profile updated successfully" })
    } catch (error: any) {
        return NextResponse.json(
            {
                message: error.message || "Internal Server Error",
            },
            { status: 500 }
        );
    }
}