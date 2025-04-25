import React from "react";
import { Banner } from "../components/Banner";
import { Services } from "../components/Services";
import { Benefits } from "../components/Benefits";
import { Integration } from "../components/Integration";
import { Pricing } from "../components/Pricing";
import { CTASection } from "../components/CTASection";

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <Banner />
        {/* Services Section */}
        <Services />

        {/* Benefits Section */}
        <Benefits />

        {/* Pricing Section */}
        <Pricing />
        {/* Integration Section */}
        <Integration />
        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
};
