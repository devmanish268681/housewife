import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export type UpdateOrderInput = Partial<
  Omit<Order, "id" | "createdAt" | "updatedAt" | "deleted">
>;

export type CreateOrderInput = Omit<
  Order,
  "id" | "createdAt" | "updatedAt" | "deleted"
>;

type ApplyOfferInput = {
  userId: string;
  orderAmount: number; // in INR
  couponCode?: string; // optional
};

export type ProductWithTaxRates = {
  basePrice: number; // base price per unit
  deliveryFee: number;
  quantity: number;
  cgstRate?: number; // per product
  sgstRate?: number;
  igstRate?: number;
};
export interface GSTBreakup {
  subTotal: number;
  gstAmount: number;
  cgst: number;
  sgst: number;
  igst: number;
  totalPrice: number;
  isIGST: boolean;
}

export interface Order {
  id: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
  total: number;
  paymentStatus: string; // "pending", "success", "failed"
  status: string;
  addressId: string;
  invoice?: string;
}

export const createOrderRecord = async (
  tx: Prisma.TransactionClient,
  orderObj: Prisma.OrderUncheckedCreateInput
) => {
  try {
    const order = await tx.order.create({
      data: orderObj,
      include: { address: true },
    });
    return order;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};

export const updateOrder = async (
  orderObj: CreateOrderInput,
  orderId: string,
  tx: Prisma.TransactionClient = prisma
) => {
  try {
    const updatePayementData = await tx.order.updateMany({
      where: { id: orderId },
      data: orderObj,
    });
    return updatePayementData;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};
export const getOrderById = async (
  orderId: string,
  tx: Prisma.TransactionClient = prisma
) => {
  try {
    const orderData = await tx.order.findUnique({
      where: { id: orderId },
      include: {
        items: { include: { product: true } },
        user: { include: { Address: true } },
      },
    });

    return orderData;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};

export const getOrderByOrderId = async (
  orderId: string,
  tx: Prisma.TransactionClient = prisma
) => {
  try {
    const orderData = await tx.order.findUnique({
      where: { id: orderId },
    });

    return orderData;
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};

export const applyOffer = async ({
  userId,
  orderAmount,
  couponCode,
}: ApplyOfferInput) => {
  try {
    const now = new Date();
    let offer = null;
    if (couponCode) {
      offer = await prisma.offers.findFirst({
        where: {
          couponCode,
          isActive: true,
          startDate: { lte: now },
          endDate: { gte: now },
        },
      });

      if (!offer) {
        throw new Error("Invalid or expired coupon");
      }
      if (offer.minOrderValue && orderAmount < offer.minOrderValue) {
        throw new Error(`Minimum order value must be ₹${offer.minOrderValue}`);
      }

      if (offer.usageLimit) {
        const totalUsed = await prisma.redemption.count({
          where: { offerId: offer.id },
        });
        if (totalUsed >= offer.usageLimit) {
          throw new Error("This offer has reached its usage limit");
        }
      }
      if (offer.usagePerUser) {
        const userUsed = await prisma.redemption.count({
          where: { offerId: offer.id, userId },
        });
        if (userUsed >= offer.usagePerUser) {
          throw new Error("You have already used this offer");
        }
      }
    }

    // 💰 Calculate discount
    let discount = 0;
    if (offer) {
      if (offer.type === "PERCENTAGE") {
        discount = (offer.discountValue / 100) * orderAmount;
        if (offer.maxDiscount && discount > offer.maxDiscount) {
          discount = offer.maxDiscount;
        }
      } else if (offer.type === "FLAT") {
        discount = offer.discountValue;
      }
    }
    const finalAmount = Math.max(orderAmount - discount, 0);
  
  } catch (error: any) {
    console.error("Internal server error", error);
    throw error;
  }
};

export const calculateGSTBreakup = async ({
  productWithTaxRates,
  buyerState,
  sellerState,
}: {
  productWithTaxRates: ProductWithTaxRates;
  buyerState: string;
  sellerState: string;
}): Promise<GSTBreakup> => {
  console.log("buyerState", buyerState);
  console.log("sellerState", sellerState);

  const isIGST =
    buyerState.trim().toLowerCase() !== sellerState.trim().toLowerCase();
  const baseAmount =
    productWithTaxRates.basePrice * productWithTaxRates.quantity;

  let cgst = 0;
  let sgst = 0;
  let igst = 0;
  if (isIGST) {
    igst = baseAmount * ((productWithTaxRates.igstRate ?? 0) / 100);
  } else {
    cgst = baseAmount * ((productWithTaxRates.cgstRate ?? 0) / 100);
    sgst = baseAmount * ((productWithTaxRates.sgstRate ?? 0) / 100);
  }

  const gstAmount = +(cgst + sgst + igst).toFixed(2);
  const totalPrice = +(
    baseAmount +
    gstAmount +
    productWithTaxRates.deliveryFee
  ).toFixed(2);

  return {
    subTotal: +baseAmount.toFixed(2),
    gstAmount,
    cgst: +cgst.toFixed(2),
    sgst: +sgst.toFixed(2),
    igst: +igst.toFixed(2),
    totalPrice,
    isIGST,
  };
};
