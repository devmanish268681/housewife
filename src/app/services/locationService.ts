import { Prisma, PrismaClient } from "@prisma/client";
import { getDistance } from "geolib";
import { prisma } from "@/lib/prisma"; // adjust path

export const isUserWithinRadius = async (
  userLatitude: string | number,
  userLongitude: string | number,
  tx: PrismaClient = prisma
) => {
  try {
    const zones = await tx.deliveryZone.findMany({
      where: { deleted: false },
    });

    for (const zone of zones) {
      const distance = getDistance(
        { latitude: userLatitude, longitude: userLongitude },
        { latitude: zone.latitude, longitude: zone.longitude }
      );

      const radiusMeters = zone.radiusKm * 1000;

      if (distance <= radiusMeters) {
        return {
          isWithinRadius: true,
          distance,
          radiusMeters,
          zoneName: zone.name,
        };
      }
    }

    // No matching zone found
    return {
      isWithinRadius: false,
      distance: null,
      radiusMeters: null,
      zoneId: null,
      zoneName: null,
    };
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};

export const createDeliveryZone = async (
  deliveryZoneObj: Prisma.DeliveryZoneCreateInput,
  tx: Prisma.TransactionClient = prisma
) => {
  try {
    const newDeliveryZone = await prisma.deliveryZone.create({
      data: deliveryZoneObj,
    });

    return newDeliveryZone;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};
