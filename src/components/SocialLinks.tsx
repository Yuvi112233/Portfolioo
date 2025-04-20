
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  style?: React.CSSProperties;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '', style }) => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Yuvi112233', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/yuvraj-kaushik-a275a4253', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'yuvrajkaushik57@gmail.com', label: 'Email' },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`} style={style}>
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-white/70 hover:text-primary transition-colors p-2"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
