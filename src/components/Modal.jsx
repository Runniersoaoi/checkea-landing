import React from "react";
import { CopyLink } from "./CopyLink";

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
    >
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">
          Inicie un nuevo proceso de validación
        </h2>
        <p className="py-2">
          Comparta este link con la persona a la cual quiere validar
        </p>
        <p className="py-2">
          👀 Recuerde que este proceso realiza validaciones y necesita la
          autorizacion de la persona a validar
        </p>

        <CopyLink />
      </div>
    </div>
  );
};
