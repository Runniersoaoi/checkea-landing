import React from "react";

export const Banner = () => {
  return (
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
  );
};
