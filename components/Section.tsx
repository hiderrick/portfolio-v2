import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
      {title && (
        <div className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="text-primary">{`//`}</span> {title}
          </h2>
          {subtitle && <p className="text-slate-500 text-lg max-w-2xl">{subtitle}</p>}
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded mt-4"></div>
        </div>
      )}
      {children}
    </section>
  );
};