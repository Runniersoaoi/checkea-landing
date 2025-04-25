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
import AppRouter from "./AppRouter";

export const App = () => {
  return <AppRouter />;
};
