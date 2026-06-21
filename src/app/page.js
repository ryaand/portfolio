"use client"

import Image from "next/image";
import * as motion from "motion/react-client"
import HeroSection from "@/Components/HeroSection";
import { useEffect } from "react";

export default function Home() {
  return (
    <section className="h-2000 overflow-x-hidden">
      <HeroSection></HeroSection>
    </section>
  );
}
