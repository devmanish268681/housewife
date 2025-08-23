import { Address } from "@/lib/types/user";
import React, { useState } from "react";
import AddressEditModal from "./components/address-edit-modal/AddressEditModal";

interface AddressListProps {
  addresses: Address[];
  phone: string;
  editAddressId: number | null;
  addressForm: { label: string; address: string; phone: string };
  handleEditAddress: (id: number) => void;
  handleAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddressSave: () => void;
  handleAddressCancel: () => void;
}

const AddressList: React.FC<AddressListProps> = ({
  addresses,
  phone,
}) => {
  const [isEditModalOpen,setIsEditModalOpen] = useState(false);
  const handleEditAddress = () => {
    setIsEditModalOpen(true);
  }
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-2 text-[#181111]">Saved Addresses</h3>
      <div className="space-y-4">
        {addresses?.map((addr) => (
          <div
            key={addr.id}
            className="border rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 bg-[#FFFDE7]"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-2 w-full justify-between">
              <div>
                <div className="font-semibold text-[#b59f00]">Home</div>
                <div className="text-sm text-[#181111]">{addr.street},{addr.state},{addr.country},{addr.zipCode}</div>
                <div className="text-xs text-gray-600">{phone}</div>
              </div>
              <button
                className="text-xs text-[#b59f00] underline hover:text-[#181111] mt-2 md:mt-0"
              onClick={() => handleEditAddress()}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
        <AddressEditModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
      </div>
    </div>
  )
}

export default AddressList; 