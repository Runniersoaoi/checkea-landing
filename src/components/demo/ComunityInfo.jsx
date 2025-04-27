import { Calendar, Clock, Globe2, Search } from "lucide-react";

export const ComunityInfo = () => {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Nexora Tech</h1>
        <div className="flex items-center gap-2 text-white/70 mb-4">
          <Clock className="h-4 w-4" />
          <span>Times in GMT-5 — 10:39 AM</span>
        </div>
        <p className="text-lg mb-2">
          Nexora Tech es una empresa innovadora especializada en el desarrollo
          de soluciones tecnológicas inteligentes para empresas que buscan
          optimizar sus procesos y mantenerse a la vanguardia en la era digital.
          Fundada en 2021, Nexora combina la inteligencia artificial, el
          análisis de datos y el desarrollo de software personalizado para
          ofrecer herramientas escalables, seguras y eficientes.
        </p>
      </div>

      <hr className="border-[#005c66] mb-8" />
    </>
  );
};
