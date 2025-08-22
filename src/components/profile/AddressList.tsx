import { Address } from "@/lib/types/user";
import React from "react";

interface AddressListProps {
  addresses:Address[];
  editAddressId: number | null;
  addressForm: { label: string; address: string; phone: string };
  handleEditAddress: (id: number) => void;
  handleAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddressSave: () => void;
  handleAddressCancel: () => void;
}

const AddressList: React.FC<AddressListProps> = ({
  addresses,
  editAddressId,
  addressForm,
  handleEditAddress,
  handleAddressChange,
  handleAddressSave,
  handleAddressCancel,
}) => (
  <div className="bg-white rounded-2xl shadow p-6">
    <h3 className="text-lg font-semibold mb-2 text-[#181111]">Saved Addresses</h3>
    <div className="space-y-4">
      {addresses?.map((addr) => (
        <div
          key={addr.id}
          className="border rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 bg-[#FFFDE7]"
        >
          {/* {editAddressId === addr.id ? (
            <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
              <input
                className="px-2 py-1 rounded border w-full md:w-32"
                name="label"
                value={addressForm.label}
                onChange={handleAddressChange}
                placeholder="Label"
              />
              <input
                className="px-2 py-1 rounded border w-full md:w-64"
                name="address"
                value={addressForm.address}
                onChange={handleAddressChange}
                placeholder="Address"
              />
              <input
                className="px-2 py-1 rounded border w-full md:w-40"
                name="phone"
                value={addressForm.phone}
                onChange={handleAddressChange}
                placeholder="Phone"
              />
              <button
                className="bg-[#FFD600] text-[#181111] px-3 py-1 rounded font-semibold shadow"
                onClick={handleAddressSave}
              >
                Save
              </button>
              <button
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded font-semibold shadow"
                onClick={handleAddressCancel}
              >
                Cancel
              </button>
            </div>
          ) : (
            
          )} */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 w-full justify-between">
              <div>
                <div className="font-semibold text-[#b59f00]">Home</div>
                <div className="text-sm text-[#181111]">{addr.street},{addr.state},{addr.country},{addr.zipCode}</div>
                {/* <div className="text-xs text-gray-600">{addr.phone}</div> */}
              </div>
              <button
                className="text-xs text-[#b59f00] underline hover:text-[#181111] mt-2 md:mt-0"
                // onClick={() => handleEditAddress(addr?.id)}
              >
                Edit
              </button>
            </div>
        </div>
      ))}
    </div>
  </div>
);

export default AddressList; 