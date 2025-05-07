import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <section className="py-16 px-4 md:px-8 container mx-auto font-inter">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-6xl font-semibold mb-4 font-montserrat leading-18">
          La confianza que buscas,{" "}
          <span className="text-[#004851]">con un solo click</span>
        </h1>
        <p className="text-muted-foreground mb-8 font-inter text-lg">
          Con nuestro background check obtienes el reporte de validación de
          identidad más exhaustivo de Perú.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center font-inter text-lg">
          <button className="rounded-full bg-[#004851] hover:bg-[#003840] hover:cursor-pointer text-white px-8 py-2">
            <Link to="/demo-servicio">Empieza</Link>
          </button>
          <button variant="outline" className="rounded-full px-8 py-2 border hover:cursor-pointer">
            <Link to="/demo-servicio">Demo</Link>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-16">
        <div className="bg-[#004851] text-white p-8 rounded-lg">
          <div className="text-4xl font-bold mb-2">500+</div>
          <div className="text-sm opacity-80 font-montserrat">
            Usuarios Verificados
          </div>
          <div className="text-xs opacity-60 mt-4 font-montserrat">
            Confian en nuestra plataforma
          </div>
        </div>

        <div className="bg-[#e8ffd4] p-8 rounded-lg relative">
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium">Online</span>
            </div>
          </div>
          <div className="text-4xl font-bold mb-2">99.9%</div>
          <div className="text-sm font-montserrat">
            Disponibilidad garantizada
          </div>
          <div className="flex items-center mt-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-sm ml-2">5.0</span>
          </div>
        </div>

        <div className="bg-[#004851] text-white p-8 rounded-lg">
          <div className="text-4xl font-bold mb-2">50+</div>
          <div className="text-sm opacity-80 font-montserrat">Empresas</div>
          <div className="text-xs opacity-60 mt-4 font-montserrat">
            Ya operan con nosotros
          </div>
        </div>

        <div className="bg-[#e8ffd4] p-8 rounded-lg relative">
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium">Online</span>
            </div>
          </div>
          <div className="text-4xl font-bold mb-2">200+</div>
          <div className="text-sm font-montserrat">Transacciones</div>
          <div className="flex items-center mt-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-sm ml-2">5.0</span>
          </div>
        </div>

        <div className="bg-[#004851] text-white p-8 rounded-lg">
          <div className="text-4xl font-bold mb-2">+150</div>
          <div className="text-sm opacity-80 font-montserrat">Horas</div>
          <div className="text-xs opacity-60 mt-4 font-montserrat">
            Ahorradas por nuestros usuarios
          </div>
        </div>
      </div>
    </section>
  );
};
