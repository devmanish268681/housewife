"use client";

import { useGetRecentOrdersQuery } from "@/lib/slices/orderApiSlice";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

const orders = [
  {
    id: "ORD12345",
    date: "Aug 18, 2025",
    status: "Delivered",
    total: 1200,
    products: [
      {
        id: "p1",
        name: "Organic Apples",
        quantity: 2,
        price: 150,
        image: "/images/apple.jpg",
      },
      {
        id: "p2",
        name: "Whole Wheat Bread",
        quantity: 1,
        price: 50,
        image: "/images/bread.jpg",
      },
    ],
  },
];

export default function OrderHistory() {
  // const recentOrders = orders.slice(0, 2);
  const {data:recentOrders} = useGetRecentOrdersQuery();

  return (
    <div className="pb-6">
      <h2 className="text-xl font-semibold mb-4">Recent Order</h2>
      <div className="space-y-6">
        {recentOrders?.map((order) => (
          <div
            key={order.id}
            className="border rounded-xl shadow-sm p-4 bg-white"
          >
            {/* Order Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <p className="text-gray-600 text-sm">Order ID: {order.id}</p>
                <p className="text-gray-500 text-sm">{formatDate(order.createdAt)}</p>
              </div>
              <div className="mt-2 md:mt-0 flex items-center gap-4">
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full capitalize ${
                    order.status === "delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "shipped"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {order?.status}
                </span>
                <p className="text-lg font-semibold">₹{order.total}</p>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              {order.items.map((item) => (
                <div
                  key={item?.id}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item?.product?.images[0]}
                      alt={item?.product?.name}
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="font-medium">{item?.product?.name}</p>
                      <p className="text-gray-500 text-sm">
                        Qty: {item?.quantity} × ₹{item?.price}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold">
                    ₹{order?.total}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-4">
              <button className="px-4 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600">
                Reorder
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
