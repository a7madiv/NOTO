import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import SpeechToTextApp from "../components/SpeechToTextApp";
import About from "../components/About";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <SpeechToTextApp />
      <About />
      <Team />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}