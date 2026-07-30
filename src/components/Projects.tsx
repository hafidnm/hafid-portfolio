import React, { useState } from 'react';
import { ExternalLink, Github, Layers, X, Info } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Project } from '../types/portfolio';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { key: 'all', label: 'Semua Proyek' },
    { key: 'landing-page', label: 'Landing Page' },
    { key: 'web-app', label: 'Web App' },
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'ui-ux', label: 'UI / UX' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative bg-slate-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Portofolio Karya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Proyek Pilihan
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Beberapa hasil karya aplikasi web dan landing page yang telah dibangun.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                activeCategory === cat.key
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'glass-card text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                {/* Thumbnail Image Container */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 rounded-full bg-slate-900/90 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-colors shadow-lg"
                      title="Lihat Detail"
                    >
                      <Info className="w-5 h-5" />
                    </button>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-full bg-slate-900/90 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-colors shadow-lg"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {project.featured && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-md">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags & Action Footer */}
              <div className="px-6 pb-6 pt-2 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 text-xs">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1 text-cyan-400 font-semibold hover:underline"
                  >
                    Detail Proyek
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="glass-card max-w-2xl w-full rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video relative overflow-hidden bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-100">{selectedProject.title}</h3>
                <span className="text-xs uppercase font-mono px-3 py-1 rounded-full bg-slate-800 text-cyan-400">
                  {selectedProject.category}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Teknologi Digunakan:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 text-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Kunjungi Live Demo</span>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
