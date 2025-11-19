import React from 'react';
import { Section } from './Section';
import { EXPERIENCE } from '../constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" subtitle="My professional background and internships.">
      <div className="relative border-l border-slate-200 ml-3 md:ml-6 space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] md:-left-[7px] top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white border-2 border-primary group-hover:bg-primary transition-colors shadow-[0_0_0_4px_rgba(255,255,255,1)]"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-lg font-medium text-slate-600 mt-1">
                  {exp.company}
                </h4>
              </div>
              <div className="mt-2 sm:mt-0 flex flex-col sm:items-end text-sm text-slate-500">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {exp.date}</span>
                <span className="flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
              </div>
            </div>

            <ul className="space-y-3 text-slate-600 mb-6 list-disc ml-4">
              {exp.description.map((desc, i) => (
                <li key={i} className="leading-relaxed">{desc}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};