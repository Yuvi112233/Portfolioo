
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SplashCursor from '@/components/SplashCursor';

const Index = () => {
  useEffect(() => {
    document.title = 'Yuvraj | Full-Stack Developer';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SplashCursor 
        SPLAT_RADIUS={0.4}
        SPLAT_FORCE={4000}
        COLOR_UPDATE_SPEED={5}
        DENSITY_DISSIPATION={2.5}
        VELOCITY_DISSIPATION={1.5}
        CURL={4}
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
