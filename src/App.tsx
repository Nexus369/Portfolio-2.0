import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import { HeroSection } from "./components/sections/HeroSection";
import { MarqueeSection } from "./components/sections/MarqueeSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Preloader } from "./components/ui/Preloader";
import { SmoothScroll } from "./components/ui/SmoothScroll";
import { ThemeToggle } from "./components/ui/ThemeToggle";
import { CustomCursor } from "./components/ui/CustomCursor";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [loading]);

  return (
    <ThemeProvider>
      <CustomCursor />
      <SmoothScroll>
        <ThemeToggle />
        <AnimatePresence mode="wait">
          {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        <main className="overflow-x-clip bg-bg-primary min-h-screen transition-colors duration-500 text-text-primary">
          <HeroSection />
          <MarqueeSection />
          <AboutSection />
          <SkillsSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
