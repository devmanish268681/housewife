
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(params:Request) {
    try {
        const brands = await prisma.brand.findMany({});

        return NextResponse.json(brands);
    } catch (error:any) {
        return NextResponse.json(
            {message:error.message || "Internal Server Error"},
            {status:500}
        )
    }
}