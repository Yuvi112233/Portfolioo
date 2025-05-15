
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#home" className="text-xl font-bold text-gradient">DEV<span className="text-white">PORTFOLIO</span></a>
            <p className="text-white/60 text-sm mt-2">Building digital experiences that matter</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <SocialLinks />
            <p className="text-white/60 text-sm">© {currentYear} Yuvraj. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
