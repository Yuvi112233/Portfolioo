
import React from 'react';
import { Send } from 'lucide-react';
import SocialLinks from './SocialLinks';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background gradient elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[150px] -z-10"></div>
      
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center opacity-0 animate-fade-in">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        
        <p className="text-white/70 text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
          I'm currently open to new opportunities and collaborations.
          Feel free to reach out if you have a project in mind or just want to connect!
        </p>
        
        <div className="max-w-3xl mx-auto glass-card rounded-xl p-8 md:p-10 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-white/80">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white/80">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-white"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-white/80">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-white"
                placeholder="Subject"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-white/80">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-white resize-none"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
          
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2 text-white">Let's connect</h3>
                <p className="text-white/70">Reach out through social media or email</p>
              </div>
              
              <SocialLinks />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-20 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <h3 className="text-3xl font-bold mb-6 text-white">
            Let's build something <span className="text-gradient">amazing</span> together!
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
