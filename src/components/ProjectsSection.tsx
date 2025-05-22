
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment processing, inventory management, and an intuitive admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=1470',
      liveUrl: 'https://ecommerce-mern-stack-1-p1mu.onrender.com/admin/dashboard',
      githubUrl: 'https://github.com/Yuvi112233/ECOMMERCE-MERN-STACK',
    },
    {
      title: 'Ai-Healtcare App',
      description: 'Ai-powered mental & physical health assistant for personalized diagnosis using NLP and mediacl intelligence  ',
      technologies: ['Html,Css,Javascript', 'Flask', 'React', 'Python'],
      image: "/test.png",
      liveUrl: 'https://healthbox-pbn4.onrender.com/',
      githubUrl: 'https://github.com/Yuvi112233/Ai-Healthcare',
    },
    {
      title: 'Gen-Ai Finance',
      description: 'Gen-AI Finance: AI-powered assistant tracks income, boosts savings, and suggests smart strategies. Emails detailed financial reports, empowering you with insights for effective budgeting and goal achievement',
      technologies: ['React', 'Flask', 'Tailwind','Python','FastApi'],
      image: '/test2.png',
      liveUrl: 'https://gen-ai-finance-front-end.onrender.com/',
      githubUrl: 'https://github.com/Yuvi112233/Gen-Ai-Finance',
    },
    {
      title: 'Job-portal',
      description: 'A job portal platform that connects job seekers with employers, offering real-time listings and career insights through intuitive dashboards.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Cloudinary','Tailwind'],
      image: '/test3.png',
      liveUrl: 'https://job-portal-frontend-wzap.onrender.com',
      githubUrl: 'https://github.com/Yuvi112233/Job-portal',
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      {/* Background gradient elements */}
      <div className="absolute bottom-0 left-1/3 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[150px] -z-10"></div>
      
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center opacity-0 animate-fade-in">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        
        <p className="text-white/70 text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
          Here are some of my recent projects that showcase my skills and expertise in web development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
              delay={200 + (index * 100)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-transparent border border-white/20 hover:border-primary/50 text-white hover:text-primary font-medium rounded-lg transition-all hover:bg-primary/5"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
