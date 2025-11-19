import React from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-200 py-12 border-t border-slate-300 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center gap-8 mb-8">
          {SOCIAL_LINKS.map((link) => (
             <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary transition-colors text-lg font-medium"
              >
                {link.name}
              </a>
          ))}
        </div>

        <div className="text-slate-500 text-sm">
          <p>Designed & Built by {PERSONAL_INFO.name}</p>
          <p className="mt-2">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};