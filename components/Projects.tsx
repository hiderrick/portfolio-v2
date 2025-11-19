import React from 'react';
import { Section } from './Section';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects" subtitle="Some things I've built.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
          >
            <div className="relative overflow-hidden h-48">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex gap-3">
                  {/* Mock links since PDF didn't have all specific repo links, defaulting to general link if available */}
                  <a href={project.link} className="text-slate-400 hover:text-white transition-colors" aria-label="External Link">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="space-y-2 mb-6 flex-grow">
                {project.description.map((desc, i) => (
                   <p key={i} className="text-slate-400 text-sm leading-relaxed">
                     {desc.length > 100 ? desc.substring(0, 100) + '...' : desc}
                   </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs text-slate-300 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};