import React from "react";

export const Integration = () => {
  return (
    <section className="py-16 px-4 md:px-8 font-montserrat">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Empoderando a las mejores empresas con integraciones perfectas
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Conecte sus procesos de validación con sus herramientas y sistemas
              existentes. Nuestra plataforma se integra con el software
              empresarial líder y con todas las herramientas que necesita para
              que su negocio crezca sin problemas.
            </p>
            <button className="rounded-full bg-[#004851] hover:bg-[#003840] text-white px-6 py-3">
              Trabaja con nosotros
            </button>
          </div>
          <div className="bg-[#e8ffd4] p-8 rounded-lg h-64 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((icon) => (
                <div
                  key={icon}
                  className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-sm"
                >
                  <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
