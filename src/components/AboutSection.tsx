
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background gradient elements */}
      <div className="absolute top-1/2 left-1/4 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/5 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-white/10">
                <img 
                  src="\profile-new.jpg" 
                  alt="Developer portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-secondary"></div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <span className="text-gradient">About Me</span>
            </h2>
            
            <div className="space-y-4 text-white/80">
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
                I'm a passionate full-stack developer with a focus on creating beautiful, performant, and accessible web applications. With over 2 years of experience in the industry, I've worked on a diverse range of projects from small business websites to large-scale enterprise applications.
              </p>
              
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
                My journey in web development began when I built my first website as a teenager. What started as a hobby quickly evolved into a career as I discovered my passion for turning complex problems into elegant solutions.
              </p>
              
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '500ms' }}>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community events. I believe in continuous learning and always strive to improve my skills.
              </p>
            </div>
            
            <div className="mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <h3 className="text-xl font-semibold mb-4 text-white">My Journey</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                  <div>
                    <h4 className="font-medium text-primary"> Present</h4>
                    <p className="text-white/70">FreeLancer</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-1 bg-gradient-to-b from-secondary to-primary/50 rounded-full"></div>
                  <div>
                    <h4 className="font-medium text-primary">2024-2025</h4>
                    <p className="text-white/70">Frontend Developer Intern at Digi-Verse Technologies</p>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
