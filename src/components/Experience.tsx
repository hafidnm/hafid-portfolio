import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Riwayat Karir</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Pengalaman Kerja & Proyek
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Perjalanan profesional saya dalam mengembangkan antarmuka web modern.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
          {experiences.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors"></div>

              {/* Card */}
              <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-cyan-500/30 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/60 pb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-indigo-400 flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-4 h-4" />
                      <span>{item.company}</span>
                    </p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 text-slate-400 flex items-center gap-1.5 border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </span>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-cyan-400 font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
