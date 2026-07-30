import React from 'react';
import { Layout, Code2, Zap, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Layout,
  Code2,
  Zap,
};

export const Services: React.FC = () => {
  const { services } = portfolioData;

  return (
    <section className="py-20 relative bg-slate-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Layanan Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Solusi Front-End yang Disediakan
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Membantu mengubah konsep desain menjadi situs web statis berkinerja tinggi.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Code2;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-2xl border border-slate-800 space-y-4 hover:border-cyan-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-slate-950" />
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
