import BackgroundEffects from "@/components/shared/BackgroundEffects";
import Sidebar from "@/components/shared/Sidebar";
import HeroSection from "@/components/shared/HeroSection";
import AboutSection from "@/components/shared/AboutSection";
import TechStackSection from "@/components/shared/TechStackSection";
import ProjectsSection from "@/components/shared/ProjectsSection";
import ExperienceSection from "@/components/shared/ExperienceSection";
import EducationSection from "@/components/shared/EducationSection";
import ContactSection from "@/components/shared/ContactSection";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Sidebar />

      <main className="relative z-10 max-w-5xl mx-auto px-6 pb-32 md:pl-40 transition-all duration-300">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  );
}
