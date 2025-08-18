"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faDownload,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

interface ProductItem {
  name: string;
  quantity: number;
  price: number;
}

interface OrderDetailsModalProps {
  order: {
    id: string;
    customerName: string;
    customerEmail: string;
    address: string;
    status: string;
    paymentMethod: string;
    products: ProductItem[];
    total: number;
    date: string;
  } | null;
  onClose: () => void;
}

export default function OrderDetailsModal({
  order,
  onClose,
}: OrderDetailsModalProps) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-xl font-bold">Order #{order.id}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>

        {/* Customer Info */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-700">Customer Info</h3>
          <p>
            <span className="font-medium">Name:</span> {order.customerName}
          </p>
          <p>
            <span className="font-medium">Email:</span> {order.customerEmail}
          </p>
          <p>
            <span className="font-medium">Address:</span> {order.address}
          </p>
        </div>

        {/* Order Details */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-700">Order Details</h3>
          <p>
            <span className="font-medium">Date:</span> {order.date}
          </p>
          <p>
            <span className="font-medium">Payment:</span> {order.paymentMethod}
          </p>
          <p>
            <span className="font-medium">Status:</span> {order.status}
          </p>
        </div>

        {/* Products Table */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-700 mb-2">Products</h3>
          <table className="w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Product</th>
                <th className="p-2 border">Quantity</th>
                <th className="p-2 border">Price (₹)</th>
                <th className="p-2 border">Subtotal (₹)</th>
              </tr>
            </thead>
            <tbody>
              {order?.products?.map((item, idx) => (
                <tr key={idx} className="text-sm">
                  <td className="p-2 border">{item.name}</td>
                  <td className="p-2 border text-center">{item.quantity}</td>
                  <td className="p-2 border text-right">{item.price}</td>
                  <td className="p-2 border text-right">
                    {item.quantity * item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center border-t pt-3">
          <span className="font-semibold text-lg">Total:</span>
          <span className="font-bold text-xl text-green-600">
            ₹{order.total}
          </span>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
            <FontAwesomeIcon icon={faPrint} /> Print
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <FontAwesomeIcon icon={faDownload} /> Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
}
