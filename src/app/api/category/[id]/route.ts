import { getCategoryById } from "@/app/lib/services/category.service";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params:{id} }: { params: { id: string } }
) {

  const data = await getCategoryById(id);

  if (!data) {
    return NextResponse.json(
      { message: "Category not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}
