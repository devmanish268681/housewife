import { useState } from "react";

interface AddressEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: any
}
const AddressEditModal = ({ isOpen, onClose }:AddressEditModalProps) => {
  const [addressForm, setAddressForm] = useState({
    label: "",
    address: "",
    phone: "",
  });

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressSave = () => {
    console.log("Save", addressForm);
    onClose();
  };

  const handleAddressCancel = () => {
    setAddressForm({ label: "", address: "", phone: "" });
    onClose();
  };

  if (!isOpen) return null; // modal closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl">
        <h2 className="text-lg font-semibold mb-4">Add New Address</h2>

        <div className="flex flex-col gap-3 w-full">
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            name="label"
            value={addressForm.label}
            onChange={handleAddressChange}
            placeholder="Street"
          />
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            name="address"
            value={addressForm.address}
            onChange={handleAddressChange}
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            name="phone"
            value={addressForm.phone}
            onChange={handleAddressChange}
            placeholder="State"
          />
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            name="phone"
            value={addressForm.phone}
            onChange={handleAddressChange}
            placeholder="Country"
          />
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            name="phone"
            value={addressForm.phone}
            onChange={handleAddressChange}
            placeholder="Zip Code"
          />
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
            onClick={handleAddressCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white transition"
            onClick={handleAddressSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddressEditModal
