import { prisma } from "@/lib/prisma";

export const createAddressRecord = async (adressObj: any) => {
  try {
    const newAddress = await prisma.address.create({ data: adressObj });
    return newAddress;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};
