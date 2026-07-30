import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <p className="flex items-center gap-1 text-center sm:text-left">
          <span>© {new Date().getFullYear()} {portfolioData.personal.name}. Dibuat dengan</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>menggunakan React & Tailwind CSS.</span>
        </p>

        <div className="flex items-center gap-6">
          <span className="text-[11px] font-mono text-cyan-400/80 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
            Vercel Ready
          </span>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center gap-1"
            title="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline">Ke Atas</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
