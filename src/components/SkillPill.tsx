
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillPillProps {
  skill: string;
  index: number;
}

const SkillPill: React.FC<SkillPillProps> = ({ skill, index }) => {
  return (
    <div 
      className={cn(
        "px-4 py-2 rounded-full bg-muted text-white/90 text-sm font-medium",
        "transform hover:scale-105 hover:bg-primary/20 hover:text-primary transition-all duration-300",
        "opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: `${100 * index}ms` }}
    >
      {skill}
    </div>
  );
};

export default SkillPill;
