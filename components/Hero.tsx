import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Headshot Image */}
        <div className="flex justify-center mb-8 opacity-0 animate-fade-in-up">
          <div className="relative w-32 h-32 md:w-40 md:h-40 animate-float">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl transform translate-y-2"></div>
            <img 
              src="/FloatingHead.png" 
              alt="Derrick Chen" 
              className="relative w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm md:text-base opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {PERSONAL_INFO.name}.
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-500 mb-8 leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          I like to build things that sometimes works on the first try
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.name === 'GitHub' ? Github : link.name === 'LinkedIn' ? Linkedin : Mail;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-slate-300 text-slate-500 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
                aria-label={link.name}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>

        <div className="flex justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <a 
                href="#experience"
                className="px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary/5 rounded-lg font-semibold transition-all duration-300"
            >
                Check out my work
            </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-400 hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};