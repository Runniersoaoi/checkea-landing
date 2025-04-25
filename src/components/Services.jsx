import { ArrowRight } from "lucide-react";
import React from "react";

export const Services = () => {
  return (
    <section className="bg-[#004851] text-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 font-montserrat">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 ">
            Eficiencia e Integridad
          </h2>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Nuestros servicios
          </h2>
          <p className="text-sm opacity-80">
            Simplifica tus operaciones, con nuestros servicios enfocados en la
            flexibilidad y la calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "⚙️",
              title: "Antecedentes judiciales",
              description:
                "Permite consultar y verificar registros judiciales para evaluar historial legal y evitar riesgos.",
            },
            {
              icon: "🔧",
              title: "Información laboral",
              description:
                "Facilita la validación de experiencia y referencias laborales para respaldar la confiabilidad profesional.",
            },
            {
              icon: "🎯",
              title: "Identidad digital",
              description:
                "Habilita la verificación de identidad mediante tecnologías seguras y procesos digitales confiables.",
            },
            {
              icon: "💡",
              title: "Información pública",
              description:
                "Proporciona acceso a registros abiertos y bases de datos oficiales que complementan procesos de verificación.",
            },
            {
              icon: "📦",
              title: "Listas negras",
              description:
                "Permite revisar bases de datos de riesgo para detectar sanciones, inhabilitaciones o antecedentes negativos.",
            },
            {
              icon: "📊",
              title: "Información empresarial",
              description:
                "Ofrece herramientas para validar datos comerciales, situación tributaria y legal de empresas registradas.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="border border-[#005c66] p-6 rounded-lg flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{service.icon}</div>
                <div className="mt-auto">
                  <ArrowRight className="h-10 w-10" />
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2 font-montserrat">
                {service.title}
              </h3>
              <p className="text-sm opacity-80 mb-4 font-inter">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
