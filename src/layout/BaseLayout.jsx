import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
