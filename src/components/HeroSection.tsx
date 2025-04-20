// src/components/HeroSection.tsx
import { ArrowDown } from 'lucide-react';
import SocialLinks from './SocialLinks';
import AnimatedText from './AnimatedText';

const HeroSection = () => {
  return (
    <>
      <section 
        id="home" 
        className="relative min-h-screen flex flex-col justify-center pt-20 text-center"
      >
        {/* Background gradient elements */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '300ms', fontFamily: "'Orbitron', sans-serif" }}>
              <span className="block text-white">Hi, I'm </span>
              <span style={{ background: 'linear-gradient(90deg, #8a4af3, #ffffff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>YUV<span style={{ background: 'linear-gradient(90deg, #8a4af3, #ffffff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>RAJ</span></span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-medium mb-8 text-white/90 opacity-0 animate-fade-in" style={{ animationDelay: '400ms', fontFamily: "'Orbitron', sans-serif" }}>
              Full-stack Developer & UI Designer
            </h2>
            
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in">
              I craft elegant digital experiences with modern technologies. Passionate
              about building user-centric applications that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors" style={{ animationDelay: '400ms', fontFamily: "'Orbitron', sans-serif" }}
              >
                View My Work
              </a>
              
              <a 
                href="#contact" 
                className="px-8 py-3 bg-transparent border border-white/20 hover:border-primary/50 text-white hover:text-primary font-medium rounded-lg transition-all hover:bg-primary/5"
                style={{ animationDelay: '400ms', fontFamily: "'Orbitron', sans-serif" }} >
                Contact Me
              </a>
            </div>
            
            <SocialLinks className="flex justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '700ms' }} />
          </div>
        </div>
        
        <div className="overflow-hidden whitespace-nowrap border border-white/10 mt-10 pt-4 pb-4 text-center" style={{ animationDelay: '400ms', fontFamily: "'Orbitron', sans-serif" }} >
          <div className="inline-block animate-marquee text-white text-lg">
            <span className="mx-2">🔷 FULL STACK DEVELOPER</span>
            <span className="mx-2">🔷 AI ENGINEER</span>
            <span className="mx-2">🔷 MACHINE LEARNING</span>
            <span className="mx-2">🔷 BACKEND DEVELOPER</span>
            <span className="mx-2">🔷 DATA SCIENCE</span>
            <span className="mx-2">🔷 UI/UX Designer</span>
            <span className="mx-2">🔷 SOFTWARE DEVELOPER</span>
            {/* Repeat for seamless loop */}
            <span className="mx-2">🔷 FULL STACK DEVELOPER</span>
            <span className="mx-2">🔷 AI ENGINEER</span>
            <span className="mx-2">🔷 MACHINE LEARNING</span>
            <span className="mx-2">🔷 BACKEND DEVELOPER</span>
            <span className="mx-2">🔷 DATA SCIENCE</span>
            <span className="mx-2">🔷 UI/UX Designer</span>
            <span className="mx-2">🔷 SOFTWARE DEVELOPER</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;