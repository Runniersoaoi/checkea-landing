import React, { useEffect, useState } from "react";
import { getAllValidations } from "../../helpers/getValidations";
import { Globe2 } from "lucide-react";

export const EventsSection = () => {
  const [validations, setValidations] = useState([]);
  const [pendingCount, setPendingCount] = useState(0);
  const [readyCount, setReadyCount] = useState(0);
  const [observedCount, setObservedCount] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("");
  useEffect(() => {
    const fetchValidations = async () => {
      const data = await getAllValidations();
      setValidations(data);
      const pending = data.filter((v) => v.status === "pending").length;
      const ready = data.filter((v) => v.status === "ready").length;
      const observed = data.filter((v) => v.status === "observed").length;

      setPendingCount(pending);
      setReadyCount(ready);
      setObservedCount(observed);
    };

    fetchValidations();
  }, []);

  const filteredValidations = selectedFilter
    ? validations.filter((v) => v.status === selectedFilter)
    : validations;
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Tus analisis</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {/* Event Filters */}
          <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedFilter("")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
                selectedFilter === ""
                  ? "bg-[#004851] text-white"
                  : "bg-[#005c66] text-white"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setSelectedFilter("pending")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
                selectedFilter === "pending"
                  ? "bg-[#004851] text-white"
                  : "bg-[#005c66] text-white"
              }`}
            >
              Analisis Pendientes
              <span className="bg-[#e8ffd4] text-[#004851] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {pendingCount}
              </span>
            </button>
            <button
              onClick={() => setSelectedFilter("ready")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
                selectedFilter === "ready"
                  ? "bg-[#004851] text-white"
                  : "bg-[#005c66] text-white"
              }`}
            >
              Analisis Listos
              <span className="bg-[#e8ffd4] text-[#004851] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {readyCount}
              </span>
            </button>
            <button
              onClick={() => setSelectedFilter("observed")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
                selectedFilter === "observed"
                  ? "bg-[#004851] text-white"
                  : "bg-[#005c66] text-white"
              }`}
            >
              Observaciones
              <span className="bg-[#e8ffd4] text-[#004851] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {observedCount}
              </span>
            </button>
          </div>

          {/* Event Date
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-[#005c66]"></div>
        <h3 className="text-xl font-medium">Mayo 4</h3>
        <span className="text-white/70">Sunday</span>
      </div> */}

          {/* Event Card */}
          {filteredValidations.map((validation) => {
            const createdAt = validation.createdAt
              ? new Date(validation.createdAt.seconds * 1000)
              : new Date();
            const formattedDate = createdAt.toLocaleDateString();
            const formattedTime = createdAt.toLocaleTimeString();

            return (
              <div
                key={validation.id}
                className="bg-[#005c66] rounded-lg overflow-hidden flex justify-between mb-6 md:flex-row flex-col"
              >
                <div className="p-4">
                  <div className="text-white/70 mb-1">
                    {formattedTime} · {formattedDate}
                  </div>
                  <h3 className="font-bold mb-3 text-white md:text-xl text-lg">
                    Solicitud de {validation.email}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Globe2 className="h-4 w-4" />
                    ID: {validation.id}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70 mt-2">
                    <Globe2 className="h-4 w-4" />
                    Estado: {validation.status}
                  </div>
                </div>
                <div className="flex justify-center p-4 border-[#006670]">
                  <img
                    src={validation.facePhoto}
                    alt="Foto de usuario"
                    className="w-60 h-60 object-cover rounded-md"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
