import { Calendar, Clock, Globe2, Search } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../components/Modal";
import { Banner } from "../components/demo/Banner";
import { ComunityInfo } from "../components/demo/ComunityInfo";
import { EventsSection } from "../components/demo/EventsSection";

export const DemoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-montserrat">
      <main className="container mx-auto px-4 py-6">
        {/* Banner */}
        <Banner />

        {/* Community Info */}
        <ComunityInfo />
        {/* Events Section */}
        <EventsSection />
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
