import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, MapPin, Code2, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Glow Effects Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{personal.role}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Halo, Saya <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personal.tagline}
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{personal.location}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 group"
              >
                <span>Jelajahi Proyek</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl glass-card text-slate-200 font-semibold hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Hubungi Saya</span>
              </a>

              <a
                href={personal.cvUrl || "/cv.pdf"}
                download="CV_Hafid_Nur_Mahmudi.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 rounded-xl border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 hover:border-cyan-500/40 transition-colors text-sm font-medium flex items-center gap-2"
                title="Download Curriculum Vitae"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-center lg:justify-start gap-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Media Sosial:</span>
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-cyan-400 hover:bg-slate-900 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-cyan-400 hover:bg-slate-900 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personal.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-cyan-400 hover:bg-slate-900 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Graphic Visual Mockup Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Glass Window */}
              <div className="glass-card rounded-2xl p-6 shadow-2xl relative overflow-hidden border border-slate-800 animate-float">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    <span>developer.tsx</span>
                  </div>
                </div>

                {/* Code snippet representation */}
                <div className="font-mono text-xs space-y-2.5 leading-relaxed text-slate-300">
                  <p className="text-slate-500">// Front-End Developer Profile</p>
                  <p>
                    <span className="text-indigo-400">const</span> <span className="text-cyan-300">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span> <span className="text-emerald-300">'{personal.name}'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">skills:</span> [<span className="text-amber-300">'React'</span>, <span className="text-amber-300">'TypeScript'</span>, <span className="text-amber-300">'Tailwind'</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">focus:</span> <span className="text-emerald-300">'User Experience & Speed'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">status:</span> <span className="text-cyan-400">'Building Awesome Apps'</span>
                  </p>
                  <p>&#125;;</p>

                  <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">✓ Vercel Deployment</span>
                    <span className="text-emerald-400 font-semibold">100% Static Export</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-5 -left-4 glass-card px-4 py-2.5 rounded-xl flex items-center gap-2.5 shadow-lg border border-cyan-500/20">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-xs font-bold text-slate-200">Modern Stack</p>
                  <p className="text-[10px] text-slate-400">React + Vite + Tailwind</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
