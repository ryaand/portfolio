import AboutSection from "@/Components/AboutSection";
import ArchivedSection from "@/Components/ArchivedSection";
import ContactSection from "@/Components/ContactSection";
import HeroSection from "@/Components/HeroSection";
import ProjectSection from "@/Components/ProjectSection";
import SkillsSection from "@/Components/SkillsSection";

export default function Home() {
  return (
    <section className="overflow-x-hidden">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ProjectSection></ProjectSection>
      <ArchivedSection></ArchivedSection>
      <ContactSection></ContactSection>
    </section>
  );
}
