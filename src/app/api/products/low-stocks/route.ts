import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const lowStocksProducts = await prisma.product.findMany({
            where: {
                variants: {
                    some: {
                        stock: { lt: 60 }
                    }
                }
            },
            include: {
                variants: {
                    where: {
                        stock: {
                            lt: 60,
                        },
                    },
                    select: {
                        id: true,
                        stock: true,
                        productId: true,
                    }
                }
            }

        })

        const lowStocksProductsCount = await prisma.productVariant.count({
            where: {
                stock: {
                    lt: 30
                }
            }
        })

        return NextResponse.json({ lowStocksProducts: lowStocksProducts, lowStocksProductsCount: lowStocksProductsCount })
    } catch (error: any) {
        return NextResponse.json(
            {
                message: error.message || "Internal Server Error",
            },
            { status: 500 }
        );
    }
}