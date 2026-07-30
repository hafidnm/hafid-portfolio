import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, MessageSquare, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Mari Terhubung</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Hubungi Saya
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Punya ide proyek menarik atau ingin berdiskusi? Jangan ragu untuk mengirimkan pesan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-slate-100">Informasi Kontak</h3>
              
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-slate-400">Email Utama</p>
                    <p className="font-semibold text-slate-200">{personal.email}</p>
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs text-cyan-400 hover:underline flex items-center gap-1 mt-1"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Tersalin ke clipboard!' : 'Salin Email'}</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-slate-800/60">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-slate-400">Lokasi</p>
                    <p className="font-semibold text-slate-200">{personal.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-slate-800/60">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-slate-400">Waktu Respon</p>
                    <p className="font-semibold text-slate-200">Rata-rata 1-2 Jam Kerja</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl border border-slate-800 space-y-6">
              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Terima kasih! Pesan Anda telah berhasil terkirim.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama Anda"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Email Anda</label>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Pesan Anda</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tuliskan ide proyek atau pertanyaan Anda di sini..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold hover:opacity-95 transition-opacity shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Mengirim...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Kirim Pesan</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
