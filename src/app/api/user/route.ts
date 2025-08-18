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

        const users = await prisma.user.findMany();
        const formattedResponse = users.map((user) => ({
            id:user.id,
            name:user.name,
            createdAt:user.createdAt,
            updatedAt:user.updatedAt,
            email:user.email
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