import React from 'react';

interface SectionHeadingProps {
  number: string;
  title: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ number, title }) => {
  return (
    <div className="flex items-center gap-4 mb-16">
      <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
        {number} / {title}
      </h2>
      <div className="h-px bg-slate-200 flex-grow"></div>
    </div>
  );
};