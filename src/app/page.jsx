import AboutSection from "@/views/home/aboutSection";
import ArchivedSection from "@/views/home/archivedSection";
import ContactSection from "@/views/home/contactSection";
import HeroSection from "@/views/home/heroSection";
import ProjectSection from "@/views/home/projectSection";
import SkillsSection from "@/views/home/skillSection";

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
