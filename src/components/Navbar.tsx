
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
      <a href="#home" className="text-xl font-bold" style={{ background: 'linear-gradient(90deg, #8a4af3, #ffffff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',  animationDelay: '400ms', fontFamily: "'Orbitron', sans-serif"  }}>
  YUV<span style={{ background: 'linear-gradient(90deg, #8a4af3, #ffffff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', animationDelay: '400ms', fontFamily: "'Orbitron', sans-serif"  }}>RAJ</span>
</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 " style={{ animationDelay: '400ms', fontFamily: "'Orbitron', sans-serif" }}>
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-white/10 py-4 md:hidden">
            <nav className="flex flex-col space-y-4 container">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
