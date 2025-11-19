import React from 'react';
import { Section } from './Section';
import { SKILLS } from '../constants';
import { Code2, Terminal, Database, AppWindow } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Languages')) return <Code2 className="w-6 h-6 text-secondary" />;
    if (category.includes('Frameworks')) return <AppWindow className="w-6 h-6 text-primary" />;
    if (category.includes('Database')) return <Database className="w-6 h-6 text-primary" />;
    return <Terminal className="w-6 h-6 text-slate-700" />; // Developer Tools
  };

  return (
    <Section id="skills" title="Technical Skills" subtitle="Technologies I work with.">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skillGroup, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-100 rounded-lg">
                {getIcon(skillGroup.category)}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{skillGroup.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-2 bg-slate-50 text-slate-700 rounded-md text-sm border border-slate-200 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
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