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
  console.log(selectedOrder, "order");

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
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            statusColors[params.value] || "bg-gray-100 text-gray-800"
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

// "use client";

// import React, { useState } from "react";

// //components
// import OrderModal from "./order-modal/OrderModal";
// import ConfirmModal from "./confirm-modal/ConfirmModal";

// //third-party
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faTrash, faTruck } from "@fortawesome/free-solid-svg-icons";

// //constants
// import { mockOrders, statusColors } from "./constants";

// const Orders = () => {
//   const [search, setSearch] = useState("");
//   const [orders, setOrders] = useState(mockOrders);
//   const [viewOrder, setViewOrder] = useState(null);
//   const [deleteOrder, setDeleteOrder] = useState(null);
//   const [confirmOpen, setConfirmOpen] = useState(false);

//   const filteredOrders = orders.filter(
//     (o) =>
//       o.customer.toLowerCase().includes(search.toLowerCase()) ||
//       o.id.toLowerCase().includes(search.toLowerCase())
//   );

//   function handleDelete(order) {
//     setDeleteOrder(order);
//     setConfirmOpen(true);
//   }
//   function confirmDelete() {
//     setOrders(orders.filter((o) => o.id !== deleteOrder.id));
//     setConfirmOpen(false);
//   }
//   return (
//     <div className="flex flex-col gap-8 w-full min-h-screen p-4">
//       <div className="z-10 rounded-xl border border-gray-300">
//         <div className="flex p-4 flex-col md:flex-row md:items-center md:justify-between gap-4">
//           <h1 className="text-2xl">Order Management</h1>
//           <input
//             type="text"
//             placeholder="Search orders..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-64 bg-white"
//           />
//         </div>
//       </div>
//       <div className="overflow-x-auto rounded-xl bg-white border border-gray-200">
//         <table className="min-w-full text-sm">
//           <thead>
//             <tr className="text-left border-b border-gray-200">
//               <th className="py-3 px-4">Order ID</th>
//               <th className="py-3 px-4">Customer</th>
//               <th className="py-3 px-4">Date</th>
//               <th className="py-3 px-4">Total</th>
//               <th className="py-3 px-4">Status</th>
//               <th className="py-3 px-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredOrders.length === 0 ? (
//               <tr>
//                 <td colSpan={6} className="text-center py-8 text-gray-400">
//                   No orders found.
//                 </td>
//               </tr>
//             ) : (
//               filteredOrders.map((order) => (
//                 <tr
//                   key={order.id}
//                   className="border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200 transition"
//                 >
//                   <td className="py-3 px-4 font-mono font-semibold">
//                     {order.id}
//                   </td>
//                   <td className="py-3 px-4">
//                     {order.customer}
//                   </td>
//                   <td className="py-3 px-4">
//                     {order.date}
//                   </td>
//                   <td className="py-3 px-4 font-semibold text-blue-600">
//                     ${order.total.toFixed(2)}
//                   </td>
//                   <td className="py-3 px-4">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}
//                     >
//                       {order.status}
//                     </span>
//                   </td>
//                   <td className="py-3 px-4 flex gap-2">
//                     <button
//                       title="View"
//                       className="p-2 rounded"
//                       onClick={() => setViewOrder(order)}
//                     >
//                       <FontAwesomeIcon
//                         icon={faEye}
//                         className="w-5 h-5"
//                       />
//                     </button>
//                     {order.status === "Pending" && (
//                       <button
//                         title="Mark as Shipped"
//                         className="p-2 rounded"
//                         onClick={() =>
//                           setOrders(
//                             orders.map((o) =>
//                               o.id === order.id
//                                 ? { ...o, status: "Shipped" }
//                                 : o
//                             )
//                           )
//                         }
//                       >
//                         <FontAwesomeIcon
//                           icon={faTruck}
//                           className="w-5 h-5 text-blue-600"
//                         />
//                       </button>
//                     )}
//                     <button
//                       title="Delete"
//                       className="p-2 rounded"
//                       onClick={() => handleDelete(order)}
//                     >
//                       <FontAwesomeIcon
//                         icon={faTrash}
//                         className="w-5 h-5 text-red-600"
//                       />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//       <OrderModal
//         order={viewOrder}
//         open={!!viewOrder}
//         onClose={() => setViewOrder(null)}
//       />
//       <ConfirmModal
//         open={confirmOpen}
//         onClose={() => setConfirmOpen(false)}
//         onConfirm={confirmDelete}
//         message="Are you sure you want to delete this order?"
//       />
//     </div>
//   );
// };

// export default Orders;
