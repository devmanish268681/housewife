import { prisma } from "@/lib/prisma";

export const getUserById = async (userId: string) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      throw new Error("user not found");
    }

    return existingUser;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};
