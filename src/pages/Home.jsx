import { Navbar } from "../components/navbar/Navbar";
import { ThemeToggle } from "../components/toggle/ThemeToggle";
import { StarBackground } from "@/components/stars/StarBackground";
import { HeroSection } from "../components/hero/HeroSection";
import { AboutSection } from "../components/about/AboutSection";
import { SkillsSection } from "../components/skill/SkillsSection";
import { ProjectsSection } from "../components/project/ProjectsSection";
import { ContactSection } from "../components/contact/ContactSection";
import { Footer } from "../components/footer/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
