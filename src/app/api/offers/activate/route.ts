// app/api/offers/route.ts
import { lockRowForUpdate } from "@/app/lib/lockRow";
import { getOfferById, updateOfferById } from "@/app/services/offerService";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const id = searchParams.get("id") as string;

    const body = await request.json();
    const { isActive } = body;

    await lockRowForUpdate(id, "Offers");
    const existingOffer = await getOfferById(id);

    if (!existingOffer) {
      return NextResponse.json({ error: "Offer not found" }, { status: 404 });
    }

    const updatedOffer = await updateOfferById(id, { isActive: isActive });

    return NextResponse.json(
      { success: true, offer: updatedOffer },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
