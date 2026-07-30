import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Hafid Nur Mahmudi",
    role: "Full-Stack Developer",
    tagline: "Membangun aplikasi web yang andal dan efisien, dari frontend yang responsif hingga backend yang terstruktur.",
    bio: "Saya adalah seorang Full-Stack Developer yang berdedikasi menciptakan pengalaman digital terbaik. Berfokus pada Laravel,React, TypeScript, dan performa web modern. Selalu antusias mempelajari teknologi baru dan mengubah ide kompleks menjadi produk web yang siap pakai.",
    location: "Boyolali, Indonesia", 
    email: "mahmudi.hafid27@gmail.com",
    cvUrl: "https://drive.google.com/file/d/1l9dMT_2F_tMGQz6tM7r_JqN4ciXyC-Bg/view?usp=sharing",
    availableForWork: true,
    social: {
      github: "https://github.com/hafidnm",
      linkedin: "https://linkedin.com/in/hafid-nur-mahmudi-41107b295",
      twitter: "https://twitter.com/nrhfd__",
    },
    stats: [
      { label: "Tahun Pengalaman", value: "2" },
      { label: "Proyek Selesai", value: "10" },
      { label: "Kepuasan Klien", value: "100%" },
      { label: "Skor Lighthouse", value: "98+" },
    ],
  },

  skillCategories: [
    {
      name: "Front-End Development",
      skills: [
        { name: "React.js", level: "Advanced", iconName: "Code2" },
        { name: "Next.js", level: "Advanced", iconName: "Cpu" },
        { name: "Vue.js", level: "Intermediate", iconName: "Layers" },
        { name: "TypeScript", level: "Advanced", iconName: "FileCode" },
        { name: "JavaScript (ES6+)", level: "Advanced", iconName: "Sparkles" },
      ],
    },
    {
      name: "Back-End & Database",
      skills: [
        { name: "Laravel (PHP)", level: "Advanced", iconName: "Server" },
        { name: "PostgreSQL", level: "Advanced", iconName: "Database" },
        { name: "MySQL", level: "Advanced", iconName: "Database" },
        { name: "RESTful API & Axios", level: "Advanced", iconName: "Network" },
        { name: "Prisma ORM", level: "Intermediate", iconName: "FileCode" },
      ],
    },
    {
      name: "UI & State Management",
      skills: [
        { name: "Tailwind CSS", level: "Expert", iconName: "Palette" },
        { name: "Material UI (MUI)", level: "Advanced", iconName: "Layout" },
        { name: "Zustand State", level: "Advanced", iconName: "Cpu" },
        { name: "HTML5 & CSS3", level: "Expert", iconName: "Layout" },
      ],
    },
    {
      name: "Tools & Workflow",
      skills: [
        { name: "Git & GitHub", level: "Advanced", iconName: "GitBranch" },
        { name: "Vercel Deployment", level: "Advanced", iconName: "Globe" },
        { name: "Agile / Scrum", level: "Advanced", iconName: "Zap" },
        { name: "RFID Hardware Integration", level: "Intermediate", iconName: "Sparkles" },
      ],
    },
  ],

  projects: [
    {
      id: "1",
      title: "Al-Ausath Boarding School SIAKAD",
      description: "Sistem Informasi Akademik & Administratif berbasis web full-stack untuk mendigitalisasi presensi, nilai, dan tata kelola santri.",
      longDescription: "Membangun sistem informasi akademik dan administratif berbasis web untuk Pondok Pesantren Al-Ausath menggunakan Next.js, Laravel, dan PostgreSQL (REST API). Mengimplementasikan autentikasi multi-role RBAC, manajemen presensi massal dengan dukungan guru pengganti, serta pengujian sistem Black Box Testing.",
      category: "web-app",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Laravel", "PostgreSQL", "REST API", "RBAC", "TypeScript"],
      demoUrl: "https://github.com/hafidnm",
      githubUrl: "https://github.com/hafidnm",
      featured: true,
    },
    {
      id: "2",
      title: "Human Capital Management (HCM) System",
      description: "Sistem Manajemen Sumber Daya Manusia berbasis web dengan antarmuka responsif MUI, state Zustand, dan API Axios.",
      longDescription: "Berkontribusi sebagai Frontend Developer Intern di Oemah Solution Indonesia. Membangun antarmuka HCM responsif dengan React.js dan Material UI (MUI), mengintegrasikan API dengan Axios, mengelola state aplikasi menggunakan Zustand, serta terlibat dalam proses Agile Sprint Review.",
      category: "dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["React.js", "Material UI (MUI)", "Zustand", "Axios", "REST API"],
      demoUrl: "https://github.com/hafidnm",
      githubUrl: "https://github.com/hafidnm",
      featured: true,
    },
    {
      id: "3",
      title: "Point of Sale (POS) Web Application",
      description: "Aplikasi kasir dan transaksi POS berbasis web untuk menyederhanakan penjualan, stok produk, dan laporan keuangan.",
      longDescription: "Dikembangkan saat magang di Diskominfo Karanganyar menggunakan Vue.js, JavaScript, dan Tailwind CSS. Fitur meliputi transaksi real-time, manajemen produk & stok, komponen UI reusable, serta pelaporan penjualan.",
      category: "web-app",
      image: "https://images.unsplash.com/photo-1556742049-0a6754099d66?auto=format&fit=crop&w=800&q=80",
      tags: ["Vue.js", "Tailwind CSS", "JavaScript", "REST API", "Git"],
      demoUrl: "https://github.com/hafidnm",
      githubUrl: "https://github.com/hafidnm",
      featured: true,
    },
    {
      id: "4",
      title: "Trade Journal Management System",
      description: "Aplikasi jurnal trading full-stack dengan Next.js & PostgreSQL untuk mencatat transaksi dan menganalisis metrik performa (Win Rate, PnL, R:R).",
      longDescription: "Aplikasi web jurnal trading yang dibangun menggunakan Next.js dan Prisma ORM dengan PostgreSQL. Dilengkapi modul pencatatan trade detail (entry, SL, TP, lot, PnL), filter/pencarian histori, serta dashboard statistik interaktif untuk mengevaluasi performa akun.",
      category: "dashboard",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
      demoUrl: "https://github.com/hafidnm",
      githubUrl: "https://github.com/hafidnm",
      featured: true,
    },
    {
      id: "5",
      title: "RFID-Based Student Attendance System",
      description: "Sistem presensi siswa terintegrasi hardware RFID scanner berbasis web Laravel & MySQL untuk SMP Negeri 1 Nogosari.",
      longDescription: "Merancang dan membangun aplikasi presensi full-stack menggunakan Laravel dan MySQL yang terintegrasi langsung dengan pemindai kartu RFID. Dilengkapi dashboard statistik kehadiran siswa secara real-time.",
      category: "web-app",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["Laravel", "MySQL", "RFID Hardware", "PHP", "Bootstrap"],
      demoUrl: "https://github.com/hafidnm",
      githubUrl: "https://github.com/hafidnm",
      featured: false,
    },
  ],

  experiences: [
    {
      period: "Feb 2026 - Apr 2026 (3 bln)",
      role: "Full Stack Engineer",
      company: "Pondok Pesantren Al-Ausath · Magang (Remote)",
      description: "Mengembangkan fitur frontend menggunakan Next.js & TypeScript, membangun RESTful API & backend service dengan Laravel, serta merancang skema database PostgreSQL. Mengimplementasikan autentikasi RBAC, modul akademik (presensi, penjadwalan, penilaian), dan pengujian sistem.",
      technologies: ["Next.js", "TypeScript", "Laravel", "PostgreSQL", "REST API", "RBAC"],
    },
    {
      period: "Sep 2025 - Jan 2026 (5 bln)",
      role: "Frontend Developer",
      company: "Oemah Solution Indonesia · Magang (Hybrid)",
      description: "Mengembangkan antarmuka aplikasi dengan React.js dan JavaScript. Mengelola state aplikasi menggunakan Zustand untuk konsistensi data, menyelaraskan UI menggunakan Material UI (MUI), serta berkolaborasi tim via GitHub (commit, merge, code review, dan debugging).",
      technologies: ["React.js", "JavaScript", "Zustand", "Material UI (MUI)", "Git & GitHub"],
    },
    {
      period: "Feb 2025 - Jun 2025 (5 bln)",
      role: "Frontend Developer",
      company: "Dinas Komunikasi dan Informatika · Magang (Remote)",
      description: "Mengembangkan antarmuka aplikasi web yang responsif dan interaktif menggunakan Vue.js, JavaScript, dan Tailwind CSS. Berkolaborasi dengan tim backend untuk integrasi data API dan version control menggunakan GitHub.",
      technologies: ["Vue.js", "JavaScript", "Tailwind CSS", "HTML5 & CSS3", "Git & GitHub"],
    },
  ],

  services: [
    {
      icon: "Layout",
      title: "Responsive Web Design",
      description: "Membuat tampilan web yang tampak sempurna di layar HP, Tablet, hingga Desktop monitor besar.",
    },
    {
      icon: "Code2",
      title: "Front-End Development",
      description: "Mengembangkan kode React & TypeScript yang bersih, mudah dirawat, dan terstruktur dengan rapi.",
    },
    {
      icon: "Zap",
      title: "Performance & SEO",
      description: "Mengoptimalkan kecepatan muat halaman untuk meraih skor tinggi di Google Lighthouse.",
    },
  ],
};
