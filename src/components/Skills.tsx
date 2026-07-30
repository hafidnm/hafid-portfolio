import React, { useState } from 'react';
import { Wrench, CheckCircle2 } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  description: string;
  badgeColor: string;
  borderColor: string;
  svg: React.ReactNode;
}

const techStack: TechItem[] = [
  {
    name: 'Laravel',
    category: 'Backend',
    description: 'PHP Web Framework',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    borderColor: 'hover:border-red-500/50 hover:shadow-red-500/10',
    svg: (
      <svg className="w-8 h-8 text-red-500 fill-current" viewBox="0 0 24 24">
        <path d="M23.64 12.27c-.07-.47-.44-.82-.91-.84l-2.07-.07-2.61-4.52a.96.96 0 0 0-1.12-.44l-2.52.84-2.22-3.85a.96.96 0 0 0-1.16-.44L8.5 3.82 3.65 1.02a.96.96 0 0 0-1.39.46L.09 5.86a.96.96 0 0 0 .34 1.25l4.85 2.8-1.57 2.72a.96.96 0 0 0 .15 1.18l3.6 4.15-1.07 1.85a.96.96 0 0 0 .34 1.25l4.85 2.8a.96.96 0 0 0 1.29-.35l2.25-3.89 4.31 1.44c.45.15.94-.06 1.15-.47l2.84-5.59c.2-.39.15-.87-.14-1.2l-1.92-2.18 1.9-3.76z" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    category: 'Backend',
    description: 'Full-Stack & SSR Framework',
    badgeColor: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
    borderColor: 'hover:border-slate-300/50 hover:shadow-slate-300/10',
    svg: (
      <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
        <path d="M18.665 21.978C16.758 23.28 14.467 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 3.125-1.192 5.972-3.15 8.117l-9.066-11.758H9.375V16.5h1.875v-6.059l7.415 9.537zm-1.89-14.478h1.875v6.75h-1.875v-6.75z" />
      </svg>
    ),
  },
  {
    name: 'React',
    category: 'Frontend',
    description: 'UI Library',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    borderColor: 'hover:border-cyan-400/50 hover:shadow-cyan-400/10',
    svg: (
      <svg className="w-8 h-8 text-cyan-400 fill-current animate-pulse" viewBox="0 0 24 24">
        <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0-7C6.477 0 2 4.477 2 10c0 2.136.67 4.116 1.81 5.74L.29 19.25a1 1 0 0 0 1.42 1.42l3.51-3.53C6.884 18.33 8.864 19 11 19c5.523 0 10-4.477 10-10S16.523 0 11 0zm0 17c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
      </svg>
    ),
  },
  {
    name: 'Vue.js',
    category: 'Frontend',
    description: 'Progressive Framework',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    borderColor: 'hover:border-emerald-400/50 hover:shadow-emerald-400/10',
    svg: (
      <svg className="w-8 h-8 text-emerald-400 fill-current" viewBox="0 0 24 24">
        <path d="M2 3h3.2L12 15 18.8 3H22L12 21 2 3zm4.5 0h3L12 7.5 14.5 3h3L12 12.5 6.5 3z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    description: 'Typed JavaScript',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    borderColor: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
    svg: (
      <svg className="w-8 h-8 text-blue-500 fill-current" viewBox="0 0 24 24">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-1.285-.563 5.48 5.48 0 0 0-1.428-.182c-.672 0-1.18.136-1.523.407-.343.272-.515.658-.515 1.16 0 .39.117.705.352.946.235.241.564.444.988.608l1.171.439c.928.348 1.616.793 2.062 1.336.446.543.669 1.25.669 2.122 0 1.293-.464 2.302-1.393 3.027-.929.725-2.27 1.088-4.025 1.088-.823 0-1.631-.082-2.424-.246a11.134 11.134 0 0 1-2.072-.676v-2.61a7.485 7.485 0 0 0 2.1.848c.78.188 1.503.282 2.169.282.724 0 1.272-.143 1.644-.43.372-.286.558-.702.558-1.248 0-.422-.128-.763-.383-1.023-.255-.26-.619-.481-1.092-.664l-1.144-.439c-.933-.357-1.618-.809-2.055-1.356-.437-.547-.655-1.246-.655-2.097 0-1.218.455-2.183 1.365-2.895.91-.712 2.188-1.068 3.834-1.068zm-8.349.195v2.263H7.553V22.5H4.558V12.208H1.977V9.945h8.162z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    description: 'Utility-First Styling',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    borderColor: 'hover:border-cyan-400/50 hover:shadow-cyan-400/10',
    svg: (
      <svg className="w-8 h-8 text-cyan-400 fill-current" viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'shadcn/ui',
    category: 'Frontend',
    description: 'Re-usable Components',
    badgeColor: 'bg-slate-500/10 text-slate-200 border-slate-500/20',
    borderColor: 'hover:border-slate-300/50 hover:shadow-slate-300/10',
    svg: (
      <svg className="w-8 h-8 text-slate-100 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
        <path d="M4 4h16v16H4z" />
        <path d="M4 12h16" />
        <path d="M12 4v16" />
      </svg>
    ),
  },
  {
    name: 'Material UI',
    category: 'Frontend',
    description: 'MUI React Components',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    borderColor: 'hover:border-blue-400/50 hover:shadow-blue-400/10',
    svg: (
      <svg className="w-8 h-8 text-blue-500 fill-current" viewBox="0 0 24 24">
        <path d="M0 2.472v19.056l6 3.472V5.944l6-3.472v19.056l6 3.472V5.944l6-3.472V.001L18 3.473V.001L12 3.473V.001L0 2.472z" />
      </svg>
    ),
  },
  {
    name: 'Recharts',
    category: 'Frontend',
    description: 'Data Visualization',
    badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    borderColor: 'hover:border-teal-400/50 hover:shadow-teal-400/10',
    svg: (
      <svg className="w-8 h-8 text-teal-400 fill-current" viewBox="0 0 24 24">
        <path d="M3 13h2v8H3zm4-8h2v16H7zm4 4h2v12h-2zm4-6h2v18h-2zm4 10h2v8h-2z" />
      </svg>
    ),
  },
  {
    name: 'Zod',
    category: 'Tools',
    description: 'Schema Validation',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    borderColor: 'hover:border-indigo-400/50 hover:shadow-indigo-400/10',
    svg: (
      <svg className="w-8 h-8 text-indigo-400 fill-current" viewBox="0 0 24 24">
        <path d="M3 3h18v4L9.5 17H21v4H3v-4l11.5-10H3V3z" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    description: 'Relational Database',
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    borderColor: 'hover:border-sky-400/50 hover:shadow-sky-400/10',
    svg: (
      <svg className="w-8 h-8 text-sky-400 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm.15 4.39c1.95 0 3.73.66 5.15 1.77l-1.39 1.39a6.04 6.04 0 0 0-3.76-1.28c-3.37 0-6.1 2.73-6.1 6.1s2.73 6.1 6.1 6.1c2.78 0 5.11-1.86 5.86-4.4h-5.86v-1.92h8.04c.09.43.14.88.14 1.34 0 4.54-3.68 8.22-8.22 8.22-4.54 0-8.22-3.68-8.22-8.22s3.68-8.22 8.26-8.22z" />
      </svg>
    ),
  },
  {
    name: 'MySQL',
    category: 'Database',
    description: 'Relational Database',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    borderColor: 'hover:border-amber-400/50 hover:shadow-amber-400/10',
    svg: (
      <svg className="w-8 h-8 text-amber-500 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5h-2v-5h2v5zm0-7h-2V7h2v2.5z" />
      </svg>
    ),
  },
  {
    name: 'Prisma',
    category: 'Database',
    description: 'Next-Gen ORM',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    borderColor: 'hover:border-emerald-400/50 hover:shadow-emerald-400/10',
    svg: (
      <svg className="w-8 h-8 text-teal-400 fill-current" viewBox="0 0 24 24">
        <path d="M22.5 17.5L13.2 2.1c-.5-.8-1.7-.8-2.2 0L1.7 17.5c-.5.8.1 1.9 1.1 1.9h18.6c1 0 1.6-1.1 1.1-1.9zm-10.5-12l7.3 12.1H5.2L12 5.5z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    category: 'Tools',
    description: 'Version Control',
    badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    borderColor: 'hover:border-purple-400/50 hover:shadow-purple-400/10',
    svg: (
      <svg className="w-8 h-8 text-slate-200 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    description: 'ES6+ Core',
    badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    borderColor: 'hover:border-yellow-400/50 hover:shadow-yellow-400/10',
    svg: (
      <svg className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 3h18v18H3V3zm15.562 14.756c.773 0 1.344-.225 1.674-.666.331-.44.496-1.077.496-1.91 0-.74-.149-1.314-.447-1.722-.298-.409-.81-.796-1.537-1.162l-.76-.381c-.559-.281-.94-.539-1.144-.774-.204-.234-.306-.525-.306-.873 0-.393.14-.707.42-.942.28-.235.687-.353 1.221-.353.488 0 .937.104 1.347.311.41.208.762.502 1.056.883l1.528-1.597c-.476-.64-1.078-1.109-1.806-1.408-.728-.299-1.554-.448-2.478-.448-1.157 0-2.091.309-2.802.927-.711.618-1.066 1.442-1.066 2.472 0 .762.164 1.37.492 1.823.328.453.864.871 1.608 1.254l.758.375c.618.31.1.036.602 1.261.884-.226.359-.339.81-.339 1.353 0 .438-.158.783-.474 1.035-.316.252-.77.378-1.362.378-.636 0-1.218-.142-1.746-.426a4.47 4.47 0 0 1-1.393-1.163l-1.597 1.488c.57.818 1.332 1.432 2.286 1.842.954.41 2.05.615 3.288.615zm-7.632-.128V9.75h-2.435v7.262c0 .878-.182 1.517-.546 1.917-.364.4-.925.6-1.683.6-.477 0-.917-.074-1.32-.222a3.834 3.834 0 0 1-1.122-.647l-1.15 1.748c.51.442 1.13.784 1.86 1.026.73.242 1.517.363 2.36.363 1.637 0 2.871-.433 3.702-1.299.831-.866 1.246-2.146 1.246-3.84z" />
      </svg>
    ),
  },
  {
    name: 'REST API',
    category: 'Backend',
    description: 'Web Services',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    borderColor: 'hover:border-indigo-400/50 hover:shadow-indigo-400/10',
    svg: (
      <svg className="w-8 h-8 text-indigo-400 fill-current" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
];

const categories = ['Semua', 'Frontend', 'Backend', 'Database', 'Tools'] as const;

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const filteredTech = activeCategory === 'Semua'
    ? techStack
    : techStack.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Wrench className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Teknologi & Tools Utama
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Perangkat lunak dan ekosistem modern yang saya kuasai untuk membangun aplikasi web cepat, scalable, dan maintainable.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className={`glass-card p-5 rounded-2xl border border-slate-800/80 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col items-center text-center justify-between cursor-pointer ${tech.borderColor}`}
            >
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800/80 group-hover:scale-110 transition-transform duration-300 mb-3 shadow-inner flex items-center justify-center">
                {tech.svg}
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                  {tech.description}
                </p>
              </div>

              <div className="mt-4 w-full">
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${tech.badgeColor}`}>
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 glass-card p-4 rounded-2xl border border-slate-800/60 max-w-xl mx-auto flex items-center justify-center gap-3 text-xs text-slate-400">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Siap diimplementasikan dalam arsitektur Full-Stack modern</span>
        </div>

      </div>
    </section>
  );
};
