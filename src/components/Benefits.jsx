import { CheckCircle2 } from "lucide-react";
import React from "react";

export const Benefits = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-8">
              <div className="text-sm text-muted-foreground mb-2 font-montserrat">
                Total Projects
              </div>
              <div className="text-4xl font-bold font-inter">94%</div>
              <div className="text-xs text-muted-foreground font-inter">
                +8%
              </div>

              <div className="space-y-2 mt-6">
                {[80, 65, 90, 75].map((value, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="text-xs text-muted-foreground w-20 font-inter">
                      Category {index + 1}
                    </div>
                    <div className="h-2 bg-gray-200 flex-1 rounded-full">
                      <div
                        className="h-2 bg-[#004851] rounded-full"
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                    <div className="text-xs font-inter">{value}%</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#e8ffd4] p-6 rounded-lg">
              <div className="flex items-center gap-1 mb-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-xs font-medium font-montserrat">
                  Total Projects
                </span>
              </div>
              <div className="text-4xl font-bold font-inter">1951+</div>
            </div>
          </div>

          <div className="font-montserrat">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Principales beneficios de nuestro sistema para
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              la eficiencia de tu negocio
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Nuestro sistema aumenta la productividad, la precisión e impulsa
              el crecimiento empresarial.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Confianza instantánea",
                  description:
                    "Digitaliza procesos de verificación para generar confianza inmediata entre usuarios, empresas y entidades.",
                },
                {
                  title: "Reducción de riesgos",
                  description:
                    "Detecta antecedentes negativos y valida información clave para prevenir fraudes y proteger tus operaciones.",
                },
                {
                  title: "Procesos más ágiles",
                  description:
                    "Automatiza la validación de datos para acelerar decisiones, mejorar la eficiencia y reducir tiempos operativos.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#004851] flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
