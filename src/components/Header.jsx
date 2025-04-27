import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b py-4 px-4 md:px-8 font-montserrat">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/home" className="flex items-center gap-2">
            <img className="h-8" src="../logo-checkea.png" alt="logo-chequea" />
            <span className=" font-semibold">CHECKEA</span>
          </Link>
        </div>
        {/* <nav className="hidden md:flex items-center gap-8 ">
          <Link to="/home" className="text-sm font-medium">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium">
            Acerca de
          </Link>
          <Link href="#" className="text-sm font-medium">
            Servicios
          </Link>
          <Link href="#" className="text-sm font-medium">
            Contacto
          </Link>
        </nav> */}
        <div className="flex gap-2">
          <button className="rounded-full bg-[#004851] hover:bg-[#003840] text-white py-1 px-2  md:text-md text-sm">
            <Link to="/demo-servicio">Vista previa del servicio</Link>
          </button>
          {/* <button className="rounded-full bg-[#004851] hover:bg-[#003840] text-white py-1 px-2  md:text-md text-sm">
            Agenda una demo
          </button> */}
        </div>
      </div>
    </header>
  );
};
