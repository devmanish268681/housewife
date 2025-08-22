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

        const orders = await prisma.order.findMany({
            where: {
                userId: userId,
            },
            include: {
                items: {
                    select: {
                        id: true,
                        quantity: true,
                        price: true,
                        product: {
                            select: {
                                id: true,
                                name: true,
                                description: true,
                                images: true,
                            },
                        },
                    },
                },
            },
        });

        return NextResponse.json(orders);
    } catch (error: any) {
        return NextResponse.json(
            {
                message: error.message || "Internal Server Error",
            },
            { status: 500 }
        );
    }
}