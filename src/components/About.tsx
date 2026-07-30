import React from 'react';
import { User, Award, CheckCircle2, HeartHandshake } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const corePrinciples = [
    {
      title: "Clean & Maintainable Code",
      desc: "Menulis kode TypeScript dan React yang rapi, terstruktur, serta bersandar pada komponen reusable.",
      icon: CheckCircle2,
    },
    {
      title: "User-Centric Design",
      desc: "Memastikan antarmuka tidak hanya bagus secara visual, tetapi juga nyaman dan mudah digunakan di semua perangkat.",
      icon: HeartHandshake,
    },
    {
      title: "High Performance",
      desc: "Mengoptimalkan ukuran bundle dan aset statis agar situs dimuat dalam waktu kurang dari 1 detik.",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <User className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Mengenal Lebih Dekat
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Menggabungkan keahlian teknik kode dengan rasa estetika antarmuka modern.
          </p>
        </div>

        {/* Content & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-200">
              Desain Menawan, Kode yang Andal.
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {personal.bio}
            </p>
            <p className="text-slate-400 leading-relaxed">
              Setiap baris kode yang ditulis bertujuan untuk menghadirkan pengalaman pengguna yang cepat, aksesibel, dan berkesan positif bagi audiens Anda.
            </p>
          </div>

          {/* Stats Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {personal.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-colors text-center group"
              >
                <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {corePrinciples.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/30 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-200">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
