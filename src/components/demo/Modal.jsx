import { QrCode } from "lucide-react";

export const Modal = ({ isOpen, onClose, validation }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 overflow-auto   overflow-y-auto"
    >
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl relative max-h-[90vh]  ">
        <button
          onClick={onClose}
          className="absolute top-2 right-8 text-gray-100 hover:text-white text-xl hover:cursor-pointer "
        >
          &times;
        </button>
        <div className=" bg-gradient-to-b from-[#004851] to-[#002428] text-white  md:p-8 font-montserrat rounded-2xl max-h-[80vh] overflow-auto border">
          <div className="max-w-4xl mx-auto bg-[#00333a]/80 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm ">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between p-4 border-b border-[#006670]/30">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 relative">
                  <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#004851] text-xs font-bold">
                      PERÚ
                    </span>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="font-semibold">Validación Checkea</p>
                  <p className="text-xs opacity-80">Reporte Virtual</p>
                </div>
              </div>

              <div className="flex items-center mt-4 md:mt-0">
                <div className="text-sm mr-4">
                  <p className="font-bold">República del Perú</p>
                  <p className="text-xs opacity-80">Firma Digital</p>
                </div>
                <div className="border border-[#006670]/30 p-2 rounded bg-[#002428]/50">
                  <p className="text-xs font-mono">20258650594</p>
                  <div className="text-[10px] mt-1">
                    <p>Fecha: 24-04-2023 08:29</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="text-center py-6">
              <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
                REPORTE DE VALIDACIÓN CHECKEA
              </h1>
            </div>

            {/* Description */}
            <div className="px-4 md:px-8 py-4 text-sm">
              <p className="leading-relaxed">{validation.description}</p>
            </div>

            {/* Identity Section */}
            <div className="px-4 md:px-8 mb-4">
              <div className="bg-[#005a63]/40 py-2 px-4 rounded-t-md">
                <h2 className="font-semibold">IDENTIDAD: Fuente - RENIEC</h2>
              </div>
              <div className="bg-[#003a40]/30 p-4 rounded-b-md grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex">
                    <span className="font-semibold w-32">Nombres</span>
                    <span className="text-[#8adbdb]">: {validation.name}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold w-32">Apellidos</span>
                    <span className="text-[#8adbdb]">
                      : {validation.lastname}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold w-32">Nacionalidad</span>
                    <span className="text-[#8adbdb]">: Perú</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold w-32">
                      Tipo de documento
                    </span>
                    <span className="text-[#8adbdb]">
                      : Documento Nacional De Identidad
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex">
                    <span className="font-semibold w-32">N° de documento</span>
                    <span className="text-[#8adbdb]">: {validation.dni}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold w-32">
                      Fecha de nacimiento
                    </span>
                    <span className="text-[#8adbdb]">
                      : {validation.birthdate}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold w-32">Domicilio</span>
                    <span className="text-[#8adbdb]">
                      : {validation.address}
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-24 h-24 bg-white p-1 rounded text-[#004851]">
                      <QrCode className="h-full w-full" />
                      <p className="text-[8px] text-center text-[#004851] mt-1">
                        Verificar aquí
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Judicial Records Section
            <div className="px-4 md:px-8 mb-4">
              <div className="bg-[#005a63]/40 py-2 px-4 rounded-t-md">
                <h2 className="font-semibold">
                  ANTECEDENTES JUDICIALES: Fuente - PNP
                </h2>
              </div>
              <div className="bg-[#003a40]/30 p-4 rounded-b-md">
                <p>No registra antecedentes.</p>
              </div>
            </div>

            {/* INPE Records Section */}
            {/* <div className="px-4 md:px-8 mb-4">
              <div className="bg-[#005a63]/40 py-2 px-4 rounded-t-md">
                <h2 className="font-semibold">
                  ANTECEDENTES JUDICIALES: Fuente - INPE
                </h2>
              </div>
              <div className="bg-[#003a40]/30 p-4 rounded-b-md">
                <p>No registra antecedentes.</p>
              </div>
            </div> */}

            {/* Criminal Records Section */}
            {/* <div className="px-4 md:px-8 mb-4">
              <div className="bg-[#005a63]/40 py-2 px-4 rounded-t-md">
                <h2 className="font-semibold">
                  ANTECEDENTES PENALES: Fuente - Poder Judicial
                </h2>
              </div>
              <div className="bg-[#003a40]/30 p-4 rounded-b-md">
                <p>No registra antecedentes.</p>
              </div>
            </div>  */}

            {/* Education Section */}
            <div className="px-4 md:px-8 mb-4">
              <div className="bg-[#005a63]/40 py-2 px-4 rounded-t-md">
                <h2 className="font-semibold">
                  TRAYECTORIA EDUCATIVA RESPECTO A FORMACIÓN UNIVERSITARIA:
                  Fuente - SUNEDU
                </h2>
              </div>
              <div className="bg-[#003a40]/30 p-4 rounded-b-md">
                <p>{validation.higher_level_education_sunedu}</p>
              </div>
            </div>

            {/* Higher Education Section */}
            <div className="px-4 md:px-8 mb-4">
              <div className="bg-[#005a63]/40 py-2 px-4 rounded-t-md">
                <h2 className="font-semibold">
                  TRAYECTORIA EDUCATIVA RESPECTO A EDUCACIÓN SUPERIOR
                  PEDAGÓGICA, TECNOLÓGICA Y ARTÍSTICA: Fuente - MINEDU / SUNEDU
                </h2>
              </div>
              <div className="bg-[#003a40]/30 p-4 rounded-b-md">
                <p>{validation.higher_level_education_minedu}</p>
              </div>
            </div>

            {/* Technical Education Section */}
            <div className="px-4 md:px-8 mb-4">
              <div className="bg-[#005a63]/40 py-2 px-4 rounded-t-md">
                <h2 className="font-semibold">
                  TRAYECTORIA EDUCATIVA RESPECTO A EDUCACIÓN TÉCNICO -
                  PRODUCTIVA: Fuente - MINEDU
                </h2>
              </div>
              <div className="bg-[#003a40]/30 p-4 rounded-b-md">
                <p>{validation.technical_education}</p>
              </div>
            </div>

            {/* Basic Education Section */}
            <div className="px-4 md:px-8 mb-4">
              <div className="bg-[#005a63]/40 py-2 px-4 rounded-t-md">
                <h2 className="font-semibold">
                  TRAYECTORIA EDUCATIVA RESPECTO A EDUCACIÓN BÁSICA: Fuente -
                  MINEDU
                </h2>
              </div>
              <div className="bg-[#003a40]/30 p-4 rounded-b-md">
                <p>{validation.basic_education}</p>
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="px-4 md:px-8 mb-4">
              <div className="bg-[#005a63]/40 py-2 px-4 rounded-t-md">
                <h2 className="font-semibold">
                  EXPERIENCIA LABORAL: Fuente - Planillas Electrónicas
                </h2>
              </div>
              <div className="bg-[#003a40]/30 p-4 rounded-b-md">
                <p>{validation.job_experiencie}</p>
              </div>
            </div>

            {/* Footer
            <div className="px-4 md:px-8 py-6 text-xs text-center border-t border-[#006670]/30 mt-4">
              <p className="max-w-3xl mx-auto leading-relaxed">
                Esta es una copia auténtica imprimible de un documento
                electrónico archivado por el Ministerio de Trabajo y Promoción
                del Empleo, en aplicación de lo dispuesto por el artículo 25 del
                Reglamento de la Ley de Transparencia y Acceso a la Información
                Pública, aprobado por Decreto Supremo N° 072-2003-PCM y sus
                modificaciones.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
