import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";
import { Pricing } from "./components/Pricing";
import { Integration } from "./components/Integration";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Header />
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

      {/* Footer */}
      <Footer />
    </div>
  );
};
