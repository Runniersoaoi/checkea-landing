import React, { useEffect, useState } from "react";
import { loadValidation } from "../helpers/loadValidation";
import { useSelector } from "react-redux";

export const UploadWaitPage = () => {
  const validation = useSelector((state) => state.validation);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const uploadData = async () => {
      try {
        await loadValidation(validation);
      } catch (error) {
        console.error("Error subiendo los datos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    uploadData();
  }, [validation]);

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-white w-full p-20 md:p-0 font-montserrat">
      {isLoading ? (
        <p className="text-2xl font-semibold animate-pulse">Cargando...</p>
      ) : (
        <>
          <p className="text-4xl py-4">🫡📅</p>
          <h4 className="text-xl font-semibold text-center mb-6">
            Excelente, se envió los datos para la validación. Ya puede cerrar
            esta ventana.
          </h4>
        </>
      )}
    </div>
  );
};
