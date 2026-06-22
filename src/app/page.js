"use client"

import AboutSection from "@/Components/AboutSection";
import HeroSection from "@/Components/HeroSection";

export default function Home() {
  return (
    <section className="h-2000 overflow-x-hidden">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
    </section>
  );
}
