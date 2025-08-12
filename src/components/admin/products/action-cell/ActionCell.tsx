import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomCellRendererProps } from "ag-grid-react";
import { useState } from "react";
import AddProductModal from "../edit-product-modal/EditProductModal";
import Modal from "@/components/Modal";

function ActionsCell(props: CustomCellRendererProps) {
  const [isEditModalOpen, setEditIsModalOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-center gap-2">
      <FontAwesomeIcon
        icon={faEdit}
        className="cursor-pointer pr-2"
        onClick={() => setEditIsModalOpen(true)}
      />
      <FontAwesomeIcon icon={faTrash} className="cursor-pointer" />

      <Modal title="testing" isOpen={isEditModalOpen}>
        <AddProductModal
          isOpen={isEditModalOpen}
          onClose={() => setEditIsModalOpen(false)}
          details={props?.data}
        />
      </Modal>
    </div>
  );
}

export default ActionsCell;
