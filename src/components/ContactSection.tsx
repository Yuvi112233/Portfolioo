import React, { useRef, useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import SocialLinks from './SocialLinks';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    // Validate environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError('There was an issue with the email service configuration. Please contact support or try again later.');
      setIsLoading(false);
      console.error('Missing environment variables:', {
        VITE_EMAILJS_SERVICE_ID: serviceId,
        VITE_EMAILJS_TEMPLATE_ID: templateId,
        VITE_EMAILJS_PUBLIC_KEY: publicKey,
      });
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, publicKey)
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
            setSuccess("Your message has been sent successfully. I'll get back to you soon!");
            form.current?.reset();
          },
          (error) => {
            console.error('EmailJS error:', error);
            setError('There was an issue sending your message: ' + (error.text || 'An unexpected error occurred. Please try again later.'));
          }
        )
        .finally(() => setIsLoading(false));
    } else {
      setError('There was an issue processing your request. Please refresh the page and try again.');
      setIsLoading(false);
    }
  };

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
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-white/80">Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white/80">Email</label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-white"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-white/80">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-white"
                placeholder="Subject"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-white/80">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-white resize-none"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
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