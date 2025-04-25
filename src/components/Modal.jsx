import React from "react";

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
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Ir al proceso de validación
        </a>
      </div>
    </div>
  );
};
