"use client";

import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";
import { useGetAllOrdersQuery } from "@/lib/slices/orderApiSlice";
import { statusColors } from "./constants";
import OrderDetailsModal from "./order-deatil-modal/OrderDetailModal";

// Register all community features
ModuleRegistry.registerModules([AllCommunityModule]);

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  type Status = keyof typeof statusColors;

  const rowData = [
    {
      id: "1001",
      customerName: "Ravi Kumar",
      customerEmail: "ravi@example.com",
      address: "Delhi, India",
      status: "Pending",
      paymentMethod: "COD",
      date: "2025-08-18",
      total: 350,
      products: [
        { name: "Apples", quantity: 2, price: 100 },
        { name: "Milk", quantity: 1, price: 50 },
        { name: "Bread", quantity: 2, price: 50 },
      ],
    },
  ];

  const { data: ordersData } = useGetAllOrdersQuery();

  const columnDefs = [
    { field: "id", sortable: true },
    { field: "createdAt", sortable: true },
    { field: "userId", sortable: true },
    { headerName: "Total (₹)", field: "total", sortable: true },
    { field: "paymentStatus", sortable: true },
    {
      headerName: "Status",
      field: "status",
      cellRenderer: (params: any) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[params.value as Status] || "bg-gray-100 text-gray-800"
            }`}
        >
          {params.value}
        </span>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      // cellRenderer: ActionsCell,
      sortable: false,
    },
  ];
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-2xl font-semibold">Order Management</h2>
      </div>
      <div
        className="ag-theme-alpine"
        style={{ height: "70vh", width: "100%" }}
      >
        <AgGridReact
          rowData={ordersData?.orders}
          columnDefs={columnDefs as ColDef[]}
          pagination={true}
          theme={"legacy"}
          autoSizeStrategy={{ type: "fitGridWidth" }}
        />
      </div>
      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};

export default Orders;
