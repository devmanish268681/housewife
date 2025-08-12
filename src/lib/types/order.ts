export interface RazorpayOrder {
  amount: number;
  amount_due: number;
  amount_paid: number;
  attempts: number;
  created_at: number;
  currency: string;
  entity: string;
  id: string;
  notes: any[]; // You can replace this with a more specific type if needed
  offer_id: string | null;
  receipt: string;
  status: string;
}

export interface PaymentsRecord {
  id: string;
  orderId: string;
  razorpayOrderId: string;
  razorpayPaymentId: string | null;
  signature: string | null;
  amount: number;
  currency: string;
  status: string;
  method: string | null;
  captured: boolean;
  email: string | null;
  contact: string | null;
  createdAt: string; // or `Date` if you parse it
  updatedAt: string; // or `Date` if you parse it
}

export interface PlaceOrderResult {
  success: boolean;
  order: RazorpayOrder;
}

export interface PlaceOrderResponse {
  placeOrder: {
    placeOrder: PlaceOrderResult;
    paymentsRecord: PaymentsRecord;
  };
}

export type RazorpayPaymentLinkResponse = {
  placeOrder: {
    placeOrder: {
      success: boolean;
      url: string;
      id: string;
    };
  };
};


export type Order = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
  userId: string;
  total: number;
  paymentStatus: "pending" | "paid" | "failed";
  status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
  addressId: string;
};


export type Orders = {
  order:Orders[],
  totalCount:number
}
