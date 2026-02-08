import React from 'react';
import { Icon } from './ui/Icon';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-50 border-t border-slate-200 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block p-4 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
          <Icon name="hub" className="text-3xl text-slate-400" />
        </div>

        <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-12 leading-tight">
          Ready to collaborate on the <br /> <span className="font-medium">next frontier of AI?</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
          <a
            href="https://linkedin.com/in/muhammad-fakhar3534"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-all group shadow-sm hover:shadow-md"
          >
            <span className="font-mono text-xs uppercase tracking-widest">
              LinkedIn
            </span>
            <span className="material-symbols-outlined text-sm opacity-50 group-hover:opacity-100 transform group-hover:-translate-y-0.5 transition-transform">
              arrow_outward
            </span>
          </a>

          <a
            href="https://github.com/fakhar-iqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-all group shadow-sm hover:shadow-md"
          >
            <span className="font-mono text-xs uppercase tracking-widest">
              GitHub
            </span>
            <span className="material-symbols-outlined text-sm opacity-50 group-hover:opacity-100 transform group-hover:-translate-y-0.5 transition-transform">
              code
            </span>
          </a>

          <a
            href="mailto:fakhareiqbal3534@gmail.com"
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 border border-slate-900 text-white hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
          >
            <span className="font-mono text-xs uppercase tracking-widest">
              fakhareiqbal3534@gmail.com
            </span>
          </a>
        </div>

        <div className="text-slate-500 font-mono text-sm mb-8">
          +92 305 964 3544
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-slate-400 uppercase tracking-widest gap-4">
          <span>© 2026 Muhammad Fakhar.</span>
          <span>All Systems Nominal</span>
        </div>
      </div>
    </footer>
  );
};