import React from 'react';
import { Section } from './Section';
import { EDUCATION, AWARDS, EXTRACURRICULARS } from '../constants';
import { Trophy, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" subtitle="My academic journey and involvement.">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="prose max-w-none">
            <p className="text-slate-600 text-lg leading-relaxed">
              I am currently pursuing a Bachelor of Science in Computer Science at the <strong className="text-slate-900">Georgia Institute of Technology</strong>, expecting to graduate in May 2027.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mt-4">
              My passion lies in building software that solves real-world problems. I enjoy working across the stack, from designing efficient database schemas to crafting intuitive user interfaces.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0 p-1 bg-white rounded-lg flex items-center justify-center">
                <img src="georgia-tech-logo.png" alt="Georgia Tech" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{EDUCATION.school}</h3>
                <p className="text-slate-600">{EDUCATION.degree}</p>
                <div className="flex justify-between items-center mt-2 text-sm">
                  <span className="text-slate-500">{EDUCATION.graduation}</span>
                  <span className="px-2 py-1 bg-slate-100 rounded text-slate-700 font-medium">GPA: {EDUCATION.gpa}</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold text-slate-700 mb-2">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                {EDUCATION.coursework.map(course => (
                  <span key={course} className="text-xs px-2 py-1 bg-slate-50 text-primary rounded border border-slate-200">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-600" /> Awards & Honors
            </h3>
            <div className="space-y-4">
                {AWARDS.map((award, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border-l-4 border-yellow-500 shadow-sm">
                        <h4 className="font-bold text-slate-900">{award.title}</h4>
                        {award.description && <p className="text-sm text-slate-600 mt-1">{award.description}</p>}
                    </div>
                ))}
            </div>

            <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2 mt-8">
                <Users className="w-5 h-5 text-secondary" /> Involvement
            </h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXTRACURRICULARS.map((item, idx) => (
                    <div key={idx} className="px-4 py-3 bg-white rounded-lg border border-slate-200 text-slate-700 text-sm shadow-sm hover:border-secondary/50 transition-colors">
                        {item}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </Section>
  );
};