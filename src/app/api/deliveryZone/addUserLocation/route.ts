import { NextResponse } from "next/server";
import { validateRequest } from "@/app/lib/validateRequest";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { userLocationSchema } from "./userLocationSchema";
import { getUserById, updateUserLocation } from "@/app/services/userService";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;

    if (!userId) {
      return NextResponse.json({ message: "user id missing" }, { status: 404 });
    }

    const { latitude, longitude } = body;

    const validation = await validateRequest(body, userLocationSchema);

    if (!validation.success) {
      return NextResponse.json({ errors: validation.error }, { status: 400 });
    }

    const user = await getUserById(userId);

    await updateUserLocation(user.id, latitude, longitude);

    return NextResponse.json(
      { message: "user location updated succesfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Internal server error", error);
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
