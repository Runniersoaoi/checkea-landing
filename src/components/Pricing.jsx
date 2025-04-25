import { CheckCircle2 } from "lucide-react";
import React from "react";

export const Pricing = () => {
  return (
    <section className="bg-[#004851] text-white py-16 px-4 md:px-8 font-montserrat">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Planes a la medida
          </h2>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            De tus necesidades
          </h2>
          <p className="text-sm opacity-80 font-inter">
            Opciones flexibles para cualquier tamaño de empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-[#003840] p-8 rounded-lg">
            <h3 className="font-bold mb-1">Básico</h3>
            <p className="text-sm opacity-80 mb-4">
              Paquete centrado en las funcionalidades basicas que tu necesitas
              para poder empezar.
            </p>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-3xl font-bold font-inter">$8.99</span>
              <span className="text-sm opacity-80">/report</span>
            </div>
            <button
              variant="outline"
              className="w-full mb-6 border-white text-white hover:bg-white hover:text-[#003840] border rounded-md py-2"
            >
              Empezar
            </button>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">
                  Verificación de identidad digital básica
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">
                  Consulta de antecedentes judiciales nacionales
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">
                  {" "}
                  Acceso a información pública disponible
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">
                  Validación limitada de información laboral
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#003840] p-8 rounded-lg">
            <h3 className="font-bold mb-1">Personalizado</h3>
            <p className="text-sm opacity-80 mb-4">
              La solución perfecta para las empresas que quieren crecer.
            </p>
            <div className="flex items-end gap-1 mb-6">
              <span className=" opacity-80 text-white text-xl py-1">
                Condiciones de precio competitivas
              </span>
            </div>
            <button
              variant="outline"
              className="w-full mb-6 border-white text-white hover:bg-white hover:text-[#003840] border rounded-md py-2"
            >
              Get Started
            </button>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">
                  Integraciones a medida con sistemas internos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">
                  Acceso completo a todas las fuentes de verificación
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">
                  Automatización de flujos de validación según reglas de negocio
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm">
                  Módulos exclusivos según sector o necesidad específica
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-6">
          <div className="bg-[#005c66] p-8 rounded-lg text-center">
            <h3 className="font-bold mb-2">Profesional</h3>
            <p className="text-sm opacity-80 mb-6">
              Diseñado para empresas robustas que requieren más funciones y
              capacidad para escalar sus operaciones.
            </p>
            <button className="bg-white text-[#004851] hover:bg-gray-100 rounded-md px-4 py-2">
              Contacto de ventas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
