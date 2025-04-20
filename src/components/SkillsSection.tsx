
import React from 'react';
import SkillPill from './SkillPill';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SCSS', 'Redux', 'Next.js'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'Laravel', 'GraphQL', 'REST APIs'],
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Prisma'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Figma', 'Jira'],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      {/* Background gradient elements */}
      <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center opacity-0 animate-fade-in">
          <span className="text-gradient">Technical Skills</span>
        </h2>
        
        <p className="text-white/70 text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
          I've worked with a variety of technologies and tools throughout my career.
          Here's a snapshot of my technical expertise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-card p-6 rounded-xl opacity-0 animate-fade-in"
              style={{ animationDelay: `${200 + (categoryIndex * 100)}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillPill 
                    key={skill}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
