import React from "react";

export const CTASection = () => {
  return (
    <section className="bg-[#004851] text-white py-16 px-4 md:px-8 font-montserrat">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          From Idea to Production in Days
        </h2>
        <p className="text-sm opacity-80 mb-8">
          Implement your production line with our streamlined process. Our
          experts will guide you through every step of the way.
        </p>
        <button className="bg-white text-[#004851] hover:bg-gray-100 rounded-full py-2 px-6">
          More Details
        </button>
      </div>
    </section>
  );
};
