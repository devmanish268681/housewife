"use client";

import React, { useState } from "react";

//components
import CategoryModal from "./category-modal/CategoryModal";

//third-party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPen,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

//types
import { Category } from "./types";

//constants
import { mockCategories } from "./constants";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
import { useGetCategoriesQuery } from "@/lib/slices/categoriesApiSlice";
import AddEditCategoryModal from "./add-edit-category-modal/AddEditCategoryModal";
import ActionsCell from "./action-cell/ActionCell";

// Register all community features
ModuleRegistry.registerModules([AllCommunityModule]);

const Categories = () => {
  const [search, setSearch] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewCategory, setViewCategory] = useState<Category | null>(null);
  const filteredCategories = mockCategories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const { data: categoriesData } = useGetCategoriesQuery();

  const columnDefs = [
    { field: "id", sortable: true },
    { field: "createdAt", sortable: true },
    { field: "updatedAt", sortable: true },
    { field: "name", headerName: "Category Name", sortable: true },
    { field: "description", sortable: true },
    { field: "image", sortable: true },
    {
      field: "actions",
      headerName: "Actions",
      cellRenderer: ActionsCell,
      sortable: false,
    },
  ];

  return (
    // <div className="w-full flex flex-col gap-8 min-h-screen p-4">
    //   <div className="z-10 rounded-xl border border-gray-300">
    //     <div className="flex p-4 flex-col md:flex-row md:items-center md:justify-between gap-4">
    //       <h1 className="text-2xl">
    //         Category Management
    //       </h1>
    //       <input
    //         type="text"
    //         placeholder="Search categories..."
    //         value={search}
    //         onChange={(e) => setSearch(e.target.value)}
    //         className="px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-64 bg-white"
    //       />
    //     </div>
    //   </div>
    //   <div className="overflow-x-auto rounded-xl bg-white border border-gray-200">
    //     <table className="min-w-full text-sm">
    //       <thead>
    //         <tr className="text-left border-b border-gray-200">
    //           <th className="py-3 px-4">Category Name</th>
    //           <th className="py-3 px-4">Product Count</th>
    //           <th className="py-3 px-4">Actions</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {filteredCategories.length === 0 ? (
    //           <tr>
    //             <td colSpan={3} className="text-center py-8 text-gray-400">
    //               No categories found.
    //             </td>
    //           </tr>
    //         ) : (
    //           filteredCategories.map((category) => (
    //             <tr
    //               key={category.name}
    //               className="border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200 transition"
    //             >
    //               <td className="py-3 px-4 font-semibold">
    //                 {category.name}
    //               </td>
    //               <td className="py-3 px-4">
    //                 <span className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs font-semibold">
    //                   {category.productCount}
    //                 </span>
    //               </td>
    //               <td className="py-3 px-4 flex gap-2">
    //                 <button
    //                   title="View"
    //                   className="p-2 rounded"
    //                   onClick={() => setViewCategory(category)}
    //                 >
    //                   <FontAwesomeIcon
    //                     icon={faEye}
    //                     className="w-5 h-5"
    //                   />
    //                 </button>
    //                 <button
    //                   title="Edit"
    //                   className="p-2 rounded"
    //                 >
    //                   <FontAwesomeIcon
    //                     icon={faPen}
    //                     className="w-5 h-5 text-yellow-600"
    //                   />
    //                 </button>
    //                 <button
    //                   title="Delete"
    //                   className="p-2 rounded hover:bg-red-100 dark:hover:bg-red-900"
    //                 >
    //                   <FontAwesomeIcon
    //                     icon={faTrash}
    //                     className="w-5 h-5 text-red-600"
    //                   />
    //                 </button>
    //               </td>
    //             </tr>
    //           ))
    //         )}
    //       </tbody>
    //     </table>
    //   </div>
    //   <CategoryModal
    //     category={viewCategory}
    //     open={!!viewCategory}
    //     onClose={() => setViewCategory(null)}
    //   />
    // </div>
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-2xl font-semibold">Category Management</h2>
        <div className="flex gap-3">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
            onClick={() => setIsAddModalOpen(true)}
          >
            <FontAwesomeIcon icon={faPlus} /> Add Category
          </button>
        </div>
      </div>
      <div
        className="ag-theme-alpine"
        style={{ height: "70vh", width: "100%" }}
      >
        <AgGridReact
          rowData={categoriesData?.categories || []}
          columnDefs={columnDefs as ColDef[]}
          pagination={true}
          theme={"legacy"}
          autoSizeStrategy={{ type: "fitGridWidth" }}
        />
      </div>

      <AddEditCategoryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
};

export default Categories;
