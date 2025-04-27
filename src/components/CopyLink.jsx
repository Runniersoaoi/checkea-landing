import { useState } from "react";

export const CopyLink = () => {
  const [copied, setCopied] = useState(false);
  const link = "https://w112s4tq-5173.brs.devtunnels.ms/validation";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000); // Mensaje de "copiado" por 2 segundos
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Ir al proceso de validación
      </a> */}
      <button
        onClick={handleCopy}
        className="bg-[#004851] hover:cursor-pointer text-white font-bold py-1 px-3 rounded-full mt-2"
      >
        {copied ? "¡Copiado!" : "Copiar enlace"}
      </button>
    </div>
  );
};
