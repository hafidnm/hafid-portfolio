import React from 'react';
import {
  Code2,
  FileCode,
  Cpu,
  Layout,
  Palette,
  Zap,
  Layers,
  Sparkles,
  GitBranch,
  Globe,
  Network,
  Figma,
  Wrench,
  Database,
  Server
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Helper icon resolver
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Code2,
  FileCode,
  Cpu,
  Layout,
  Palette,
  Zap,
  Layers,
  Sparkles,
  GitBranch,
  Globe,
  Network,
  Figma,
  Database,
  Server
};

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Wrench className="w-3.5 h-3.5" />
            <span>Keahlian Teknis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Tech Stack & Alat Kerja
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Teknologi modern yang saya gunakan sehari-hari untuk membangun aplikasi web.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={catIdx}
              className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-200 mb-6 pb-3 border-b border-slate-800/80 flex items-center justify-between">
                  <span>{cat.name}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                    {cat.skills.length} skills
                  </span>
                </h3>

                <div className="space-y-4">
                  {cat.skills.map((skill, skillIdx) => {
                    const IconComponent = iconMap[skill.iconName] || Code2;
                    return (
                      <div
                        key={skillIdx}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/50 hover:border-cyan-500/30 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-semibold text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-cyan-400 font-medium border border-slate-700/50">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Tagline */}
              <div className="pt-4 border-t border-slate-800/50 text-[11px] text-slate-500 text-center">
                ✓ Siap diintegrasikan ke dalam proyek Anda
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
