"use client"

import AboutSection from "@/Components/AboutSection";
import ArchivedSection from "@/Components/ArchivedSection";
import ContactSection from "@/Components/ContactSection";
import HeroSection from "@/Components/HeroSection";
import ProjectSection from "@/Components/ProjectSection";
import SkillsSection from "@/Components/SkillsSection";
import Footer from "@/Components/Utilities/Footer";
import { useState } from "react";

export default function Home() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="overflow-x-hidden">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ProjectSection></ProjectSection>
      <ArchivedSection></ArchivedSection>
      <Footer></Footer>
    </section>
  );
}
