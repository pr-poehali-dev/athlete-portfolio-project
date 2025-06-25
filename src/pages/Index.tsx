import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Training from "@/components/Training";
import Results from "@/components/Results";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Training />
      <Results />
    </div>
  );
};

export default Index;
