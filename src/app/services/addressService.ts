import { prisma } from "@/lib/prisma";
import { Address, Prisma } from "@prisma/client";

export const createAddressRecord = async (
  tx: Prisma.TransactionClient,
  adressObj: Prisma.AddressUncheckedCreateInput
) => {
  try {
    const newAddress = await prisma.address.create({ data: adressObj });
    return newAddress;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};
export const getAddressByUserId = async (userId: string) => {
  try {
    const existingUser = await prisma.address.findFirst({
      where: { userId: userId },
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
