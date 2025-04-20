
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  liveUrl,
  githubUrl,
  delay = 0,
}) => {
  return (
    <div 
      className={cn(
        "relative group glass-card rounded-lg overflow-hidden transition-all duration-500",
        "opacity-0 translate-y-4", 
        "animate-fade-in", 
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 group-hover:opacity-90 transition-opacity z-10"></div>
      
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform transition-transform duration-300">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary/90">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-primary transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-primary transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
