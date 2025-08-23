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

export interface RazorpayOrderResponse {
  placeOrder: {
    placeOrder: {
      success: boolean;
      order: {
        id: string;
        entity: string;
        amount: number;
        amount_paid: number;
        amount_due: number;
        currency: string;
        receipt: string | null;
        offer_id: string | null;
        status: "created" | "paid" | "attempted";
        attempts: number;
        notes: any[]; // Razorpay allows arbitrary key-value here
        created_at: number; // Unix timestamp
      };
    };
  };
}


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
  orders:Orders[],
  totalCount:number
}

export type Product = {
  id: string;
  name: string;
  description: string;
  images: string[];
};

export type OrderItem = {
  id: string;
  quantity: number;
  price: number;
  product: Product;
};

export type recentOrders = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
  userId: string;
  total: number;
  paymentStatus:string;
  status: string;
  addressId: string;
  items: OrderItem[];
};
