import { Calendar, Clock, Globe2, Search } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../components/Modal";

export const DemoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen font-montserrat">
      <main className="container mx-auto px-4 py-6">
        {/* Banner */}
        <div className="relative mb-6 rounded-xl overflow-hidden">
          <div className="aspect-[3/1] w-full relative">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Community events collage"
              className="object-cover h-100 w-full"
            />
          </div>

          {/* Logo and Subscribe */}
          <div className="absolute bottom-4 left-4 flex items-end justify-between w-[calc(100%-2rem)]">
            <div className="bg-[#e8ffd4] text-[#004851] p-2 rounded-xl w-24 h-24 flex flex-col items-center justify-center text-center">
              <div className="w-full h-full bg-[#004851] rounded-xl flex items-center justify-center">
                <span className="text-white text-6xl">🐰</span>
              </div>
            </div>
          </div>
        </div>

        {/* Community Info */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">Nexora Tech</h1>
          <div className="flex items-center gap-2 text-white/70 mb-4">
            <Clock className="h-4 w-4" />
            <span>Times in GMT-5 — 10:39 AM</span>
          </div>
          <p className="text-lg mb-2">
            Nexora Tech es una empresa innovadora especializada en el desarrollo
            de soluciones tecnológicas inteligentes para empresas que buscan
            optimizar sus procesos y mantenerse a la vanguardia en la era
            digital. Fundada en 2021, Nexora combina la inteligencia artificial,
            el análisis de datos y el desarrollo de software personalizado para
            ofrecer herramientas escalables, seguras y eficientes.
          </p>
          <div className="flex gap-3 mt-4">
            <Link href="#" className="text-white/80 hover:text-white">
              <div className="w-6 h-6 flex items-center justify-center rounded-md bg-white/10">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        <hr className="border-[#005c66] mb-8" />

        {/* Events Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Tus analisis</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              {/* Event Filters */}
              <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                <div className="flex items-center gap-2 bg-[#005c66] px-3 py-1.5 rounded-full text-sm whitespace-nowrap text-white">
                  <span>Analisis Pendientes</span>
                  <span className="bg-[#e8ffd4] text-[#004851] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    0
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#005c66] px-3 py-1.5 rounded-full text-sm whitespace-nowrap text-white">
                  <span>Analisis Pasados</span>
                  <span className="bg-[#e8ffd4] text-[#004851] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    0
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#005c66] px-3 py-1.5 rounded-full text-sm whitespace-nowrap text-white">
                  <span>Observaciones</span>
                  <span className="bg-[#e8ffd4] text-[#004851] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    0
                  </span>
                </div>
              </div>

              {/* Event Date */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#005c66]"></div>
                <h3 className="text-xl font-medium">Mayo 4</h3>
                <span className="text-white/70">Sunday</span>
              </div>

              {/* Event Card */}
              <div className="bg-[#005c66] rounded-lg overflow-hidden flex justify-between h-70">
                <div className="p-4">
                  <div className="text-white/70 mb-1">
                    12:00 PM · 10:00 AM PDT
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    CoCreate Conference (San Francisco)
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Digital Garage US, Inc.
                  </div>
                </div>
                <div className="border-t border-[#006670]">
                  <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="CoCreate Conference"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Event Button */}
        <div className="flex justify-center mt-8 ">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#e8ffd4] text-[#004851]  flex items-center gap-2 py-2 px-6 rounded-full hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Crear una nueva validación
          </button>
        </div>
      </main>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
