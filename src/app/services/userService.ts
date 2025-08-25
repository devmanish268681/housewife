import { prisma } from "@/lib/prisma";

export const getRoleByName = async (role: string) => {
  try {
    const userData = await prisma.role.findUnique({
      where: { name: role },
      include: { users: true },
    });

    if (!userData) {
      return { success: false, message: "userRole not found" };
    }

    return {
      success: true,
      userData,
    };
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};

export const updateUserLocation = async (
  userId: string,
  latitude: string,
  longitude: string
) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        latitude,
        longitude,
      },
    });

    return updatedUser;
  } catch (error: any) {
    console.error("Failed to update user location", error);
    throw new Error(error.message || "Internal server error");
  }
};

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
