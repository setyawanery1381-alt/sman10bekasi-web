/**
 * SMA Negeri 10 Kota Bekasi - Website Resmi & CMS Sekolah
 * Frontend Engine & State Management
 * Referensi Resmi: https://www.sman10bekasi.sch.id
 */

// ==========================================
// 1. DATA DEFAULT (INITIAL SEED DATA)
// ==========================================
const DEFAULT_CONFIG = {
  adminPassword: "sman10bks",
  identity: {
    name: "SMA Negeri 10 Kota Bekasi",
    shortName: "SMAN 10 Bekasi",
    tagline: "Terwujudnya murid yang cerdas, religius, berprestasi, sehat, berbudaya lokal, dan berwawasan global.",
    npsn: "20223019",
    akreditasi: "Akreditasi A (Unggul)",
    logoUrl: "https://sman10bekasi.sch.id/media/img/logo-sman10.png",
    faviconUrl: "https://sman10bekasi.sch.id/favicon.ico",
    tickerEnabled: false,
    tickerText: "",
    accreditationTickerEnabled: true,
    accreditationTickerText: "Status Akreditasi A (Unggul) — Sertifikasi Resmi BAN-S/M • Nomor Pokok Sekolah Nasional (NPSN): 20223019 • SMA Negeri 10 Kota Bekasi — Cerdas, Berkarakter & Berprestasi",
    accreditationTickerSpeed: "normal",
    primaryColor: "blue"
  },
  importantAnnouncement: {
    enabled: true,
    badge: "INFO TERBARU",
    text: "📢 SOSIALISASI AI: Murid-Murid SMAN 10 Bekasi Mengikuti Edukasi Pemanfaatan Artificial Intelligence dari Polres Metro Bekasi Kota • SELAMAT KEPADA ANGGOTA PRAMUKA GARUDA yang Menerima Sertifikat Langsung dari Bapak Wali Kota Bekasi Dr. Tri Adhianto • PPDB TAHUN AJARAN 2026/2027 RESMI DIBUKA",
    theme: "warning",
    speed: "normal",
    buttonEnabled: false,
    buttonText: "",
    buttonUrl: "",
    isMarquee: true,
    isSticky: true
  },
  header: {
    heroTitle: "Selamat Datang di Website Resmi SMA Negeri 10 Kota Bekasi",
    heroSubtitle: "Sekolah Menengah Atas unggulan di Kota Bekasi dengan fasilitas lengkap, ekstrakurikuler beragam, dan prestasi akademik maupun non-akademik. Mewujudkan SDM cerdas, terampil, berkarakter, dan berbudaya lingkungan berlandaskan IMTAK dan IPTEK.",
    heroVideoUrl: "media/vid/background.webm",
    heroVideoEnabled: true,
    heroBrightnessMode: "bright",
    heroCtaText: "Info Berita & Prestasi",
    heroCtaLink: "#berita",
    secondaryCtaText: "Profil & Ekstrakurikuler",
    secondaryCtaLink: "#ekskul",
    highlights: [
      { id: "1", icon: "Award", label: "Akreditasi Sekolah", value: "Unggul (A)" },
      { id: "2", icon: "Users", label: "Peserta Didik", value: "1.500+ Murid" },
      { id: "3", icon: "BookOpen", label: "Guru Pendidik", value: "75 Guru" },
      { id: "4", icon: "GraduationCap", label: "Tenaga Kependidikan", value: "37 Staf" }
    ]
  },
  navMenus: [
    { id: "m1", label: "Beranda", path: "#beranda", isDropdown: false, enabled: true },
    {
      id: "m2",
      label: "Profil",
      path: "#profil",
      isDropdown: true,
      enabled: true,
      dropdownItems: [
        { id: "d2-1", label: "Sambutan Kepala Sekolah", path: "#sambutan", description: "Pesan dari pimpinan SMAN 10 Kota Bekasi" },
        { id: "d2-2", label: "Visi & Misi", path: "#profil-visi", description: "Cita-cita & 7 pilar mutu pendidikan" },
        { id: "d2-3", label: "Fasilitas Sekolah", path: "#fasilitas", description: "Laboratorium, Perpustakaan, & Sarana Belajar" },
        { id: "d2-4", label: "Video Profil", path: "#video-profil", description: "Dokumentasi visual lingkungan sekolah" }
      ]
    },
    {
      id: "m3",
      label: "Kesiswaan & Ekskul",
      path: "#ekskul",
      isDropdown: true,
      enabled: true,
      dropdownItems: [
        { id: "d3-1", label: "Daftar 19 Ekstrakurikuler", path: "#ekskul", description: "Wakamaca, Satkopas, Option, Iklim, dsb" },
        { id: "d3-2", label: "Prestasi Siswa", path: "#berita", description: "Koleksi kejuaraan akademik & non-akademik" },
        { id: "d3-3", label: "Organisasi OSIS SMAN 10", path: "https://osis.sman10bekasi.sch.id/", description: "Website Resmi OSIS SMAN 10 Bekasi" }
      ]
    },
    { id: "m4", label: "Berita & Info", path: "#berita", isDropdown: false, enabled: true },
    { id: "m5", label: "Agenda Kegiatan", path: "#agenda", isDropdown: false, enabled: true },
    { id: "m6", label: "Kontak & Lokasi", path: "#kontak", isDropdown: false, enabled: true }
  ],
  layoutSections: {
    showHero: true,
    showQuickStats: true,
    showAccreditation: true,
    showPrincipalSpeech: true,
    showNews: true,
    showAgenda: true,
    showFacilities: true,
    showExtracurriculars: true,
    showVideoEmbed: true,
    showMapEmbed: true
  },
  mobileBottomNav: {
    enabled: true,
    showHome: true,
    showNews: true,
    showAchievements: true,
    showExtracurriculars: true,
    showContact: true,
    styleVariant: "floating-dock",
    accentColor: "blue"
  },
  principal: {
    name: "Dra. Turheni Komar, M.Pd",
    title: "Kepala Sekolah SMA Negeri 10 Kota Bekasi",
    nip: "19650315 198903 2 005",
    imageUrl: "https://sman10bekasi.sch.id/_next/static/immutable/media/kepsek.38cds0p51jg2o.jpeg",
    quote: "Keunggulan tidak hanya sebatas ditandai dengan capaian prestasi akademik tetapi secara integral dengan implementasi karakter. Budaya mutu menjadi satu kesatuan antara kualitas akademik dengan nilai-nilai karakter.",
    fullSpeech: `Assalamu’alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera untuk kita semua.\n\nSelamat datang di website resmi SMA Negeri 10 Kota Bekasi.\n\nAlhamdulillah, puji syukur kehadirat Allah SWT, Pencipta seluruh semesta alam, atas kemurahan-Nya kami hadir menyapa publik dalam rangka berbagi informasi seputar dunia pendidikan.\n\nKehadiran website SMAN 10 Kota Bekasi menjadi bagian yang tak dapat dipisahkan terhadap konstelasi institusi pendidikan. Keberadaannya sangat penting agar mempermudah seluruh civitas pendidikan, baik pendidik/tenaga kependidikan, peserta didik, orang tua dan masyarakat dapat mengakses informasi dan memperluas jejaring.\n\nDerasnya perkembangan teknologi informasi saat ini menjadi tantangan tersendiri dalam dunia pendidikan. Untuk itu rekayasa teknologi menjadi pilihan agar melahirkan generasi yang adaptif terhadap teknologi.\n\nSMA Negeri 10 Kota Bekasi di usianya yang cukup matang senantiasa terus mengembangkan prestasi menuju sekolah unggul sebagaimana tertuang dalam visi sekolah:\n\n"Terwujudnya murid yang cerdas, religius, berprestasi, sehat, berbudaya lokal, dan berwawasan global."\n\nKeunggulan tidak hanya sebatas ditandai dengan capaian prestasi akademik tetapi secara integral dengan implementasi karakter. Budaya mutu menjadi satu kesatuan antara kualitas akademik dengan nilai-nilai karakter.\n\nMari bersama-sama bersinergi, berinovasi, dan berkarya demi masa depan anak-anak kita yang gemilang.\n\nBillahi Taufiq wal Hidayah, Wassalamu’alaikum Warahmatullahi Wabarakatuh.`
  },
  ppdb: {
    enabled: true,
    buttonLabel: "Info PPDB Jabar",
    buttonLink: "https://disdik.jabarprov.go.id",
    openInNewTab: true,
    academicYear: "2026/2027",
    statusText: "Pendaftaran Dibuka",
    badgeText: "Tahun Ajaran 2026/2027",
    announcement: "Penerimaan Peserta Didik Baru (PPDB) SMA Negeri 10 Kota Bekasi Tahun Ajaran 2026/2027 melayani jalur Zonasi, Afirmasi KETM/Disabilitas, Perpindahan Tugas Orang Tua, serta Prestasi Rapor dan Kejuaraan sesuai juknis resmi Dinas Pendidikan Provinsi Jawa Barat (Cadisdik Wilayah 3).",
    contactPerson: "(021) 889 759 28 (Sekretariat SMAN 10)",
    brochureUrl: ""
  },
  embeds: {
    youtubeTitle: "Moment MPLS 2026 SMAN 10 Bekasi",
    youtubeSubtitle: "Dokumentasi Masa Pengenalan Lingkungan Sekolah (MPLS) Murid Baru SMAN 10 Kota Bekasi dengan semangat disiplin, kebersamaan, dan pengenalan budaya sekolah.",
    youtubeCategory: "MPLS & Profil",
    youtubeDate: "Juli 2026",
    youtubeUrl: "https://www.youtube-nocookie.com/embed/hY-x_cvI0kM",
    activeVideoId: "vid-1",
    mapTitle: "Peta Lokasi SMAN 10 Kota Bekasi (Harapan Indah)",
    mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5218861203027!2d106.9744!3d-6.1946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698bbefc874f67%3A0x7d2870425fa49b80!2sSMA%20Negeri%2010%20Kota%20Bekasi!5e0!3m2!1sid!2sid!4v1690000000000!5m2!1sid!2sid"
  },
  videos: [
    {
      id: "vid-1",
      title: "Moment MPLS 2026 SMAN 10 Bekasi",
      subtitle: "Dokumentasi Masa Pengenalan Lingkungan Sekolah (MPLS) Murid Baru SMAN 10 Kota Bekasi dengan semangat disiplin, kebersamaan, dan pengenalan budaya sekolah.",
      category: "MPLS & Profil",
      youtubeId: "hY-x_cvI0kM",
      embedUrl: "https://www.youtube-nocookie.com/embed/hY-x_cvI0kM",
      watchUrl: "https://www.youtube.com/watch?v=hY-x_cvI0kM",
      thumbnail: "https://img.youtube.com/vi/hY-x_cvI0kM/maxresdefault.jpg",
      date: "Juli 2026",
      duration: "4:32"
    },
    {
      id: "vid-2",
      title: "KPHO 2026 SMAN 10 Bekasi",
      subtitle: "Kegiatan Pelantikan Hasil Orientasi (KPHO) gabungan 19 ekstrakurikuler unggulan SMAN 10 Bekasi, melatih kepemimpinan dan kreativitas murid.",
      category: "Ekstrakurikuler",
      youtubeId: "dhtumfD-w4I",
      embedUrl: "https://www.youtube-nocookie.com/embed/dhtumfD-w4I",
      watchUrl: "https://www.youtube.com/watch?v=dhtumfD-w4I",
      thumbnail: "https://img.youtube.com/vi/dhtumfD-w4I/maxresdefault.jpg",
      date: "Agustus 2026",
      duration: "5:18"
    },
    {
      id: "vid-3",
      title: "Upacara Hari Lahir Pancasila 1 Juni 2026",
      subtitle: "Upacara khidmat memperingati Hari Lahir Pancasila oleh segenap dewan guru, staf, dan murid SMAN 10 Bekasi di lapangan utama sekolah.",
      category: "Nasionalisme",
      youtubeId: "XTGt3-Se8rQ",
      embedUrl: "https://www.youtube-nocookie.com/embed/XTGt3-Se8rQ",
      watchUrl: "https://www.youtube.com/watch?v=XTGt3-Se8rQ",
      thumbnail: "https://img.youtube.com/vi/XTGt3-Se8rQ/maxresdefault.jpg",
      date: "Juni 2026",
      duration: "6:45"
    },
    {
      id: "vid-4",
      title: "Kartini Day's SMAN 10 Bekasi 2026",
      subtitle: "Apresiasi perjuangan emansipasi RA Kartini lewat parade busana adat nusantara, lomba debat, tari tradisional KSS, dan apresiasi bakat.",
      category: "Seni Budaya",
      youtubeId: "DIl1zMGdpow",
      embedUrl: "https://www.youtube-nocookie.com/embed/DIl1zMGdpow",
      watchUrl: "https://www.youtube.com/watch?v=DIl1zMGdpow",
      thumbnail: "https://img.youtube.com/vi/DIl1zMGdpow/maxresdefault.jpg",
      date: "April 2026",
      duration: "7:12"
    },
    {
      id: "vid-5",
      title: "HUT SMAN 10 Bekasi Ke-23",
      subtitle: "Puncak perayaan milad SMA Negeri 10 Kota Bekasi ke-23 dengan pentas musik band, tari kolosal, bazar kewirausahaan, dan temu alumni.",
      category: "Milad & Pensi",
      youtubeId: "7-jXH29uaPU",
      embedUrl: "https://www.youtube-nocookie.com/embed/7-jXH29uaPU",
      watchUrl: "https://www.youtube.com/watch?v=7-jXH29uaPU",
      thumbnail: "https://img.youtube.com/vi/7-jXH29uaPU/maxresdefault.jpg",
      date: "Mei 2026",
      duration: "8:50"
    },
    {
      id: "vid-6",
      title: "Deklarasi Sekolah Ramah Digital & Profil SMAN 10",
      subtitle: "Video deklarasi dan profil implementasi pembelajaran digital, literasi media sosial sehat, dan keamanan siber di SMAN 10 Kota Bekasi.",
      category: "Inovasi Digital",
      youtubeId: "tMFpWl92poA",
      embedUrl: "https://www.youtube-nocookie.com/embed/tMFpWl92poA",
      watchUrl: "https://www.youtube.com/watch?v=tMFpWl92poA",
      thumbnail: "https://img.youtube.com/vi/tMFpWl92poA/maxresdefault.jpg",
      date: "Maret 2026",
      duration: "5:40"
    },
    {
      id: "vid-7",
      title: "Gebyar Seni & Kreativitas Pelajar SMAN 10",
      subtitle: "Ragam kreasi seni rupa, teater, modern dance, dan pameran karya cipta murid SMAN 10 Bekasi dalam Proyek Penguatan Profil Pelajar Pancasila (P5).",
      category: "Kreativitas P5",
      youtubeId: "XMun9vhHsZs",
      embedUrl: "https://www.youtube-nocookie.com/embed/XMun9vhHsZs",
      watchUrl: "https://www.youtube.com/watch?v=XMun9vhHsZs",
      thumbnail: "https://img.youtube.com/vi/XMun9vhHsZs/maxresdefault.jpg",
      date: "Februari 2026",
      duration: "6:15"
    }
  ],
  facilities: [
    {
      id: "f1",
      title: "Laboratorium Komputer & Multimedia",
      category: "Teknologi",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
      description: "Didukung oleh klub OPTION dengan komputer modern untuk pembelajaran Informatika, digital coding, robotik, dan ANBK."
    },
    {
      id: "f2",
      title: "Laboratorium Sains & MIPA Terpadu",
      category: "Sains & Riset",
      imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=80",
      description: "Sarana penelitian Fisika, Kimia, dan Biologi lengkap untuk praktikum serta riset Kelompok Ilmiah Remaja (KIR Canopus)."
    },
    {
      id: "f3",
      title: "Perpustakaan & Pojok Literasi Digital",
      category: "Literasi",
      imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=80",
      description: "Koleksi ribuan buku referensi akademik, literatur sastra, ruang baca nyaman, serta fasilitas penelusuran digital e-library."
    },
    {
      id: "f4",
      title: "Lapangan Olahraga & Seni Serbaguna",
      category: "Olahraga",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80",
      description: "Sarana representatif untuk upacara bendera, basket (BASTEN), futsal (Futsalten), voli (VOLTEN), dan atraksi seni."
    },
    {
      id: "f5",
      title: "Masjid & Sarana Pembinaan Kerohanian",
      category: "Keagamaan",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80",
      description: "Pusat ibadah harian dan kegiatan pembinaan karakter religius siswa Muslim (IKLIM) dan siswa Kristen (ROHKRIS)."
    },
    {
      id: "f6",
      title: "Studio Marching Band & Sanggar Seni",
      category: "Seni & Budaya",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
      description: "Ruang latihan perlengkapan Marching Band Gita Flamboyan (MBGF) serta eksplorasi teater dan tari KERANI."
    }
  ],
  extracurriculars: [
    {
      id: "e1",
      name: "WAKAMACA (Pramuka Gudep)",
      category: "Kepanduan",
      coach: "Pembina Ambalan SMAN 10",
      schedule: "Jumat, 15:30 WIB",
      icon: "Flag",
      description: "Wastu Kencana Mahisa Cempaka adalah ambalan pramuka aktif berpedoman pada Tri Satya dan Dasa Darma dengan prestasi Pramuka Garuda."
    },
    {
      id: "e2",
      name: "SATKOPAS (Paskibra)",
      category: "Kepemimpinan",
      coach: "Pelatih Paskibra Kota Bekasi",
      schedule: "Rabu & Sabtu, 15:00 WIB",
      icon: "Award",
      description: "Satuan Korps Paskibra yang didirikan sejak tahun 2000. Meraih penghargaan ekskul berprestasi 5 kali berturut-turut di Kota Bekasi."
    },
    {
      id: "e3",
      name: "OPTION (IT & Robotik)",
      category: "Teknologi",
      coach: "Hafidz Ananta Priambodo",
      schedule: "Kamis, 15:30 WIB",
      icon: "Cpu",
      description: "Official Practice of Technology Information and Communication dengan 4 divisi: Programming, DKV, Robotik, dan E-Sport."
    },
    {
      id: "e4",
      name: "IKLIM (Rohis Muslim)",
      category: "Keagamaan",
      coach: "Galang Setya Patria",
      schedule: "Jumat, 13:00 WIB",
      icon: "HeartHandshake",
      description: "Ikatan Pelajar Muslim SMAN 10 Bekasi berdiri sejak 24 Desember 1995, wadah memperdalam keislaman, ukhuwah, dan akhlak mulia."
    },
    {
      id: "e5",
      name: "KIR CANOPUS (Karya Ilmiah)",
      category: "Sains & Riset",
      coach: "Audy Beauty Aulia",
      schedule: "Selasa, 15:30 WIB",
      icon: "Cpu",
      description: "Kelompok Ilmiah Remaja Canopus dengan 5 divisi: MIPA, LITBANG, TEPRAL (Teknologi), Bahasa, dan Ilmu Sosial."
    },
    {
      id: "e6",
      name: "MBGF (Marching Band Gita Flamboyan)",
      category: "Seni Musik",
      coach: "Khumairah Aisyah Putri",
      schedule: "Sabtu, 08:00 WIB",
      icon: "Music",
      description: "Ekskul musik membanggakan yang melatih percussion, horn line, field commander, dan color guard berskala kejuaraan."
    },
    {
      id: "e7",
      name: "AKSI (Jurnalistik & Broadcast)",
      category: "Media & Komunikasi",
      coach: "Putri Balqis Nur Fauziah",
      schedule: "Senin & Rabu, 15:30 WIB",
      icon: "MessageSquare",
      description: "Aktif, Kreatif, Suportif, Inovatif. Wadah bidang Fotografi, Jurnalistik, dan Broadcasting media sosial SMAN 10 Bekasi."
    },
    {
      id: "e8",
      name: "LLC (Language & Literature Club)",
      category: "Bahasa",
      coach: "Siti Sadiah",
      schedule: "Kamis, 15:30 WIB",
      icon: "MessageSquare",
      description: "Wadah pengembangan kemampuan bahasa Indonesia dan Inggris melalui divisi Sastra Indonesia, Speech, dan Debate."
    },
    {
      id: "e9",
      name: "BASTEN (Basketball Ten)",
      category: "Olahraga",
      coach: "Fabian Nararya Alghazel",
      schedule: "Selasa & Jumat, 16:00 WIB",
      icon: "Trophy",
      description: "Klub bola basket SMAN 10 Bekasi yang mengasah kemampuan fisik, taktis permainan, dan sportivitas kompetisi."
    },
    {
      id: "e10",
      name: "FUTSALTEN (Futsal)",
      category: "Olahraga",
      coach: "Valentino Kenzie",
      schedule: "Rabu & Sabtu, 16:00 WIB",
      icon: "Trophy",
      description: "Wadah keterampilan futsal siswa, kekompakan tim, dan pembinaan intensif menghadapi turnamen antar-SMA se-Jabodetabek."
    },
    {
      id: "e11",
      name: "VOLTEN (Volley Ten)",
      category: "Olahraga",
      coach: "Pelatih Voli SMAN 10",
      schedule: "Senin & Kamis, 15:30 WIB",
      icon: "Trophy",
      description: "Tim bola voli berprestasi peraih Juara 2 VIMAJA Cup 2026 yang mengedepankan kerja keras dan kekompakan tim."
    },
    {
      id: "e12",
      name: "BELA DIRI (Keris Pusaka)",
      category: "Bela Diri",
      coach: "Muhammad Jidan Agna Riffat",
      schedule: "Kamis & Sabtu, 15:30 WIB",
      icon: "Shield",
      description: "Pencak Silat aliran Cimacan yang telah melahirkan banyak atlet berprestasi di ajang O2SN dan POPDA Kota Bekasi."
    },
    {
      id: "e13",
      name: "PMR (Palang Merah Remaja)",
      category: "Kemanusiaan",
      coach: "Aulia Ramadhani",
      schedule: "Kamis, 15:30 WIB",
      icon: "HeartHandshake",
      description: "Organisasi kepemudaan PMI dengan divisi Pertolongan Pertama (PP) dan Tandu untuk memupuk jiwa sosial tanggap kemanusiaan."
    },
    {
      id: "e14",
      name: "ROHKRIS (Rohani Kristen)",
      category: "Keagamaan",
      coach: "Azrel Evan Nanlohy",
      schedule: "Jumat, 12:30 WIB",
      icon: "HeartHandshake",
      description: "Wadah pembinaan kerohanian Kristen bagi siswa-siswi dalam memperdalam iman, kasih persaudaraan, dan karakter Kristiani."
    },
    {
      id: "e15",
      name: "SWAKAPASI (Pecinta Alam)",
      category: "Lingkungan Hidup",
      coach: "Ammar Yusufi",
      schedule: "Sabtu, 09:00 WIB",
      icon: "Compass",
      description: "Siswa Siswi Aktivis Alam Lepas SMAN 10 Bekasi dengan komitmen pelestarian alam, penjelajahan, dan kepedulian lingkungan hidup."
    },
    {
      id: "e16",
      name: "MUGIWARA-NIJUKU",
      category: "Budaya",
      coach: "Ganes",
      schedule: "Jumat, 15:30 WIB",
      icon: "Star",
      description: "Klub kebudayaan dan Bahasa Jepang dengan divisi Bunpō (tata bahasa), Bunka (budaya), Animanga, dan Cosplay."
    },
    {
      id: "e17",
      name: "PB CHAPTOEN (Bulutangkis)",
      category: "Olahraga",
      coach: "Abdurrahman Faiz",
      schedule: "Rabu, 15:30 WIB",
      icon: "Trophy",
      description: "Ekstrakurikuler badminton untuk mengasah bakat teknik, kerja sama tim, dan mental bertanding di turnamen sekolah."
    },
    {
      id: "e18",
      name: "KERANI (Kreasi Anak Seni)",
      category: "Seni Teater & Rupa",
      coach: "Annisa Lubna Camile",
      schedule: "Sabtu, 10:00 WIB",
      icon: "Music",
      description: "Lembaga kesiswaan bidang seni dan budaya yang berdiri sejak 2004, wadah kreativitas seni peran, tari, dan karya rupa."
    },
    {
      id: "e19",
      name: "PIK-R (Konseling Remaja)",
      category: "Konseling & Kesehatan",
      coach: "Andhika Nararya Pratama",
      schedule: "Selasa, 15:00 WIB",
      icon: "Users",
      description: "Pusat Informasi & Konseling Remaja sebagai wadah teman sebaya yang aman dan nyaman untuk konseling kesehatan remaja."
    }
  ],
  agendas: [
    {
      id: "a1",
      title: "Sosialisasi Program AI dari Polres Metro Bekasi Kota",
      date: "15 September 2026",
      time: "08:30 - 11:30 WIB",
      location: "Aula SMAN 10 Bekasi",
      category: "Teknologi & Edukasi"
    },
    {
      id: "a2",
      title: "Kunjungan & Penyerahan Sertifikat Pramuka Garuda oleh Walikota Bekasi",
      date: "14 September 2026",
      time: "07:30 - 10:00 WIB",
      location: "Lapangan Utama SMAN 10 Bekasi",
      category: "Kepanduan"
    },
    {
      id: "a3",
      title: "KPHO 2026 (Pelantikan Hasil Orientasi Ekskul)",
      date: "09 Agustus 2026",
      time: "07:00 - 16:00 WIB",
      location: "Kampus SMAN 10 Bekasi",
      category: "Kesiswaan"
    },
    {
      id: "a4",
      title: "Rapat Kerja Dewan Guru Persiapan Tahun Ajaran 2026/2027",
      date: "08 - 09 Juli 2026",
      time: "08:00 - 15:00 WIB",
      location: "Ruang Guru & Aula Pertemuan",
      category: "Akademik"
    }
  ],
  footer: {
    aboutText: "SMA Negeri 10 Kota Bekasi adalah institusi pendidikan menengah atas negeri unggulan di Kota Bekasi yang berdedikasi melahirkan sumber daya manusia cerdas, religius, berprestasi, sehat, berbudaya lokal, dan berwawasan global.",
    address: "Perumahan Harapan Indah, Jl. Flamboyan Raya, RT.003/RW.019, Kel. Pejuang, Kec. Medan Satria, Kota Bekasi, Jawa Barat 17610",
    phone: "(021) 889 759 28",
    whatsapp: "+62 889-7592-8000",
    email: "info@sman10bekasi.sch.id",
    openingHours: "Senin - Jumat: 07:00 - 15:45 WIB",
    socialLinks: {
      instagram: "https://www.instagram.com/sman10kotabekasi/",
      youtube: "https://www.youtube.com/@SMAN10BEKASI",
      facebook: "https://www.facebook.com/profile.php?id=100076562861716",
      twitter: "https://www.sman10bekasi.sch.id"
    },
    copyright: "© 2026 SMA Negeri 10 Kota Bekasi (NPSN: 20223019). Hak Cipta Dilindungi Undang-Undang."
  },
  googleAppsScript: {
    enabled: true,
    webAppUrl: "",
    folderId: "",
    spreadsheetId: ""
  }
};

const DEFAULT_NEWS = [
  {
    id: "news-1",
    title: "Sosialisasi Program AI dari Polres Metro Bekasi Kota",
    slug: "sosialisasi-program-ai-dari-polres-metro-bekasi-kota",
    category: "Kegiatan",
    summary: "Murid-Murid SMAN 10 Bekasi mengikuti sosialisasi Program Pemanfaatan Artificial Intelligence (AI) secara bijak dari Polres Metro Bekasi Kota.",
    content: `Bekasi — Murid-murid SMA Negeri 10 Kota Bekasi menerima kegiatan Sosialisasi Program AI dari Polres Metro Bekasi Kota yang diikuti dengan penuh antusias dan semangat belajar tinggi.\n\nKegiatan ini menjadi kesempatan berharga bagi para murid untuk mengenal lebih jauh pemanfaatan Artificial Intelligence (AI) secara bijak, positif, dan bertanggung jawab dalam kehidupan sehari-hari, khususnya di lingkungan pendidikan sekolah.\n\n"Kenali teknologinya, pahami manfaatnya, gunakan dengan bijak!"\n\nSemoga kegiatan ini dapat menambah wawasan, meningkatkan literasi digital, serta mendorong generasi muda SMAN 10 Bekasi untuk menjadi pengguna teknologi yang cerdas, kreatif, kritis, dan bertanggung jawab di era revolusi industri 5.0.\n\nKeluarga besar SMAN 10 Bekasi menyampaikan apresiasi dan terima kasih setinggi-tingginya kepada jajaran Polres Metro Bekasi Kota atas edukasi dan kolaborasi berharga ini.`,
    coverImage: "https://cdn.sman10bekasi.sch.id/uploads/2026/09/561-1789471968561-2090b2513eb2.webp",
    author: "Admin SMAN 10",
    date: "15 September 2026",
    isPinned: true,
    views: 1820,
    status: "published",
    galleryImages: [
      "https://cdn.sman10bekasi.sch.id/uploads/2026/09/561-1789471968561-2090b2513eb2.webp"
    ],
    actionLink: {
      label: "Kunjungi Portal Resmi Polres Metro Bekasi Kota",
      url: "https://metro.polri.go.id"
    }
  },
  {
    id: "news-2",
    title: "Penyerahan Sertifikat Garuda Oleh Bapak Walikota Bekasi",
    slug: "penyerahan-sertifikat-garuda-oleh-bapak-walikota-bekasi",
    category: "Prestasi",
    summary: "Kunjungan Bapak Walikota Bekasi Dr. Tri Adhianto Tjahyono ke SMAN 10 Bekasi dalam rangka penyerahan penghargaan Pramuka Garuda.",
    content: `Suatu kehormatan bagi keluarga besar SMAN 10 Kota Bekasi menerima kunjungan resmi Wali Kota Bekasi, Bapak Dr. Tri Adhianto Tjahyono, dalam rangka penyerahan Sertifikat Pramuka Garuda kepada peserta didik SMAN 10 Bekasi.\n\nPenghargaan Pramuka Garuda merupakan bentuk apresiasi tertinggi atas dedikasi, kedisiplinan, serta prestasi anggota Pramuka Ambalan Wakamaca yang telah menunjukkan keteladanan dalam kehidupan sehari-hari.\n\nMomen membanggakan ini menjadi motivasi bagi seluruh peserta didik untuk terus berkarya, berprestasi, dan mengamalkan nilai-nilai luhur Dasa Darma Pramuka.\n\nTerima kasih kepada Bapak Wali Kota Bekasi atas perhatian dan dukungannya terhadap pembinaan generasi muda Kota Bekasi. Pramuka Garuda: Tangguh, Berprestasi, dan Menginspirasi!`,
    coverImage: "https://cdn.sman10bekasi.sch.id/uploads/2026/09/571-1789349731571-d8317860781e.webp",
    author: "Admin SMAN 10",
    date: "14 September 2026",
    isPinned: true,
    views: 2450,
    status: "published",
    galleryImages: [
      "https://cdn.sman10bekasi.sch.id/uploads/2026/09/571-1789349731571-d8317860781e.webp"
    ]
  },
  {
    id: "news-3",
    title: "Upacara Peringatan Hari Kemerdekaan 17 Agustus 2026 - HUT RI ke-81",
    slug: "upacara-hari-kemerdekaan-17-agustus-2026",
    category: "Kegiatan",
    summary: "SMAN 10 Bekasi melaksanakan upacara bendera peringatan HUT Kemerdekaan Republik Indonesia ke-81 dengan khidmat dan penuh rasa persatuan.",
    content: `Keluarga besar SMAN 10 Kota Bekasi kembali memperingati hari bersejarah kemerdekaan bangsa Indonesia. Kemerdekaan bukan hanya tentang mengenang perjuangan para pahlawan, tetapi juga tentang bagaimana kita mengisi kemerdekaan dengan karya, prestasi, persatuan, dan semangat untuk terus melangkah maju.\n\nDi tengah keberagaman, mari kita terus menjaga persatuan, menghargai perbedaan, dan menumbuhkan semangat gotong royong. Karena perjuangan belum selesai—kini giliran kita untuk meneruskan semangat para pendahulu melalui hal-hal baik yang kita lakukan setiap hari.\n\nMari jadikan kemerdekaan sebagai kesempatan untuk terus belajar, berkarya, berprestasi, dan memberikan yang terbaik bagi Indonesia tercinta!\n\nMerdeka! Merdeka! Merdeka! 🇮🇩✨`,
    coverImage: "https://cdn.sman10bekasi.sch.id/uploads/2026/08/286-1787199828286-amnck9.webp",
    author: "Admin SMAN 10",
    date: "17 Agustus 2026",
    isPinned: false,
    views: 1290,
    status: "published"
  },
  {
    id: "news-4",
    title: "Upacara Hari Pramuka Nasional dan Pengukuhan Pramuka Garuda",
    slug: "upacara-hari-pramuka-nasional-dan-pengukuhan-pramuka-garuda",
    category: "Kegiatan",
    summary: "SMAN 10 Bekasi melaksanakan Upacara Peringatan Hari Pramuka ke-65 sekaligus pengukuhan Pramuka Garuda.",
    content: `SMAN 10 Kota Bekasi melaksanakan Upacara Peringatan Hari Pramuka pada 14 Agustus 2026, sekaligus pengukuhan Pramuka Garuda sebagai bentuk apresiasi atas dedikasi, prestasi, dan keteladanan dalam mengamalkan nilai-nilai kepramukaan.\n\nSemoga semangat Tri Satya dan Dasa Darma senantiasa menjadi pedoman untuk terus berkarya, berprestasi, dan mengabdi bagi bangsa dan negara. Salam Pramuka!`,
    coverImage: "https://cdn.sman10bekasi.sch.id/uploads/2026/08/524-1786704104524-jvvb0f.webp",
    author: "Admin SMAN 10",
    date: "14 Agustus 2026",
    isPinned: false,
    views: 980,
    status: "published"
  },
  {
    id: "news-5",
    title: "Tata Tertib & Aturan Penampilan Murid Baru SMAN 10 Bekasi",
    slug: "tata-tertib-aturan-penampilan-murid-baru",
    category: "Pengumuman",
    summary: "Pedoman kedisiplinan, kerapian rambut, atribut seragam sekolah, dan etika murid SMA Negeri 10 Kota Bekasi.",
    content: `Belajar dengan nyaman dimulai dari kedisiplinan dan kerapian diri. Simak aturan penampilan dan atribut sekolah yang wajib dipatuhi oleh seluruh peserta didik SMAN 10 Bekasi:\n\n1. Rambut & Aksesoris:\n- Siswa Putra: Rambut rapi, tidak menyentuh kerah, alis, atau telinga, tidak dicukur ekstrem.\n- Siswi Putri: Rambut ditata rapi, bagi yang berhijab memakai jilbab sesuai ketentuan.\n- Dilarang mewarnai rambut non-alami dan dilarang memakai perhiasan/tindik mencolok.\n\n2. Atribut Seragam:\n- Badge OSIS di saku sebelah kiri.\n- Nametag identitas di dada sebelah kanan.\n- Badge SMAN 10 Bekasi & Lokasi Kota di lengan sebelah kanan.\n- Nama Kelas di lengan sebelah kiri.\n\n3. Sepatu dominan hitam bertali dengan kaus kaki putih/hitam di atas mata kaki.\n\nMari kita jaga nama baik dan wujudkan lingkungan sekolah yang disiplin, rapi, dan berbudaya!`,
    coverImage: "https://cdn.sman10bekasi.sch.id/uploads/2026/08/530-1786104537530-cmur65.webp",
    author: "Tim Kesiswaan",
    date: "07 Agustus 2026",
    isPinned: false,
    views: 3100,
    status: "published"
  },
  {
    id: "news-6",
    title: "Juara 2 Putri Kejuaraan Bola Voli VIMAJA CUP 2026",
    slug: "juara-2-putri-kejuaraan-bola-voli-vimaja-cup-2026",
    category: "Prestasi",
    summary: "Tim Bola Voli Putri SMAN 10 Bekasi (VOLTEN) berhasil meraih podium Juara 2 pada ajang bergengsi VIMAJA Cup 2026.",
    content: `Alhamdulillah, perjuangan, kerja keras, dan kekompakan akhirnya membuahkan hasil membanggakan. Tim Bola Voli Putri SMAN 10 Bekasi berhasil meraih Juara 2 VIMAJA Cup 2026.\n\nTerima kasih kepada seluruh tim, pelatih, official, dan suporter yang selalu memberikan doa serta dukungan moral. Ini bukan akhir, melainkan langkah untuk terus berkembang dan meraih hasil yang lebih tinggi di kesempatan berikutnya.\n\nTetap rendah hati, terus berlatih, dan pantang menyerah! VOLTEN BISA! 🔥🏐`,
    coverImage: "https://cdn.sman10bekasi.sch.id/uploads/2026/06/956-1782643419956-p893jp.webp",
    author: "Official VOLTEN",
    date: "28 Juni 2026",
    isPinned: false,
    views: 1450,
    status: "published"
  }
];

// ==========================================
// 2. STATE MANAGER & STORAGE
// ==========================================
const STORAGE_CONFIG_KEY = "sman10_school_config";
const STORAGE_NEWS_KEY = "sman10_news_articles";

let state = {
  config: null,
  news: [],
  activeNewsCategory: "Semua",
  newsSearchQuery: "",
  activeAdminTab: "header",
  selectedNewsId: null,
  selectedFacilityId: null,
  editingNewsId: null,
  editingAgendaId: null,
  editingFacilityId: null,
  editingEkskulId: null
};

function loadState() {
  try {
    const savedConfig = localStorage.getItem(STORAGE_CONFIG_KEY);
    state.config = savedConfig ? JSON.parse(savedConfig) : JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  } catch (e) {
    console.error("Gagal membaca konfigurasi dari LocalStorage:", e);
    state.config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  }

  // Auto-upgrade / sync with official SMAN 10 Bekasi video data
  if (!state.config.videos || !Array.isArray(state.config.videos) || state.config.videos.length === 0) {
    state.config.videos = JSON.parse(JSON.stringify(DEFAULT_CONFIG.videos));
  }
  if (!state.config.embeds || state.config.embeds.youtubeUrl.includes("dQw4w9WgXcQ")) {
    state.config.embeds = JSON.parse(JSON.stringify(DEFAULT_CONFIG.embeds));
  }
  if (state.config.embeds && state.config.embeds.youtubeUrl) {
    state.config.embeds.youtubeUrl = state.config.embeds.youtubeUrl.replace("www.youtube.com/embed/", "www.youtube-nocookie.com/embed/");
  }
  if (state.config.videos && Array.isArray(state.config.videos)) {
    state.config.videos.forEach(v => {
      if (v.embedUrl) {
        v.embedUrl = v.embedUrl.replace("www.youtube.com/embed/", "www.youtube-nocookie.com/embed/");
      }
    });
  }
  if (state.config.header) {
    state.config.header.heroVideoUrl = "media/vid/background.webm";
    state.config.header.heroVideoEnabled = true;
    if (!state.config.header.heroBrightnessMode) {
      state.config.header.heroBrightnessMode = "bright";
    }
  }

  try {
    const savedNews = localStorage.getItem(STORAGE_NEWS_KEY);
    state.news = savedNews ? JSON.parse(savedNews) : JSON.parse(JSON.stringify(DEFAULT_NEWS));
  } catch (e) {
    console.error("Gagal membaca berita dari LocalStorage:", e);
    state.news = JSON.parse(JSON.stringify(DEFAULT_NEWS));
  }

  // Sinkronisasi data awal dari Cloud Firestore jika kredensial terhubung
  if (window.FirebaseSync && typeof window.FirebaseSync.init === "function") {
    if (window.FirebaseSync.init()) {
      window.FirebaseSync.loadSchoolConfig().then(remoteCfg => {
        if (remoteCfg) {
          state.config = { ...state.config, ...remoteCfg };
          renderPortal();
        }
      });
      window.FirebaseSync.loadNews().then(remoteNews => {
        if (remoteNews && remoteNews.length > 0) {
          state.news = remoteNews;
          renderPortal();
        }
      });
    }
  }
}

function saveConfigState() {
  try {
    localStorage.setItem(STORAGE_CONFIG_KEY, JSON.stringify(state.config));
    if (window.FirebaseSync && window.FirebaseSync.isAvailable) {
      window.FirebaseSync.saveSchoolConfig(state.config);
    }
    showToast("Pengaturan berhasil disimpan!", "success");
    renderPortal();
  } catch (e) {
    showToast("Gagal menyimpan pengaturan: " + e.message, "error");
  }
}

function saveNewsState() {
  try {
    localStorage.setItem(STORAGE_NEWS_KEY, JSON.stringify(state.news));
    if (window.FirebaseSync && window.FirebaseSync.isAvailable) {
      window.FirebaseSync.saveNews(state.news);
    }
    showToast("Data berita berhasil diperbarui!", "success");
    renderPortal();
  } catch (e) {
    showToast("Gagal menyimpan berita: " + e.message, "error");
  }
}

function hardResetCache() {
  if (confirm("Reset seluruh data SMAN 10 Bekasi kembali ke konfigurasi awal bawaan pabrik?")) {
    localStorage.removeItem(STORAGE_CONFIG_KEY);
    localStorage.removeItem(STORAGE_NEWS_KEY);
    localStorage.removeItem("admin_authenticated");
    loadState();
    renderPortal();
    showToast("Seluruh cache telah dibersihkan dan data SMAN 10 Bekasi dimuat ulang.", "info");
    if (document.getElementById("admin-modal") && !document.getElementById("admin-modal").classList.contains("hidden")) {
      renderAdminDashboard();
    }
  }
}

// ==========================================
// 3. TOAST & NOTIFICATION SYSTEM
// ==========================================
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  const bgColors = {
    success: "bg-emerald-600 text-white border-emerald-700",
    error: "bg-rose-600 text-white border-rose-700",
    info: "bg-slate-900 text-white border-slate-800"
  };

  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border text-sm font-medium transition-all duration-300 transform translate-y-2 opacity-0 ${bgColors[type] || bgColors.info}`;
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : type === 'error' ? 'alert-triangle' : 'info'}" class="w-4 h-4 flex-shrink-0"></i>
    <span class="flex-1">${message}</span>
  `;
  container.appendChild(toast);
  lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  });

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================
// 4. PORTAL RENDERING ENGINE
// ==========================================
function renderPortal() {
  const cfg = state.config;
  if (!cfg) return;

  applyThemeColor(cfg.identity.primaryColor);
  renderImportantAnnouncement();
  renderAccreditationTicker();
  renderNavbar();
  renderHero();
  renderPrincipalSpeech();
  renderProfileVision();
  renderNewsSection();
  renderAgendas();
  renderFacilities();
  renderExtracurriculars();
  renderEmbeds();
  renderPPDBSection();
  renderFooter();
  renderMobileDock();

  if (window.lucide) {
    lucide.createIcons();
  }
}

function applyThemeColor(theme) {
  const themes = {
    blue: { primary: "#1e3a8a", hover: "#1e40af", light: "#eff6ff", dark: "#172554" },
    indigo: { primary: "#4338ca", hover: "#3730a3", light: "#eef2ff", dark: "#312e81" },
    emerald: { primary: "#059669", hover: "#047857", light: "#ecfdf5", dark: "#065f46" },
    amber: { primary: "#d97706", hover: "#b45309", light: "#fffbeb", dark: "#92400e" },
    rose: { primary: "#e11d48", hover: "#be123c", light: "#fff1f2", dark: "#9f1239" },
    purple: { primary: "#7c3aed", hover: "#6d28d9", light: "#f5f3ff", dark: "#5b21b6" },
    cyan: { primary: "#0891b2", hover: "#0e7490", light: "#ecfeff", dark: "#155e75" }
  };

  const selected = themes[theme] || themes.blue;
  const root = document.documentElement;
  root.style.setProperty("--primary-color", selected.primary);
  root.style.setProperty("--primary-hover", selected.hover);
  root.style.setProperty("--primary-light", selected.light);
  root.style.setProperty("--primary-dark", selected.dark);
}

// 1. Important Announcement Marquee
function renderImportantAnnouncement() {
  const container = document.getElementById("important-announcement-container");
  if (!container) return;

  const ann = state.config.importantAnnouncement;
  if (!ann || !ann.enabled) {
    container.classList.add("hidden");
    return;
  }

  container.classList.remove("hidden");
  const speedClass = ann.speed === "slow" ? "animate-marquee-slow" : ann.speed === "fast" ? "animate-marquee-fast" : "animate-marquee";

  container.innerHTML = `
    <div class="bg-blue-900 text-white font-medium text-xs sm:text-sm border-b border-blue-800 overflow-hidden relative shadow-inner">
      <div class="max-w-7xl mx-auto px-4 flex items-center h-10 gap-3">
        <span class="inline-flex items-center gap-1.5 bg-blue-600 text-white font-extrabold px-2.5 py-1 rounded-md text-[11px] tracking-wider uppercase flex-shrink-0 shadow-xs">
          <i data-lucide="megaphone" class="w-3.5 h-3.5"></i>
          ${ann.badge || "INFO TERBARU"}
        </span>
        <div class="overflow-hidden relative flex-1">
          <div class="${speedClass} py-1 flex items-center whitespace-nowrap gap-12 font-semibold text-blue-100">
            <span>${ann.text}</span>
            <span>•</span>
            <span>${ann.text}</span>
          </div>
        </div>
        <button onclick="document.getElementById('important-announcement-container').classList.add('hidden')" class="text-white/70 hover:text-white p-1 rounded hover:bg-blue-800 flex-shrink-0" title="Tutup pengumuman">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `;
}

// 2. Accreditation Marquee
function renderAccreditationTicker() {
  const container = document.getElementById("accreditation-ticker-container");
  if (!container) return;

  const iden = state.config.identity;
  if (!iden || !iden.accreditationTickerEnabled) {
    container.classList.add("hidden");
    return;
  }

  container.classList.remove("hidden");
  const speedClass = iden.accreditationTickerSpeed === "slow" ? "animate-marquee-slow" : iden.accreditationTickerSpeed === "fast" ? "animate-marquee-fast" : "animate-marquee";

  container.innerHTML = `
    <div class="bg-slate-950 text-slate-300 text-xs border-b border-slate-800 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 flex items-center h-8 gap-3">
        <span class="flex items-center gap-1.5 text-amber-400 font-bold text-[11px] flex-shrink-0">
          <i data-lucide="shield-check" class="w-3.5 h-3.5 text-amber-400"></i>
          STATUS AKREDITASI
        </span>
        <div class="overflow-hidden relative flex-1">
          <div class="${speedClass} py-0.5 flex items-center whitespace-nowrap gap-12 text-slate-300">
            <span>${iden.accreditationTickerText}</span>
            <span>•</span>
            <span>${iden.accreditationTickerText}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 3. Navbar
function renderNavbar() {
  const iden = state.config.identity;
  const navMenus = state.config.navMenus || [];
  const ppdb = state.config.ppdb;

  document.title = `${iden.name} - Website Resmi & CMS`;
  
  const logoEls = document.querySelectorAll(".school-logo-img");
  logoEls.forEach(img => {
    img.src = iden.logoUrl;
    img.alt = iden.name;
    img.onerror = () => { img.src = "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=160&auto=format&fit=crop&q=80"; };
  });

  const nameEls = document.querySelectorAll(".school-name-text");
  nameEls.forEach(el => el.textContent = iden.name);

  const npsnEls = document.querySelectorAll(".school-npsn-text");
  npsnEls.forEach(el => el.textContent = `NPSN: ${iden.npsn} • ${iden.akreditasi}`);

  const menuContainer = document.getElementById("navbar-desktop-menu");
  if (menuContainer) {
    menuContainer.innerHTML = navMenus.filter(m => m.enabled).map(menu => {
      if (menu.isDropdown && menu.dropdownItems && menu.dropdownItems.length > 0) {
        return `
          <div class="relative group">
            <button type="button" class="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors py-2 group-hover:text-blue-700">
              <span>${menu.label}</span>
              <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-hover:rotate-180"></i>
            </button>
            <div class="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-2 z-50">
              ${menu.dropdownItems.map(item => `
                <a href="${item.path}" ${item.path.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="block px-4 py-2.5 hover:bg-slate-50 transition-colors">
                  <p class="text-sm font-semibold text-slate-800 hover:text-blue-700">${item.label}</p>
                  ${item.description ? `<p class="text-xs text-slate-400 mt-0.5">${item.description}</p>` : ''}
                </a>
              `).join('')}
            </div>
          </div>
        `;
      }
      return `
        <a href="${menu.path}" class="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors py-2">
          ${menu.label}
        </a>
      `;
    }).join('');
  }

  const mobileDrawer = document.getElementById("mobile-menu-drawer");
  if (mobileDrawer) {
    mobileDrawer.innerHTML = `
      <div class="p-4 space-y-3">
        ${navMenus.filter(m => m.enabled).map(menu => {
          if (menu.isDropdown && menu.dropdownItems && menu.dropdownItems.length > 0) {
            return `
              <div class="border-b border-slate-100 pb-2">
                <p class="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-1">${menu.label}</p>
                <div class="space-y-1 pl-2">
                  ${menu.dropdownItems.map(item => `
                    <a href="${item.path}" onclick="toggleMobileMenu(false)" ${item.path.startsWith('http') ? 'target="_blank"' : ''} class="block py-1.5 text-sm font-semibold text-slate-700 hover:text-blue-700">
                      ${item.label}
                    </a>
                  `).join('')}
                </div>
              </div>
            `;
          }
          return `
            <a href="${menu.path}" onclick="toggleMobileMenu(false)" class="block py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 border-b border-slate-100">
              ${menu.label}
            </a>
          `;
        }).join('')}
        ${ppdb && ppdb.enabled ? `
          <div class="pt-2">
            <a href="${ppdb.buttonLink || '#ppdb'}" target="_blank" onclick="toggleMobileMenu(false)" class="flex items-center justify-center gap-2 w-full py-2.5 bg-blue-700 text-white rounded-xl font-bold text-sm shadow-md">
              <i data-lucide="user-plus" class="w-4 h-4"></i>
              ${ppdb.buttonLabel || 'Info PPDB'}
            </a>
          </div>
        ` : ''}
        <div class="pt-2">
          <button onclick="toggleMobileMenu(false); openAdminLoginModal();" class="flex items-center justify-center gap-2 w-full py-2.5 border border-slate-200 text-slate-700 rounded-xl font-semibold text-sm hover:bg-slate-50">
            <i data-lucide="lock" class="w-4 h-4 text-slate-500"></i>
            Login Panel Admin (sman10bks)
          </button>
        </div>
      </div>
    `;
  }
}

function toggleMobileMenu(forceState) {
  const drawer = document.getElementById("mobile-menu-container");
  if (!drawer) return;
  if (forceState !== undefined) {
    if (forceState) drawer.classList.remove("hidden");
    else drawer.classList.add("hidden");
  } else {
    drawer.classList.toggle("hidden");
  }
  if (window.lucide) lucide.createIcons();
}

// 4. Hero Section
function renderHero() {
  const header = state.config.header;
  if (!header) return;

  const titleEl = document.getElementById("hero-title");
  if (titleEl) titleEl.textContent = header.heroTitle;

  const subtitleEl = document.getElementById("hero-subtitle");
  if (subtitleEl) subtitleEl.textContent = header.heroSubtitle;

  const heroBg = document.getElementById("hero-bg-image");
  if (heroBg && header.heroImageUrl) {
    heroBg.style.backgroundImage = `url('${header.heroImageUrl}')`;
  }

  const heroVideo = document.getElementById("hero-bg-video");
  if (heroVideo) {
    heroVideo.style.display = header.heroVideoEnabled === false ? "none" : "block";
    if (heroVideo.paused) {
      heroVideo.play().catch(() => {});
    }
  }

  applyHeroBrightness(header.heroBrightnessMode || "bright");

  const ctaBtn = document.getElementById("hero-cta-btn");
  if (ctaBtn) {
    ctaBtn.textContent = header.heroCtaText;
    ctaBtn.href = header.heroCtaLink;
  }

  const secCtaBtn = document.getElementById("hero-sec-cta-btn");
  if (secCtaBtn) {
    secCtaBtn.textContent = header.secondaryCtaText;
    secCtaBtn.href = header.secondaryCtaLink;
  }

  const statsContainer = document.getElementById("hero-stats-container");
  if (statsContainer && header.highlights) {
    const iconMap = {
      Award: "award",
      GraduationCap: "graduation-cap",
      Users: "users",
      BookOpen: "book-open"
    };

    statsContainer.innerHTML = header.highlights.map(stat => `
      <div class="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-100/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0 shadow-inner">
            <i data-lucide="${iconMap[stat.icon] || 'check-circle'}" class="w-6 h-6"></i>
          </div>
          <div>
            <p class="text-2xl font-extrabold text-slate-900 tracking-tight">${stat.value}</p>
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">${stat.label}</p>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function applyHeroBrightness(mode) {
  const overlay = document.getElementById("hero-video-overlay");
  const label = document.getElementById("hero-brightness-label");
  const video = document.getElementById("hero-bg-video");
  if (!state.config.header) state.config.header = {};
  state.config.header.heroBrightnessMode = mode;

  if (video) {
    if (mode === "bright") {
      video.style.opacity = "1";
      video.style.filter = "brightness(1.08) contrast(1.05)";
    } else if (mode === "balanced") {
      video.style.opacity = "0.92";
      video.style.filter = "brightness(1) contrast(1)";
    } else {
      video.style.opacity = "0.75";
      video.style.filter = "none";
    }
  }

  if (overlay) {
    if (mode === "bright") {
      overlay.className = "absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/30 to-transparent pointer-events-none transition-all duration-500";
    } else if (mode === "balanced") {
      overlay.className = "absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/20 pointer-events-none transition-all duration-500";
    } else {
      overlay.className = "absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/40 pointer-events-none transition-all duration-500";
    }
  }

  if (label) {
    if (mode === "bright") label.textContent = "Mode Jernih (Terang)";
    else if (mode === "balanced") label.textContent = "Mode Seimbang";
    else label.textContent = "Mode Fokus Teks";
  }
}

function toggleHeroBrightness() {
  const current = (state.config.header && state.config.header.heroBrightnessMode) || "bright";
  const nextMode = current === "bright" ? "balanced" : current === "balanced" ? "contrast" : "bright";
  applyHeroBrightness(nextMode);
  saveConfigState();
  showToast(`Kecerahan Video: ${nextMode === 'bright' ? 'Mode Jernih (Terang)' : nextMode === 'balanced' ? 'Mode Seimbang' : 'Mode Fokus Teks'}`, "info");
}

function toggleHeroVideoPlayback() {
  const video = document.getElementById("hero-bg-video");
  const btn = document.getElementById("btn-hero-playpause");
  if (!video) return;

  if (video.paused) {
    video.play().then(() => {
      if (btn) btn.innerHTML = `<i data-lucide="pause" class="w-3.5 h-3.5"></i>`;
      if (window.lucide) lucide.createIcons();
      showToast("Video latar diputar", "info");
    }).catch(() => {});
  } else {
    video.pause();
    if (btn) btn.innerHTML = `<i data-lucide="play" class="w-3.5 h-3.5"></i>`;
    if (window.lucide) lucide.createIcons();
    showToast("Video latar dijeda", "info");
  }
}

// 5. Sambutan Kepala Sekolah
function renderPrincipalSpeech() {
  const p = state.config.principal;
  if (!p) return;

  const nameEl = document.getElementById("principal-name");
  if (nameEl) nameEl.textContent = p.name;

  const titleEl = document.getElementById("principal-title");
  if (titleEl) titleEl.textContent = p.title;

  const nipEl = document.getElementById("principal-nip");
  if (nipEl) nipEl.textContent = `NIP. ${p.nip}`;

  const quoteEl = document.getElementById("principal-quote");
  if (quoteEl) quoteEl.textContent = `"${p.quote}"`;

  const imgEl = document.getElementById("principal-image");
  if (imgEl) {
    imgEl.src = p.imageUrl;
    imgEl.alt = p.name;
  }
}

function openPrincipalModal() {
  const p = state.config.principal;
  const modal = document.getElementById("principal-speech-modal");
  const contentEl = document.getElementById("principal-speech-full-text");
  if (!modal || !contentEl) return;

  contentEl.innerHTML = p.fullSpeech.split("\n\n").map(paragraph => `<p class="leading-relaxed text-slate-700">${paragraph}</p>`).join('');
  modal.classList.remove("hidden");
  if (window.lucide) lucide.createIcons();
}

function closePrincipalModal() {
  const modal = document.getElementById("principal-speech-modal");
  if (modal) modal.classList.add("hidden");
}

// 6. Profil & Visi Misi
function renderProfileVision() {
  // Populated in index.html with 7 SMAN 10 Bekasi missions
}

// 7. Berita & Pengumuman
function renderNewsSection() {
  const container = document.getElementById("news-grid-container");
  const pinnedContainer = document.getElementById("pinned-news-container");
  if (!container) return;

  let filtered = state.news.filter(item => item.status === "published" || item.status === undefined);

  if (state.activeNewsCategory !== "Semua") {
    filtered = filtered.filter(item => item.category.toLowerCase() === state.activeNewsCategory.toLowerCase());
  }

  if (state.newsSearchQuery.trim() !== "") {
    const q = state.newsSearchQuery.toLowerCase();
    filtered = filtered.filter(item => item.title.toLowerCase().includes(q) || item.summary.toLowerCase().includes(q));
  }

  const pinned = filtered.find(item => item.isPinned) || filtered[0];
  if (pinnedContainer && pinned && state.activeNewsCategory === "Semua" && !state.newsSearchQuery) {
    pinnedContainer.classList.remove("hidden");
    pinnedContainer.innerHTML = `
      <div class="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-blue-800/40 mb-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div class="lg:col-span-7 h-72 sm:h-96 relative overflow-hidden group cursor-pointer" onclick="openNewsDetailModal('${pinned.id}')">
            <img src="${pinned.coverImage}" alt="${pinned.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
            <div class="absolute top-4 left-4 flex gap-2">
              <span class="bg-blue-600 text-white text-xs font-extrabold uppercase px-3 py-1 rounded-lg tracking-wider shadow-md">
                ${pinned.category}
              </span>
              <span class="bg-amber-400 text-slate-950 text-xs font-extrabold uppercase px-2.5 py-1 rounded-lg tracking-wider flex items-center gap-1 shadow-md">
                <i data-lucide="pin" class="w-3.5 h-3.5"></i>
                UNGGULAN
              </span>
            </div>
          </div>
          <div class="lg:col-span-5 p-6 sm:p-8 lg:pl-0 text-white space-y-4">
            <div class="flex items-center gap-4 text-xs font-semibold text-blue-200">
              <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-3.5 h-3.5 text-blue-400"></i> ${pinned.date}</span>
              <span class="flex items-center gap-1"><i data-lucide="user" class="w-3.5 h-3.5 text-blue-400"></i> ${pinned.author}</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold leading-tight text-white hover:text-blue-300 transition-colors cursor-pointer" onclick="openNewsDetailModal('${pinned.id}')">
              ${pinned.title}
            </h3>
            <p class="text-slate-300 text-sm line-clamp-3 leading-relaxed">
              ${pinned.summary}
            </p>
            <div class="pt-2">
              <button onclick="openNewsDetailModal('${pinned.id}')" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all">
                <span>Baca Selengkapnya</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (pinnedContainer) {
    pinnedContainer.classList.add("hidden");
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <i data-lucide="newspaper" class="w-8 h-8"></i>
        </div>
        <h4 class="text-lg font-bold text-slate-700">Tidak ada artikel berita ditemukan</h4>
        <p class="text-sm text-slate-400 mt-1">Gunakan kata kunci lain atau pilih kategori Semua.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
      <div class="relative h-48 overflow-hidden cursor-pointer" onclick="openNewsDetailModal('${item.id}')">
        <img src="${item.coverImage}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div class="absolute top-3 left-3">
          <span class="bg-blue-900/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
            ${item.category}
          </span>
        </div>
        ${item.isPinned ? `
          <div class="absolute top-3 right-3">
            <span class="bg-amber-400 text-slate-950 p-1.5 rounded-md shadow-sm">
              <i data-lucide="pin" class="w-3.5 h-3.5"></i>
            </span>
          </div>
        ` : ''}
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div class="space-y-2">
          <div class="flex items-center gap-3 text-xs text-slate-400 font-medium">
            <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-3.5 h-3.5"></i> ${item.date}</span>
            <span>•</span>
            <span class="flex items-center gap-1"><i data-lucide="eye" class="w-3.5 h-3.5"></i> ${item.views || 100}</span>
          </div>
          <h4 class="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-700 transition-colors line-clamp-2 cursor-pointer" onclick="openNewsDetailModal('${item.id}')">
            ${item.title}
          </h4>
          <p class="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
            ${item.summary}
          </p>
        </div>
        <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span class="text-xs font-medium text-slate-400">${item.author}</span>
          <button onclick="openNewsDetailModal('${item.id}')" class="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>Baca</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function setNewsCategory(cat) {
  state.activeNewsCategory = cat;
  
  const buttons = document.querySelectorAll(".news-cat-btn");
  buttons.forEach(btn => {
    if (btn.dataset.category === cat) {
      btn.className = "news-cat-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-700 text-white shadow-md";
    } else {
      btn.className = "news-cat-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors";
    }
  });

  renderNewsSection();
  if (window.lucide) lucide.createIcons();
}

function handleNewsSearch(query) {
  state.newsSearchQuery = query;
  renderNewsSection();
  if (window.lucide) lucide.createIcons();
}

function openNewsDetailModal(id) {
  const item = state.news.find(n => n.id === id);
  if (!item) return;

  item.views = (item.views || 0) + 1;
  saveNewsState();

  const modal = document.getElementById("news-detail-modal");
  const modalContent = document.getElementById("news-detail-content");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl mb-6">
      <img src="${item.coverImage}" alt="${item.title}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
      <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
        <span class="bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-lg">
          ${item.category}
        </span>
        <div class="flex items-center gap-3 text-xs text-slate-200">
          <span><i data-lucide="calendar" class="w-3.5 h-3.5 inline mr-1"></i>${item.date}</span>
          <span><i data-lucide="user" class="w-3.5 h-3.5 inline mr-1"></i>${item.author}</span>
          <span><i data-lucide="eye" class="w-3.5 h-3.5 inline mr-1"></i>${item.views} dilihat</span>
        </div>
      </div>
    </div>

    <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight mb-4">
      ${item.title}
    </h2>

    <div class="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 mb-6">
      ${item.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}
    </div>

    ${item.actionLink ? `
      <div class="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center">
            <i data-lucide="external-link" class="w-5 h-5"></i>
          </div>
          <div>
            <p class="text-xs font-semibold text-slate-500">Tautan Terkait</p>
            <p class="text-sm font-bold text-slate-800">${item.actionLink.label}</p>
          </div>
        </div>
        <a href="${item.actionLink.url}" target="_blank" rel="noopener noreferrer" class="bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md transition-colors">
          Kunjungi
        </a>
      </div>
    ` : ''}

    <div class="border-t border-slate-100 pt-4 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <button onclick="shareArticle('${item.title}')" class="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors">
          <i data-lucide="share-2" class="w-3.5 h-3.5"></i>
          Bagikan
        </button>
      </div>
      <button onclick="closeNewsDetailModal()" class="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors">
        Tutup
      </button>
    </div>
  `;

  modal.classList.remove("hidden");
  if (window.lucide) lucide.createIcons();
}

function closeNewsDetailModal() {
  const modal = document.getElementById("news-detail-modal");
  if (modal) modal.classList.add("hidden");
}

function shareArticle(title) {
  if (navigator.share) {
    navigator.share({
      title: title,
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast("Tautan artikel SMAN 10 Bekasi berhasil disalin!", "success");
  }
}

// 8. Agenda Kegiatan
function renderAgendas() {
  const container = document.getElementById("agenda-timeline-container");
  if (!container) return;

  const agendas = state.config.agendas || [];
  if (agendas.length === 0) {
    container.innerHTML = `<p class="text-slate-400 text-sm italic">Belum ada agenda terdaftar.</p>`;
    return;
  }

  container.innerHTML = agendas.map((item, idx) => `
    <div class="flex gap-4 sm:gap-6 group">
      <div class="flex flex-col items-center">
        <div class="w-10 h-10 rounded-2xl bg-blue-700 text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
          ${idx + 1}
        </div>
        ${idx < agendas.length - 1 ? '<div class="w-0.5 flex-1 bg-slate-200 my-2"></div>' : ''}
      </div>
      <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-md hover:shadow-lg transition-shadow flex-1 mb-4">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span class="bg-blue-50 text-blue-800 text-xs font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
            ${item.category}
          </span>
          <span class="text-xs font-bold text-slate-400 flex items-center gap-1">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i>
            ${item.time}
          </span>
        </div>
        <h4 class="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
          ${item.title}
        </h4>
        <div class="mt-3 flex flex-wrap gap-4 text-xs font-medium text-slate-500">
          <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-3.5 h-3.5 text-blue-600"></i> ${item.date}</span>
          <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-rose-500"></i> ${item.location}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// 9. Sarana & Fasilitas
function renderFacilities() {
  const container = document.getElementById("facilities-grid-container");
  if (!container) return;

  const facs = state.config.facilities || [];
  container.innerHTML = facs.map(item => `
    <div class="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col">
      <div class="h-48 relative overflow-hidden cursor-pointer" onclick="openLightbox('${item.imageUrl}', '${item.title}')">
        <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div class="absolute top-3 left-3">
          <span class="bg-blue-950/85 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
            ${item.category}
          </span>
        </div>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 class="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-700 transition-colors">
            ${item.title}
          </h4>
          <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
            ${item.description}
          </p>
        </div>
      </div>
    </div>
  `).join('');
}

// 10. Ekstrakurikuler (19 Organisasi Resmi SMAN 10 Bekasi)
function renderExtracurriculars() {
  const container = document.getElementById("ekskul-grid-container");
  if (!container) return;

  const ekskuls = state.config.extracurriculars || [];
  const iconMap = {
    Flag: "flag",
    Music: "music",
    HeartHandshake: "heart-handshake",
    Cpu: "cpu",
    Trophy: "trophy",
    MessageSquare: "message-square",
    Award: "award",
    Shield: "shield",
    Compass: "compass",
    Star: "star",
    Users: "users"
  };

  container.innerHTML = ekskuls.map(item => `
    <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors">
            <i data-lucide="${iconMap[item.icon] || 'star'}" class="w-6 h-6"></i>
          </div>
          <span class="bg-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-1 rounded-md">
            ${item.category}
          </span>
        </div>
        <h4 class="font-bold text-slate-900 text-base mb-1.5 group-hover:text-blue-700 transition-colors">
          ${item.name}
        </h4>
        <p class="text-xs text-slate-500 leading-relaxed mb-4">
          ${item.description}
        </p>
      </div>
      <div class="border-t border-slate-100 pt-3 space-y-1 text-xs text-slate-500 font-medium">
        <p class="flex items-center gap-1.5"><i data-lucide="user-check" class="w-3.5 h-3.5 text-blue-600"></i> ${item.coach}</p>
        <p class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-3.5 h-3.5 text-emerald-600"></i> ${item.schedule}</p>
      </div>
    </div>
  `).join('');
}

// 11. Media Embeds & Video Slider
function renderEmbeds() {
  const emb = state.config.embeds;
  if (!emb) return;

  if (!state.config.videos || !Array.isArray(state.config.videos) || state.config.videos.length === 0) {
    state.config.videos = JSON.parse(JSON.stringify(DEFAULT_CONFIG.videos));
  }

  let activeVid = null;
  if (emb.activeVideoId) {
    activeVid = state.config.videos.find(v => v.id === emb.activeVideoId);
  }
  if (!activeVid && state.config.videos.length > 0) {
    activeVid = state.config.videos[0];
  }

  const ytTitle = document.getElementById("youtube-title");
  if (ytTitle) ytTitle.textContent = activeVid ? activeVid.title : emb.youtubeTitle;

  const ytSub = document.getElementById("youtube-subtitle");
  if (ytSub) ytSub.textContent = activeVid ? activeVid.subtitle : emb.youtubeSubtitle;

  const ytBadge = document.getElementById("youtube-category-badge");
  if (ytBadge) ytBadge.textContent = activeVid ? activeVid.category : (emb.youtubeCategory || "MPLS & Profil");

  const ytDate = document.getElementById("youtube-date-text");
  if (ytDate) ytDate.textContent = activeVid ? activeVid.date : (emb.youtubeDate || "Tahun Ajaran 2026/2027");

  const targetEmbedRaw = activeVid ? activeVid.embedUrl : emb.youtubeUrl;
  const targetEmbed = targetEmbedRaw ? targetEmbedRaw.replace("www.youtube.com/embed/", "www.youtube-nocookie.com/embed/") : "";

  const ytFrame = document.getElementById("youtube-iframe");
  if (ytFrame && targetEmbed) {
    ytFrame.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    ytFrame.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    const formattedUrl = targetEmbed.includes("?") ? `${targetEmbed}&rel=0` : `${targetEmbed}?rel=0`;
    if (!ytFrame.src.includes(targetEmbed)) {
      ytFrame.src = formattedUrl;
    }
  }

  const ytDirect = document.getElementById("youtube-direct-link");
  const watchUrl = activeVid ? (activeVid.watchUrl || activeVid.embedUrl.replace("/embed/", "/watch?v=")) : "https://www.youtube.com/@SMAN10BEKASI";
  if (ytDirect) {
    ytDirect.href = watchUrl;
  }

  // Handle local file:/// protocol notice
  const noticeEl = document.getElementById("file-protocol-notice");
  const noticeLink = document.getElementById("file-notice-yt-link");
  if (window.location.protocol === 'file:') {
    if (noticeEl) noticeEl.classList.remove("hidden");
    if (noticeLink) noticeLink.href = watchUrl;
  } else {
    if (noticeEl) noticeEl.classList.add("hidden");
  }

  const mapFrame = document.getElementById("maps-iframe");
  if (mapFrame && emb.mapIframeUrl) mapFrame.src = emb.mapIframeUrl;

  renderVideoSlider();
}

function renderVideoSlider() {
  const track = document.getElementById("video-slider-track");
  if (!track) return;

  const videos = state.config.videos || [];
  const currentVidId = (state.config.embeds && state.config.embeds.activeVideoId) || (videos[0] ? videos[0].id : null);

  if (videos.length === 0) {
    track.innerHTML = `<p class="text-sm text-slate-400 py-4">Belum ada koleksi video slide.</p>`;
    return;
  }

  track.innerHTML = videos.map((vid) => {
    const isActive = vid.id === currentVidId;
    const maxThumb = `https://img.youtube.com/vi/${vid.youtubeId}/maxresdefault.jpg`;
    const hqThumb = `https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`;
    return `
      <div onclick="selectVideo('${vid.id}')" class="video-slide-card flex-shrink-0 w-64 sm:w-72 bg-white rounded-2xl border ${isActive ? 'border-blue-600 ring-2 ring-blue-500/30 shadow-lg' : 'border-slate-200/80 hover:border-slate-300 shadow-sm'} p-3.5 cursor-pointer group transition-all duration-200">
        <div class="relative aspect-video rounded-xl overflow-hidden bg-slate-900 mb-2.5">
          <img src="${vid.thumbnail || maxThumb}" alt="${vid.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="if(this.src!=='${hqThumb}'){this.src='${hqThumb}';}else{this.src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&auto=format&fit=crop&q=80';}" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
          
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-10 h-10 rounded-full ${isActive ? 'bg-blue-600 text-white shadow-lg ring-2 ring-white/50' : 'bg-white/90 text-slate-900 group-hover:bg-rose-600 group-hover:text-white'} flex items-center justify-center transition-all duration-200 transform group-hover:scale-110">
              <i data-lucide="${isActive ? 'volume-2' : 'play'}" class="w-4 h-4 ml-0.5"></i>
            </div>
          </div>

          <div class="absolute bottom-2 right-2 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
            ${vid.duration || 'Video'}
          </div>

          ${isActive ? `
            <div class="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              Aktif
            </div>
          ` : `
            <div class="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs text-slate-200 text-[10px] font-semibold px-2 py-0.5 rounded-md">
              ${vid.category || 'Dokumentasi'}
            </div>
          `}
        </div>

        <div>
          <h4 class="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-blue-700 transition-colors">
            ${vid.title}
          </h4>
          <div class="flex items-center justify-between text-[11px] text-slate-400 mt-2 pt-2 border-t border-slate-100">
            <span>${vid.date || 'SMAN 10'}</span>
            <div class="flex items-center gap-2">
              <button type="button" onclick="event.stopPropagation(); openVideoModal('${vid.id}')" class="px-2 py-0.5 rounded bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 text-[10px] font-bold flex items-center gap-1 transition-colors" title="Putar di Modal Popup">
                <i data-lucide="maximize-2" class="w-2.5 h-2.5"></i>
                Popup
              </button>
              <span class="${isActive ? 'text-blue-600 font-bold' : 'text-rose-600 font-semibold'} flex items-center gap-0.5">
                ${isActive ? 'Aktif' : 'Putar'}
                <i data-lucide="chevron-right" class="w-3 h-3"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function selectVideo(videoId) {
  const videos = state.config.videos || [];
  const vid = videos.find(v => v.id === videoId);
  if (!vid) return;

  const nocookieEmbed = vid.embedUrl.replace("www.youtube.com/embed/", "www.youtube-nocookie.com/embed/");

  if (!state.config.embeds) state.config.embeds = {};
  state.config.embeds.activeVideoId = vid.id;
  state.config.embeds.youtubeTitle = vid.title;
  state.config.embeds.youtubeSubtitle = vid.subtitle;
  state.config.embeds.youtubeCategory = vid.category;
  state.config.embeds.youtubeDate = vid.date;
  state.config.embeds.youtubeUrl = nocookieEmbed;

  const ytTitle = document.getElementById("youtube-title");
  if (ytTitle) ytTitle.textContent = vid.title;

  const ytSub = document.getElementById("youtube-subtitle");
  if (ytSub) ytSub.textContent = vid.subtitle;

  const ytBadge = document.getElementById("youtube-category-badge");
  if (ytBadge) ytBadge.textContent = vid.category;

  const ytDate = document.getElementById("youtube-date-text");
  if (ytDate) ytDate.textContent = vid.date;

  const ytFrame = document.getElementById("youtube-iframe");
  if (ytFrame) {
    ytFrame.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    ytFrame.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    const embedUrl = nocookieEmbed.includes("?") 
      ? `${nocookieEmbed}&autoplay=1&rel=0` 
      : `${nocookieEmbed}?autoplay=1&rel=0`;
    ytFrame.src = embedUrl;
  }

  const ytDirect = document.getElementById("youtube-direct-link");
  const watchUrl = vid.watchUrl || vid.embedUrl.replace("/embed/", "/watch?v=");
  if (ytDirect) {
    ytDirect.href = watchUrl;
  }

  const noticeLink = document.getElementById("file-notice-yt-link");
  if (noticeLink) {
    noticeLink.href = watchUrl;
  }

  renderVideoSlider();

  // Selalu arahkan pandangan layar ke pemutar video utama (Desktop & Mobile)
  const playerEl = document.getElementById("video-profil");
  if (playerEl) {
    playerEl.scrollIntoView({ behavior: "smooth", block: "center" });
    // Berikan efek highlight kilau biru agar pengguna langsung melihat video yang sedang diputar
    playerEl.classList.add("ring-4", "ring-blue-500", "ring-offset-4", "transition-all", "duration-500");
    setTimeout(() => {
      playerEl.classList.remove("ring-4", "ring-blue-500", "ring-offset-4");
    }, 2000);
  }

  showToast(`Memutar di layar utama: ${vid.title}`, "info");
}

function openVideoModal(videoId) {
  const videos = state.config.videos || [];
  const vid = videos.find(v => v.id === videoId) || videos[0];
  if (!vid) return;

  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("video-modal-iframe");
  const titleEl = document.getElementById("video-modal-title");
  const subEl = document.getElementById("video-modal-subtitle");
  const catEl = document.getElementById("video-modal-category");
  const extLink = document.getElementById("video-modal-external-link");

  let cleanId = vid.youtubeId;
  if (!cleanId && vid.embedUrl) {
    if (vid.embedUrl.includes("/embed/")) {
      cleanId = vid.embedUrl.split("/embed/")[1].split("?")[0];
    }
  }

  const nocookieEmbed = cleanId 
    ? `https://www.youtube-nocookie.com/embed/${cleanId}` 
    : vid.embedUrl.replace("youtube.com", "youtube-nocookie.com");
  const watchUrl = vid.watchUrl || (cleanId ? `https://www.youtube.com/watch?v=${cleanId}` : vid.embedUrl);

  if (titleEl) titleEl.textContent = vid.title;
  if (subEl) subEl.textContent = vid.subtitle || "Dokumentasi Kegiatan & Prestasi SMAN 10 Bekasi";
  if (catEl) catEl.textContent = vid.category || "Video";
  if (extLink) extLink.href = watchUrl;

  if (iframe) {
    iframe.src = `${nocookieEmbed}?autoplay=1&rel=0`;
  }

  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  if (window.lucide) lucide.createIcons();
}

function closeVideoModal() {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("video-modal-iframe");
  if (iframe) {
    iframe.src = "";
  }
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  }
}

function prevVideoSlide() {
  const track = document.getElementById("video-slider-track");
  if (track) {
    track.scrollBy({ left: -320, behavior: "smooth" });
  }
}

function nextVideoSlide() {
  const track = document.getElementById("video-slider-track");
  if (track) {
    track.scrollBy({ left: 320, behavior: "smooth" });
  }
}

function copyCurrentVideoUrl() {
  const emb = state.config.embeds;
  const currentVid = (state.config.videos || []).find(v => v.id === emb.activeVideoId);
  const urlToCopy = (currentVid && currentVid.watchUrl) ? currentVid.watchUrl : (emb.youtubeUrl || "https://www.youtube.com/@SMAN10BEKASI");

  navigator.clipboard.writeText(urlToCopy).then(() => {
    showToast("Tautan video resmi SMAN 10 berhasil disalin ke clipboard!", "success");
  }).catch(() => {
    prompt("Salin tautan video resmi SMAN 10 Bekasi:", urlToCopy);
  });
}


// 12. PPDB Section
function renderPPDBSection() {
  const p = state.config.ppdb;
  const container = document.getElementById("ppdb-info-card");
  if (!container || !p) return;

  container.innerHTML = `
    <div class="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
      <div class="absolute -right-16 -top-16 w-64 h-64 bg-blue-500/15 rounded-full blur-2xl pointer-events-none"></div>
      <div class="relative z-10 max-w-3xl space-y-4">
        <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-amber-300">
          <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
          ${p.badgeText || 'Tahun Ajaran 2026/2027'}
        </div>
        <h3 class="text-2xl sm:text-4xl font-extrabold leading-tight">
          Penerimaan Peserta Didik Baru (PPDB) SMAN 10 Bekasi
        </h3>
        <p class="text-slate-200 text-sm sm:text-base leading-relaxed">
          ${p.announcement}
        </p>
        <div class="pt-4 flex flex-wrap gap-4 items-center">
          <a href="${p.buttonLink || 'https://disdik.jabarprov.go.id'}" target="_blank" rel="noopener noreferrer" class="bg-white text-blue-950 hover:bg-amber-300 hover:text-slate-950 px-6 py-3 rounded-xl font-bold text-sm shadow-xl transition-all flex items-center gap-2">
            <i data-lucide="external-link" class="w-4 h-4"></i>
            ${p.buttonLabel || 'Portal Resmi Disdik Jabar'}
          </a>
          <a href="tel:(021)88975928" class="bg-blue-800/60 hover:bg-blue-700/80 border border-white/20 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors flex items-center gap-2">
            <i data-lucide="phone" class="w-4 h-4"></i>
            ${p.contactPerson}
          </a>
        </div>
      </div>
    </div>
  `;
}

// 13. Footer
function renderFooter() {
  const f = state.config.footer;
  if (!f) return;

  const aboutEl = document.getElementById("footer-about-text");
  if (aboutEl) aboutEl.textContent = f.aboutText;

  const addressEl = document.getElementById("footer-address");
  if (addressEl) addressEl.textContent = f.address;

  const phoneEl = document.getElementById("footer-phone");
  if (phoneEl) phoneEl.textContent = f.phone;

  const waEl = document.getElementById("footer-wa");
  if (waEl) {
    waEl.textContent = f.whatsapp;
    waEl.href = `https://wa.me/${f.whatsapp.replace(/[^0-9]/g, '')}`;
  }

  const emailEl = document.getElementById("footer-email");
  if (emailEl) {
    emailEl.textContent = f.email;
    emailEl.href = `mailto:${f.email}`;
  }

  const hoursEl = document.getElementById("footer-hours");
  if (hoursEl) hoursEl.textContent = f.openingHours;

  const copyEl = document.getElementById("footer-copyright");
  if (copyEl) copyEl.textContent = f.copyright;
}

// 14. Mobile Bottom Dock
function renderMobileDock() {
  const dock = document.getElementById("mobile-bottom-dock");
  if (!dock) return;

  const mb = state.config.mobileBottomNav;
  if (!mb || !mb.enabled) {
    dock.classList.add("hidden");
    return;
  }
  dock.classList.remove("hidden");
}

// ==========================================
// 5. LIGHTBOX MODAL
// ==========================================
function openLightbox(imageUrl, caption = "") {
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-image");
  const cap = document.getElementById("lightbox-caption");
  if (!modal || !img) return;

  img.src = imageUrl;
  if (cap) cap.textContent = caption;
  modal.classList.remove("hidden");
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (modal) modal.classList.add("hidden");
}

// ==========================================
// 6. ADMIN CMS ENGINE (MODAL & MANAGEMENT)
// ==========================================
function openAdminLoginModal() {
  const isAuth = sessionStorage.getItem("admin_authenticated") === "true";
  if (isAuth) {
    openAdminDashboard();
  } else {
    const modal = document.getElementById("admin-login-modal");
    if (modal) {
      modal.classList.remove("hidden");
      const input = document.getElementById("admin-password-input");
      if (input) {
        input.value = "";
        setTimeout(() => input.focus(), 100);
      }
    }
  }
  if (window.lucide) lucide.createIcons();
}

function closeAdminLoginModal() {
  const modal = document.getElementById("admin-login-modal");
  if (modal) modal.classList.add("hidden");
}

function handleAdminLogin(event) {
  event.preventDefault();
  const input = document.getElementById("admin-password-input");
  const pwd = input ? input.value : "";

  if (pwd === (state.config.adminPassword || "sman10bks")) {
    sessionStorage.setItem("admin_authenticated", "true");
    closeAdminLoginModal();
    openAdminDashboard();
    showToast("Login Admin SMAN 10 Bekasi berhasil!", "success");
  } else {
    showToast("Kata sandi salah! (Sandi resmi: sman10bks)", "error");
    if (input) {
      input.classList.add("border-rose-500");
      setTimeout(() => input.classList.remove("border-rose-500"), 1500);
    }
  }
}

function adminLogout() {
  sessionStorage.removeItem("admin_authenticated");
  closeAdminDashboard();
  showToast("Anda telah keluar dari mode admin SMAN 10 Bekasi.", "info");
}

function openAdminDashboard() {
  const modal = document.getElementById("admin-dashboard-modal");
  if (!modal) return;
  modal.classList.remove("hidden");
  renderAdminDashboard();
  if (window.lucide) lucide.createIcons();
}

function closeAdminDashboard() {
  const modal = document.getElementById("admin-dashboard-modal");
  if (modal) modal.classList.add("hidden");
}

function setAdminTab(tabId) {
  state.activeAdminTab = tabId;
  renderAdminDashboard();
  if (window.lucide) lucide.createIcons();
}

function renderAdminDashboard() {
  const tabsList = [
    { id: "header", label: "Header & Identitas", icon: "school" },
    { id: "theme", label: "Warna & Tema Website", icon: "palette" },
    { id: "ticker", label: "Teks Berjalan (Ticker)", icon: "radio" },
    { id: "ppdb", label: "PPDB Online", icon: "user-plus" },
    { id: "posts", label: "Postingan Berita", icon: "newspaper" },
    { id: "agenda", label: "Agenda & Jadwal", icon: "calendar" },
    { id: "facilities", label: "Fasilitas & Ekskul", icon: "layout-grid" },
    { id: "layout", label: "Tata Letak", icon: "layout" },
    { id: "principal", label: "Sambutan Pimpinan", icon: "user" },
    { id: "embeds", label: "Embed Video & Peta", icon: "youtube" },
    { id: "footer", label: "Footer & Kontak", icon: "phone" },
    { id: "sync", label: "Backup & Restore", icon: "database" }
  ];

  const sidebarContainer = document.getElementById("admin-sidebar-menu");
  if (sidebarContainer) {
    sidebarContainer.innerHTML = tabsList.map(t => {
      const active = state.activeAdminTab === t.id;
      return `
        <button onclick="setAdminTab('${t.id}')" class="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-left transition-all ${active ? 'bg-blue-700 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}">
          <i data-lucide="${t.icon}" class="w-4 h-4 flex-shrink-0"></i>
          <span>${t.label}</span>
        </button>
      `;
    }).join('');
  }

  const bodyContainer = document.getElementById("admin-tab-content");
  if (!bodyContainer) return;

  switch (state.activeAdminTab) {
    case "header":
      renderAdminHeaderTab(bodyContainer);
      break;
    case "theme":
      renderAdminThemeTab(bodyContainer);
      break;
    case "ticker":
      renderAdminTickerTab(bodyContainer);
      break;
    case "ppdb":
      renderAdminPPDBTab(bodyContainer);
      break;
    case "posts":
      renderAdminPostsTab(bodyContainer);
      break;
    case "agenda":
      renderAdminAgendaTab(bodyContainer);
      break;
    case "facilities":
      renderAdminFacilitiesTab(bodyContainer);
      break;
    case "layout":
      renderAdminLayoutTab(bodyContainer);
      break;
    case "principal":
      renderAdminPrincipalTab(bodyContainer);
      break;
    case "embeds":
      renderAdminEmbedsTab(bodyContainer);
      break;
    case "footer":
      renderAdminFooterTab(bodyContainer);
      break;
    case "sync":
      renderAdminSyncTab(bodyContainer);
      break;
    default:
      renderAdminHeaderTab(bodyContainer);
  }
}

// ADMIN TAB 1: Header & Identitas
function renderAdminHeaderTab(el) {
  const c = state.config;
  el.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h3 class="text-lg font-bold text-slate-900">Header & Identitas SMAN 10 Bekasi</h3>
          <p class="text-xs text-slate-500">Ubah nama resmi sekolah, NPSN, akreditasi, logo, dan hero banner.</p>
        </div>
        <button onclick="saveAdminHeaderForm()" class="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2">
          <i data-lucide="save" class="w-4 h-4"></i>
          Simpan Perubahan
        </button>
      </div>

      <form id="admin-header-form" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">Nama Sekolah</label>
          <input type="text" id="adm-name" value="${c.identity.name}" class="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-hidden" />
        </div>
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">Nama Pendek (Singkatan)</label>
          <input type="text" id="adm-short-name" value="${c.identity.shortName}" class="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-hidden" />
        </div>
        <div class="space-y-1 md:col-span-2">
          <label class="text-xs font-bold text-slate-700">Kata Sandi Admin CMS</label>
          <input type="text" id="adm-pwd" value="${c.adminPassword || 'sman10bks'}" class="w-full px-3 py-2 border rounded-xl text-sm font-mono text-blue-700 font-bold focus:ring-2 focus:ring-blue-500 outline-hidden" />
        </div>
        <div class="space-y-1 md:col-span-2">
          <label class="text-xs font-bold text-slate-700">Tagline / Visi Singkat</label>
          <input type="text" id="adm-tagline" value="${c.identity.tagline}" class="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-hidden" />
        </div>
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">NPSN</label>
          <input type="text" id="adm-npsn" value="${c.identity.npsn}" class="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-hidden" />
        </div>
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">Status Akreditasi</label>
          <input type="text" id="adm-akreditasi" value="${c.identity.akreditasi}" class="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-hidden" />
        </div>
        <div class="space-y-1 md:col-span-2">
          <label class="text-xs font-bold text-slate-700">Logo Sekolah (URL Gambar)</label>
          <input type="text" id="adm-logo" value="${c.identity.logoUrl}" class="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-hidden" />
        </div>

        <div class="md:col-span-2 pt-4 border-t border-slate-100">
          <h4 class="text-sm font-bold text-slate-900 mb-2">Hero Section Banner</h4>
        </div>
        <div class="space-y-1 md:col-span-2">
          <label class="text-xs font-bold text-slate-700">Judul Hero (Welcome Title)</label>
          <input type="text" id="adm-hero-title" value="${c.header.heroTitle}" class="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-hidden" />
        </div>
        <div class="space-y-1 md:col-span-2">
          <label class="text-xs font-bold text-slate-700">Subjudul Hero</label>
          <textarea id="adm-hero-sub" rows="2" class="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-hidden">${c.header.heroSubtitle}</textarea>
        </div>
        <div class="space-y-1 md:col-span-2">
          <label class="text-xs font-bold text-slate-700">Gambar Latar Hero (URL)</label>
          <input type="text" id="adm-hero-img" value="${c.header.heroImageUrl}" class="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-hidden" />
        </div>
        <div class="space-y-1 md:col-span-2">
          <label class="text-xs font-bold text-slate-700">Video Latar Hero WebM / MP4 (Background Video SMAN 10)</label>
          <input type="text" id="adm-hero-vid" value="${c.header.heroVideoUrl || 'https://www.sman10bekasi.sch.id/media/vid/background.webm'}" class="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-hidden font-mono text-xs" />
        </div>
      </form>
    </div>
  `;
}

function saveAdminHeaderForm() {
  const c = state.config;
  c.identity.name = document.getElementById("adm-name").value;
  c.identity.shortName = document.getElementById("adm-short-name").value;
  c.identity.tagline = document.getElementById("adm-tagline").value;
  c.identity.npsn = document.getElementById("adm-npsn").value;
  c.identity.akreditasi = document.getElementById("adm-akreditasi").value;
  c.identity.logoUrl = document.getElementById("adm-logo").value;
  c.adminPassword = document.getElementById("adm-pwd").value || "sman10bks";

  c.header.heroTitle = document.getElementById("adm-hero-title").value;
  c.header.heroSubtitle = document.getElementById("adm-hero-sub").value;
  c.header.heroImageUrl = document.getElementById("adm-hero-img").value;
  const heroVidInput = document.getElementById("adm-hero-vid");
  if (heroVidInput) c.header.heroVideoUrl = heroVidInput.value;

  saveConfigState();
}

// ADMIN TAB 2: Warna & Tema
function renderAdminThemeTab(el) {
  const currentTheme = state.config.identity.primaryColor || "blue";
  const themes = [
    { id: "blue", label: "Navy Blue SMAN 10", color: "#1e3a8a" },
    { id: "indigo", label: "Royal Indigo", color: "#4338ca" },
    { id: "emerald", label: "Emerald Green", color: "#059669" },
    { id: "amber", label: "Warm Amber", color: "#d97706" },
    { id: "rose", label: "Vibrant Rose", color: "#e11d48" },
    { id: "purple", label: "Royal Purple", color: "#7c3aed" },
    { id: "cyan", label: "Ocean Cyan", color: "#0891b2" }
  ];

  el.innerHTML = `
    <div class="space-y-6">
      <div class="border-b border-slate-100 pb-4">
        <h3 class="text-lg font-bold text-slate-900">Warna & Tema Portal</h3>
        <p class="text-xs text-slate-500">Pilih palet warna aksen utama website SMA Negeri 10 Kota Bekasi.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        ${themes.map(t => `
          <div onclick="selectTheme('${t.id}')" class="p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 ${currentTheme === t.id ? 'border-blue-700 bg-blue-50 shadow-md' : 'border-slate-100 hover:border-slate-300'}">
            <span class="w-8 h-8 rounded-full shadow-inner flex-shrink-0" style="background-color: ${t.color}"></span>
            <div>
              <p class="text-sm font-bold text-slate-800">${t.label}</p>
              <p class="text-xs text-slate-400 font-mono">${t.color}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function selectTheme(themeId) {
  state.config.identity.primaryColor = themeId;
  saveConfigState();
  renderAdminDashboard();
}

// ADMIN TAB 3: Ticker (Teks Berjalan)
function renderAdminTickerTab(el) {
  const c = state.config;
  el.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h3 class="text-lg font-bold text-slate-900">Teks Berjalan (Marquee Ticker)</h3>
          <p class="text-xs text-slate-500">Kelola pengumuman darurat / PPDB dan sertifikasi akreditasi SMAN 10 Bekasi.</p>
        </div>
        <button onclick="saveAdminTickerForm()" class="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2">
          <i data-lucide="save" class="w-4 h-4"></i>
          Simpan
        </button>
      </div>

      <div class="space-y-6">
        <div class="bg-blue-50/70 border border-blue-200 rounded-2xl p-5 space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-sm font-bold text-blue-950 flex items-center gap-2">
              <i data-lucide="megaphone" class="w-4 h-4 text-blue-700"></i>
              Banner Pengumuman Berjalan Atas
            </span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" id="adm-ann-enabled" ${c.importantAnnouncement.enabled ? 'checked' : ''} class="sr-only peer">
              <div class="w-11 h-6 bg-slate-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-700"></div>
            </label>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div class="space-y-1">
              <label class="text-xs font-bold text-slate-700">Badge</label>
              <input type="text" id="adm-ann-badge" value="${c.importantAnnouncement.badge}" class="w-full px-3 py-2 border rounded-xl text-xs bg-white" />
            </div>
            <div class="space-y-1 sm:col-span-3">
              <label class="text-xs font-bold text-slate-700">Teks Pengumuman Berjalan</label>
              <input type="text" id="adm-ann-text" value="${c.importantAnnouncement.text}" class="w-full px-3 py-2 border rounded-xl text-xs bg-white" />
            </div>
          </div>
        </div>

        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-sm font-bold text-slate-900 flex items-center gap-2">
              <i data-lucide="shield-check" class="w-4 h-4 text-amber-500"></i>
              Ticker Status Akreditasi (BAN-S/M)
            </span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" id="adm-accred-enabled" ${c.identity.accreditationTickerEnabled ? 'checked' : ''} class="sr-only peer">
              <div class="w-11 h-6 bg-slate-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-700"></div>
            </label>
          </div>
          <div class="space-y-1">
            <label class="text-xs font-bold text-slate-700">Teks Ticker Akreditasi</label>
            <textarea id="adm-accred-text" rows="2" class="w-full px-3 py-2 border rounded-xl text-xs bg-white">${c.identity.accreditationTickerText}</textarea>
          </div>
        </div>
      </div>
    </div>
  `;
}

function saveAdminTickerForm() {
  const c = state.config;
  c.importantAnnouncement.enabled = document.getElementById("adm-ann-enabled").checked;
  c.importantAnnouncement.badge = document.getElementById("adm-ann-badge").value;
  c.importantAnnouncement.text = document.getElementById("adm-ann-text").value;

  c.identity.accreditationTickerEnabled = document.getElementById("adm-accred-enabled").checked;
  c.identity.accreditationTickerText = document.getElementById("adm-accred-text").value;

  saveConfigState();
}

// ADMIN TAB 4: PPDB Online
function renderAdminPPDBTab(el) {
  const p = state.config.ppdb;
  el.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h3 class="text-lg font-bold text-slate-900">Pengaturan PPDB Online</h3>
          <p class="text-xs text-slate-500">Konfigurasi penerimaan murid baru SMAN 10 Bekasi.</p>
        </div>
        <button onclick="saveAdminPPDBForm()" class="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2">
          <i data-lucide="save" class="w-4 h-4"></i>
          Simpan
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">Tahun Ajaran</label>
          <input type="text" id="adm-ppdb-year" value="${p.academicYear}" class="w-full px-3 py-2 border rounded-xl text-sm" />
        </div>
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">Status Pendaftaran</label>
          <input type="text" id="adm-ppdb-status" value="${p.statusText}" class="w-full px-3 py-2 border rounded-xl text-sm" />
        </div>
        <div class="space-y-1 md:col-span-2">
          <label class="text-xs font-bold text-slate-700">Teks Pengumuman PPDB</label>
          <textarea id="adm-ppdb-ann" rows="3" class="w-full px-3 py-2 border rounded-xl text-sm">${p.announcement}</textarea>
        </div>
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">Kontak Panitia / Sekretariat</label>
          <input type="text" id="adm-ppdb-contact" value="${p.contactPerson}" class="w-full px-3 py-2 border rounded-xl text-sm" />
        </div>
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">Link PPDB Eksternal</label>
          <input type="text" id="adm-ppdb-link" value="${p.buttonLink}" class="w-full px-3 py-2 border rounded-xl text-sm" />
        </div>
      </div>
    </div>
  `;
}

function saveAdminPPDBForm() {
  const p = state.config.ppdb;
  p.academicYear = document.getElementById("adm-ppdb-year").value;
  p.statusText = document.getElementById("adm-ppdb-status").value;
  p.announcement = document.getElementById("adm-ppdb-ann").value;
  p.contactPerson = document.getElementById("adm-ppdb-contact").value;
  p.buttonLink = document.getElementById("adm-ppdb-link").value;

  saveConfigState();
}

// ADMIN TAB 5: Postingan Berita (CRUD)
function renderAdminPostsTab(el) {
  el.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h3 class="text-lg font-bold text-slate-900">Kelola Berita SMAN 10 Bekasi</h3>
          <p class="text-xs text-slate-500">Publikasi kabar sekolah, pengumuman kedinasan, dan dokumentasi prestasi.</p>
        </div>
        <button onclick="openNewsEditorModal()" class="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2">
          <i data-lucide="plus" class="w-4 h-4"></i>
          Tulis Berita Baru
        </button>
      </div>

      <div class="space-y-3">
        ${state.news.map(item => `
          <div class="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow">
            <div class="flex items-center gap-4">
              <img src="${item.coverImage}" class="w-16 h-12 rounded-lg object-cover flex-shrink-0" onerror="this.src='https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80'" />
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800 uppercase">${item.category}</span>
                  ${item.isPinned ? '<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">PINNED</span>' : ''}
                  <span class="text-xs text-slate-400">${item.date}</span>
                </div>
                <h4 class="font-bold text-slate-900 text-sm line-clamp-1">${item.title}</h4>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="togglePinNews('${item.id}')" class="p-2 text-slate-400 hover:text-amber-600 rounded-lg hover:bg-slate-50" title="Pin / Unpin">
                <i data-lucide="pin" class="w-4 h-4 ${item.isPinned ? 'text-amber-500' : ''}"></i>
              </button>
              <button onclick="openNewsEditorModal('${item.id}')" class="p-2 text-slate-400 hover:text-blue-700 rounded-lg hover:bg-slate-50" title="Edit">
                <i data-lucide="edit-3" class="w-4 h-4"></i>
              </button>
              <button onclick="deleteNews('${item.id}')" class="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-50" title="Hapus">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function togglePinNews(id) {
  const item = state.news.find(n => n.id === id);
  if (item) {
    item.isPinned = !item.isPinned;
    saveNewsState();
    renderAdminDashboard();
  }
}

function deleteNews(id) {
  if (confirm("Hapus artikel ini?")) {
    state.news = state.news.filter(n => n.id !== id);
    saveNewsState();
    renderAdminDashboard();
  }
}

function openNewsEditorModal(id = null) {
  state.editingNewsId = id;
  const item = id ? state.news.find(n => n.id === id) : {
    title: "",
    category: "Kegiatan",
    coverImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
    summary: "",
    content: "",
    author: "Admin SMAN 10",
    isPinned: false
  };

  const modal = document.getElementById("news-editor-modal");
  const form = document.getElementById("news-editor-form");
  if (!modal || !form) return;

  document.getElementById("editor-title").value = item.title;
  document.getElementById("editor-category").value = item.category;
  document.getElementById("editor-cover").value = item.coverImage;
  document.getElementById("editor-summary").value = item.summary;
  document.getElementById("editor-content").value = item.content;
  document.getElementById("editor-author").value = item.author;
  document.getElementById("editor-pinned").checked = !!item.isPinned;

  modal.classList.remove("hidden");
  if (window.lucide) lucide.createIcons();
}

function closeNewsEditorModal() {
  const modal = document.getElementById("news-editor-modal");
  if (modal) modal.classList.add("hidden");
}

function saveNewsFromEditor(e) {
  e.preventDefault();
  const id = state.editingNewsId;
  const title = document.getElementById("editor-title").value;
  const category = document.getElementById("editor-category").value;
  const coverImage = document.getElementById("editor-cover").value;
  const summary = document.getElementById("editor-summary").value;
  const content = document.getElementById("editor-content").value;
  const author = document.getElementById("editor-author").value;
  const isPinned = document.getElementById("editor-pinned").checked;

  if (id) {
    const item = state.news.find(n => n.id === id);
    if (item) {
      item.title = title;
      item.category = category;
      item.coverImage = coverImage;
      item.summary = summary;
      item.content = content;
      item.author = author;
      item.isPinned = isPinned;
    }
  } else {
    const now = new Date();
    const dateStr = `${now.getDate().toString().padStart(2, '0')} September 2026`;
    state.news.unshift({
      id: `news-${Date.now()}`,
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category,
      coverImage,
      summary,
      content,
      author,
      date: dateStr,
      views: 1,
      isPinned,
      status: "published"
    });
  }

  saveNewsState();
  closeNewsEditorModal();
  renderAdminDashboard();
}

// ADMIN TAB 6: Agenda & Jadwal
function renderAdminAgendaTab(el) {
  const agendas = state.config.agendas || [];
  el.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h3 class="text-lg font-bold text-slate-900">Agenda & Jadwal Kegiatan SMAN 10</h3>
          <p class="text-xs text-slate-500">Kelola kalender kegiatan sekolah di Harapan Indah.</p>
        </div>
        <button onclick="addAdminAgenda()" class="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2">
          <i data-lucide="plus" class="w-4 h-4"></i>
          Tambah Agenda
        </button>
      </div>

      <div class="space-y-3">
        ${agendas.map((item, idx) => `
          <div class="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-xs">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800">${item.category}</span>
                <span class="text-xs text-slate-400">${item.date} • ${item.time}</span>
              </div>
              <h4 class="font-bold text-slate-900 text-sm">${item.title}</h4>
              <p class="text-xs text-slate-500 mt-0.5"><i data-lucide="map-pin" class="w-3 h-3 inline mr-1 text-rose-500"></i>${item.location}</p>
            </div>
            <button onclick="deleteAdminAgenda(${idx})" class="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-50" title="Hapus">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function addAdminAgenda() {
  const title = prompt("Judul Kegiatan / Agenda:");
  if (!title) return;
  const date = prompt("Tanggal Kegiatan:", "20 September 2026");
  const time = prompt("Waktu:", "08:00 - 12:00 WIB");
  const location = prompt("Lokasi Kegiatan:", "SMAN 10 Kota Bekasi");
  const category = prompt("Kategori:", "Kesiswaan");

  state.config.agendas.push({
    id: `a-${Date.now()}`,
    title,
    date,
    time,
    location,
    category
  });

  saveConfigState();
  renderAdminDashboard();
}

function deleteAdminAgenda(index) {
  if (confirm("Hapus agenda ini?")) {
    state.config.agendas.splice(index, 1);
    saveConfigState();
    renderAdminDashboard();
  }
}

// ADMIN TAB 7: Fasilitas & Ekskul
function renderAdminFacilitiesTab(el) {
  const facs = state.config.facilities || [];
  const ekskuls = state.config.extracurriculars || [];

  el.innerHTML = `
    <div class="space-y-6">
      <div class="border-b border-slate-100 pb-4">
        <h3 class="text-lg font-bold text-slate-900">Fasilitas & 19 Ekstrakurikuler SMAN 10 Bekasi</h3>
        <p class="text-xs text-slate-500">Kelola sarana belajar dan unit kegiatan kesiswaan.</p>
      </div>

      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h4 class="font-bold text-slate-800 text-sm">Daftar Sarana & Fasilitas</h4>
          <button onclick="addFacilityPrompt()" class="px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-xs font-bold">
            + Tambah Fasilitas
          </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${facs.map((f, idx) => `
            <div class="p-3 bg-white rounded-xl border border-slate-100 flex items-center justify-between shadow-xs">
              <div class="flex items-center gap-3">
                <img src="${f.imageUrl}" class="w-10 h-10 rounded-lg object-cover" />
                <div>
                  <p class="text-xs font-bold text-slate-800">${f.title}</p>
                  <p class="text-[11px] text-slate-400">${f.category}</p>
                </div>
              </div>
              <button onclick="deleteFacility(${idx})" class="text-slate-400 hover:text-rose-600 p-1">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="space-y-4 pt-4 border-t border-slate-100">
        <div class="flex items-center justify-between">
          <h4 class="font-bold text-slate-800 text-sm">Daftar Ekstrakurikuler (${ekskuls.length} Organisasi)</h4>
          <button onclick="addEkskulPrompt()" class="px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-xs font-bold">
            + Tambah Ekskul
          </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${ekskuls.map((e, idx) => `
            <div class="p-3 bg-white rounded-xl border border-slate-100 flex items-center justify-between shadow-xs">
              <div>
                <p class="text-xs font-bold text-slate-800">${e.name}</p>
                <p class="text-[11px] text-slate-400">${e.coach} • ${e.schedule}</p>
              </div>
              <button onclick="deleteEkskul(${idx})" class="text-slate-400 hover:text-rose-600 p-1">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function addFacilityPrompt() {
  const title = prompt("Nama Fasilitas:");
  if (!title) return;
  const category = prompt("Kategori:", "Akademik");
  const imageUrl = prompt("URL Gambar:", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=80");
  const description = prompt("Deskripsi:", "Fasilitas lengkap untuk menunjang kegiatan pembelajaran.");

  state.config.facilities.push({
    id: `f-${Date.now()}`,
    title,
    category,
    imageUrl,
    description
  });
  saveConfigState();
  renderAdminDashboard();
}

function deleteFacility(index) {
  if (confirm("Hapus fasilitas ini?")) {
    state.config.facilities.splice(index, 1);
    saveConfigState();
    renderAdminDashboard();
  }
}

function addEkskulPrompt() {
  const name = prompt("Nama Ekstrakurikuler:");
  if (!name) return;
  const category = prompt("Kategori:", "Olahraga");
  const coach = prompt("Pelatih / Pembina:", "Bpk. Guru Pembina");
  const schedule = prompt("Jadwal Latihan:", "Sabtu, 15:00 WIB");
  const description = prompt("Deskripsi singkat:", "Melatih bakat dan potensi murid SMAN 10 Bekasi.");

  state.config.extracurriculars.push({
    id: `e-${Date.now()}`,
    name,
    category,
    coach,
    schedule,
    icon: "Trophy",
    description
  });
  saveConfigState();
  renderAdminDashboard();
}

function deleteEkskul(index) {
  if (confirm("Hapus ekstrakurikuler ini?")) {
    state.config.extracurriculars.splice(index, 1);
    saveConfigState();
    renderAdminDashboard();
  }
}

// ADMIN TAB 8: Tata Letak
function renderAdminLayoutTab(el) {
  const l = state.config.layoutSections;
  const sectionLabels = [
    { key: "showHero", label: "Banner Hero Utama" },
    { key: "showQuickStats", label: "Kartu Statistik Sekolah (1.500+ Murid, 75 Guru)" },
    { key: "showAccreditation", label: "Running Ticker Akreditasi A (20223019)" },
    { key: "showPrincipalSpeech", label: "Sambutan Kepala Sekolah (Dra. Turheni Komar, M.Pd)" },
    { key: "showNews", label: "Portal Berita & Pengumuman" },
    { key: "showAgenda", label: "Agenda & Jadwal Kegiatan" },
    { key: "showFacilities", label: "Sarana & Fasilitas Sekolah" },
    { key: "showExtracurriculars", label: "19 Ekstrakurikuler Siswa" },
    { key: "showVideoEmbed", label: "Video Profil SMAN 10 (YouTube)" },
    { key: "showMapEmbed", label: "Peta Lokasi Harapan Indah (Google Maps)" }
  ];

  el.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h3 class="text-lg font-bold text-slate-900">Tata Letak Beranda SMAN 10 Bekasi</h3>
          <p class="text-xs text-slate-500">Aktifkan atau sembunyikan seksi di portal publik.</p>
        </div>
        <button onclick="saveAdminLayoutForm()" class="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2">
          <i data-lucide="save" class="w-4 h-4"></i>
          Simpan
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${sectionLabels.map(s => `
          <div class="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 shadow-xs">
            <span class="text-sm font-semibold text-slate-700">${s.label}</span>
            <input type="checkbox" id="layout-${s.key}" ${l[s.key] !== false ? 'checked' : ''} class="w-4 h-4 text-blue-700 rounded focus:ring-blue-500" />
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function saveAdminLayoutForm() {
  const l = state.config.layoutSections;
  const keys = Object.keys(l);
  keys.forEach(k => {
    const el = document.getElementById(`layout-${k}`);
    if (el) l[k] = el.checked;
  });
  saveConfigState();
}

// ADMIN TAB 9: Sambutan Pimpinan
function renderAdminPrincipalTab(el) {
  const p = state.config.principal;
  el.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h3 class="text-lg font-bold text-slate-900">Profil & Sambutan Kepala Sekolah</h3>
          <p class="text-xs text-slate-500">Biodata dan naskah sambutan resmi Kepala SMAN 10 Kota Bekasi.</p>
        </div>
        <button onclick="saveAdminPrincipalForm()" class="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2">
          <i data-lucide="save" class="w-4 h-4"></i>
          Simpan
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">Nama Kepala Sekolah & Gelar</label>
          <input type="text" id="adm-p-name" value="${p.name}" class="w-full px-3 py-2 border rounded-xl text-sm" />
        </div>
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">Jabatan Resmi</label>
          <input type="text" id="adm-p-title" value="${p.title}" class="w-full px-3 py-2 border rounded-xl text-sm" />
        </div>
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">NIP</label>
          <input type="text" id="adm-p-nip" value="${p.nip}" class="w-full px-3 py-2 border rounded-xl text-sm" />
        </div>
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">Foto Kepala Sekolah (URL)</label>
          <input type="text" id="adm-p-img" value="${p.imageUrl}" class="w-full px-3 py-2 border rounded-xl text-sm" />
        </div>
        <div class="space-y-1 md:col-span-2">
          <label class="text-xs font-bold text-slate-700">Kutipan Singkat (Quote)</label>
          <textarea id="adm-p-quote" rows="2" class="w-full px-3 py-2 border rounded-xl text-sm">${p.quote}</textarea>
        </div>
        <div class="space-y-1 md:col-span-2">
          <label class="text-xs font-bold text-slate-700">Naskah Sambutan Lengkap</label>
          <textarea id="adm-p-speech" rows="6" class="w-full px-3 py-2 border rounded-xl text-sm leading-relaxed">${p.fullSpeech}</textarea>
        </div>
      </div>
    </div>
  `;
}

function saveAdminPrincipalForm() {
  const p = state.config.principal;
  p.name = document.getElementById("adm-p-name").value;
  p.title = document.getElementById("adm-p-title").value;
  p.nip = document.getElementById("adm-p-nip").value;
  p.imageUrl = document.getElementById("adm-p-img").value;
  p.quote = document.getElementById("adm-p-quote").value;
  p.fullSpeech = document.getElementById("adm-p-speech").value;

  saveConfigState();
}

// ADMIN TAB 10: Embed Video & Peta & Video Slide
function renderAdminEmbedsTab(el) {
  const emb = state.config.embeds;
  const header = state.config.header || {};
  const videos = state.config.videos || [];

  el.innerHTML = `
    <div class="space-y-8">
      <div class="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h3 class="text-lg font-bold text-slate-900">Embed Video, Video Slide & Peta Lokasi</h3>
          <p class="text-xs text-slate-500">Kelola video profil YouTube, video slide kegiatan SMAN 10, video latar hero, dan peta Google Maps.</p>
        </div>
        <button onclick="saveAdminEmbedsForm()" class="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2">
          <i data-lucide="save" class="w-4 h-4"></i>
          Simpan Pengaturan
        </button>
      </div>

      <!-- Hero Video Background -->
      <div class="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="text-sm font-bold text-slate-900 flex items-center gap-2">
            <i data-lucide="film" class="w-4 h-4 text-blue-700"></i>
            Video Latar Banner Hero (Background Video)
          </h4>
          <label class="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
            <input type="checkbox" id="adm-hero-vid-enabled" ${header.heroVideoEnabled !== false ? 'checked' : ''} class="w-4 h-4 text-blue-700 rounded" />
            <span>Aktifkan Video Background</span>
          </label>
        </div>
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">URL File Video WebM / MP4</label>
          <input type="text" id="adm-hero-vid-url" value="${header.heroVideoUrl || 'https://www.sman10bekasi.sch.id/media/vid/background.webm'}" class="w-full px-3 py-2 border rounded-xl text-sm font-mono text-xs" />
          <p class="text-[11px] text-slate-400">URL asli dari portal SMAN 10: https://www.sman10bekasi.sch.id/media/vid/background.webm</p>
        </div>
      </div>

      <!-- Active Video Profil -->
      <div class="p-4 bg-white border border-slate-200/80 rounded-2xl space-y-4">
        <h4 class="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
          <i data-lucide="video" class="w-4 h-4 text-rose-600"></i>
          Video Profil Aktif (YouTube Showcase)
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="text-xs font-bold text-slate-700">Judul Video</label>
            <input type="text" id="adm-emb-yt-title" value="${emb.youtubeTitle || ''}" class="w-full px-3 py-2 border rounded-xl text-sm" />
          </div>
          <div class="space-y-1">
            <label class="text-xs font-bold text-slate-700">Kategori Video</label>
            <input type="text" id="adm-emb-yt-category" value="${emb.youtubeCategory || 'MPLS & Profil'}" class="w-full px-3 py-2 border rounded-xl text-sm" />
          </div>
          <div class="space-y-1 md:col-span-2">
            <label class="text-xs font-bold text-slate-700">Deskripsi / Subjudul</label>
            <textarea id="adm-emb-yt-sub" rows="2" class="w-full px-3 py-2 border rounded-xl text-sm">${emb.youtubeSubtitle || ''}</textarea>
          </div>
          <div class="space-y-1 md:col-span-2">
            <label class="text-xs font-bold text-slate-700">URL Embed YouTube</label>
            <input type="text" id="adm-emb-yt-url" value="${emb.youtubeUrl || ''}" class="w-full px-3 py-2 border rounded-xl text-sm font-mono text-xs" />
          </div>
        </div>
      </div>

      <!-- Video Slide List Manager -->
      <div class="p-4 bg-white border border-slate-200/80 rounded-2xl space-y-4">
        <div class="flex items-center justify-between border-b border-slate-100 pb-2">
          <div>
            <h4 class="text-sm font-bold text-slate-900 flex items-center gap-2">
              <i data-lucide="play-circle" class="w-4 h-4 text-rose-600"></i>
              Koleksi Video Slide SMAN 10 Bekasi (${videos.length} Video)
            </h4>
            <p class="text-xs text-slate-500">Kelola daftar video dokumentasi yang tampil pada slider portal.</p>
          </div>
          <button type="button" onclick="showAddVideoSlideForm()" class="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i>
            Tambah Slide Video
          </button>
        </div>

        <!-- Add Form (hidden by default) -->
        <div id="add-video-slide-form" class="hidden p-4 bg-rose-50/50 border border-rose-200 rounded-xl space-y-3">
          <h5 class="text-xs font-bold text-rose-900 uppercase">Tambah Video Slide Baru</h5>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-700">Judul Video</label>
              <input type="text" id="new-vid-title" placeholder="Contoh: Pentas Seni SMAN 10" class="w-full px-3 py-1.5 border rounded-lg text-xs bg-white" />
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-700">Kategori</label>
              <input type="text" id="new-vid-category" placeholder="Contoh: Seni Budaya" class="w-full px-3 py-1.5 border rounded-lg text-xs bg-white" />
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-700">ID YouTube / URL</label>
              <input type="text" id="new-vid-yt" placeholder="Contoh: hY-x_cvI0kM atau URL embed" class="w-full px-3 py-1.5 border rounded-lg text-xs bg-white" />
            </div>
            <div class="space-y-1">
              <label class="text-xs font-semibold text-slate-700">Durasi</label>
              <input type="text" id="new-vid-duration" placeholder="Contoh: 5:20" class="w-full px-3 py-1.5 border rounded-lg text-xs bg-white" />
            </div>
            <div class="space-y-1 sm:col-span-2">
              <label class="text-xs font-semibold text-slate-700">Keterangan Singkat</label>
              <input type="text" id="new-vid-desc" placeholder="Keterangan singkat dokumentasi video..." class="w-full px-3 py-1.5 border rounded-lg text-xs bg-white" />
            </div>
          </div>
          <div class="flex items-center gap-2 pt-1">
            <button type="button" onclick="saveNewVideoSlide()" class="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold shadow-xs">
              Simpan Slide
            </button>
            <button type="button" onclick="document.getElementById('add-video-slide-form').classList.add('hidden')" class="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-xs font-semibold">
              Batal
            </button>
          </div>
        </div>

        <!-- Video Table / Cards -->
        <div class="space-y-2 max-h-80 overflow-y-auto pr-1">
          ${videos.map((v, i) => `
            <div class="flex items-center justify-between p-3 bg-slate-50 hover:bg-blue-50/40 rounded-xl border border-slate-200/80 transition-colors gap-3">
              <div class="flex items-center gap-3 min-w-0">
                <img src="${v.thumbnail || `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}" class="w-16 h-10 object-cover rounded-lg flex-shrink-0 bg-slate-900" onerror="this.src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=120&auto=format&fit=crop&q=80'" />
                <div class="min-w-0">
                  <p class="text-xs font-bold text-slate-900 truncate">${v.title}</p>
                  <p class="text-[11px] text-slate-500">${v.category} • ${v.duration || 'Video'} • ID: ${v.youtubeId}</p>
                </div>
              </div>
              <div class="flex items-center gap-1.5 flex-shrink-0">
                <button type="button" onclick="setAsFeaturedVideo('${v.id}')" class="px-2.5 py-1 rounded-lg ${v.id === emb.activeVideoId ? 'bg-blue-600 text-white font-bold' : 'bg-white border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-700'} text-[11px] transition-colors" title="Jadikan video yang langsung aktif diputar">
                  ${v.id === emb.activeVideoId ? '★ Utama' : 'Jadikan Utama'}
                </button>
                <button type="button" onclick="deleteVideoSlide(${i})" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors" title="Hapus Slide">
                  <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Google Maps -->
      <div class="p-4 bg-white border border-slate-200/80 rounded-2xl space-y-3">
        <h4 class="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
          <i data-lucide="map-pin" class="w-4 h-4 text-blue-700"></i>
          Peta Lokasi SMAN 10 Bekasi (Google Maps)
        </h4>
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">URL Iframe Google Maps</label>
          <input type="text" id="adm-emb-map-url" value="${emb.mapIframeUrl}" class="w-full px-3 py-2 border rounded-xl text-sm font-mono text-xs" />
        </div>
      </div>
    </div>
  `;
}

function saveAdminEmbedsForm() {
  const emb = state.config.embeds;
  emb.youtubeTitle = document.getElementById("adm-emb-yt-title").value;
  emb.youtubeCategory = document.getElementById("adm-emb-yt-category").value;
  emb.youtubeSubtitle = document.getElementById("adm-emb-yt-sub").value;
  emb.youtubeUrl = document.getElementById("adm-emb-yt-url").value;
  emb.mapIframeUrl = document.getElementById("adm-emb-map-url").value;

  if (state.config.header) {
    const heroVidInput = document.getElementById("adm-hero-vid-url");
    if (heroVidInput) state.config.header.heroVideoUrl = heroVidInput.value;
    const heroVidCheck = document.getElementById("adm-hero-vid-enabled");
    if (heroVidCheck) state.config.header.heroVideoEnabled = heroVidCheck.checked;
  }

  saveConfigState();
}

function showAddVideoSlideForm() {
  const form = document.getElementById("add-video-slide-form");
  if (form) {
    form.classList.remove("hidden");
    const titleInput = document.getElementById("new-vid-title");
    if (titleInput) titleInput.focus();
  }
}

function saveNewVideoSlide() {
  const title = document.getElementById("new-vid-title").value.trim();
  const category = document.getElementById("new-vid-category").value.trim() || "Dokumentasi";
  let ytInput = document.getElementById("new-vid-yt").value.trim();
  const duration = document.getElementById("new-vid-duration").value.trim() || "Video";
  const desc = document.getElementById("new-vid-desc").value.trim() || title;

  if (!title || !ytInput) {
    showToast("Judul dan ID / URL YouTube wajib diisi!", "error");
    return;
  }

  // Extract ID if full URL was pasted
  let ytId = ytInput;
  if (ytInput.includes("youtube.com/embed/")) {
    ytId = ytInput.split("youtube.com/embed/")[1].split("?")[0];
  } else if (ytInput.includes("watch?v=")) {
    ytId = ytInput.split("watch?v=")[1].split("&")[0];
  } else if (ytInput.includes("youtu.be/")) {
    ytId = ytInput.split("youtu.be/")[1].split("?")[0];
  }

  const newVid = {
    id: "vid-" + Date.now(),
    title: title,
    subtitle: desc,
    category: category,
    youtubeId: ytId,
    embedUrl: `https://www.youtube.com/embed/${ytId}`,
    watchUrl: `https://www.youtube.com/watch?v=${ytId}`,
    thumbnail: `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`,
    date: "Tahun 2026",
    duration: duration
  };

  if (!state.config.videos) state.config.videos = [];
  state.config.videos.push(newVid);
  saveConfigState();
  renderAdminDashboard();
  showToast("Video slide baru berhasil ditambahkan!", "success");
}

function deleteVideoSlide(index) {
  if (confirm("Hapus video slide ini dari daftar?")) {
    state.config.videos.splice(index, 1);
    saveConfigState();
    renderAdminDashboard();
    showToast("Video slide berhasil dihapus.", "info");
  }
}

function setAsFeaturedVideo(videoId) {
  const vid = (state.config.videos || []).find(v => v.id === videoId);
  if (!vid) return;

  if (!state.config.embeds) state.config.embeds = {};
  state.config.embeds.activeVideoId = vid.id;
  state.config.embeds.youtubeTitle = vid.title;
  state.config.embeds.youtubeSubtitle = vid.subtitle;
  state.config.embeds.youtubeCategory = vid.category;
  state.config.embeds.youtubeDate = vid.date;
  state.config.embeds.youtubeUrl = vid.embedUrl;

  saveConfigState();
  renderAdminDashboard();
  showToast(`Video "${vid.title}" disetel sebagai video utama!`, "success");
}

// ADMIN TAB 11: Footer & Kontak
function renderAdminFooterTab(el) {
  const f = state.config.footer;
  el.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h3 class="text-lg font-bold text-slate-900">Footer & Kontak Informasi SMAN 10</h3>
          <p class="text-xs text-slate-500">Alamat Harapan Indah, nomor telepon, email, dan jam buka operasional.</p>
        </div>
        <button onclick="saveAdminFooterForm()" class="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2">
          <i data-lucide="save" class="w-4 h-4"></i>
          Simpan
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-1 md:col-span-2">
          <label class="text-xs font-bold text-slate-700">Alamat Lengkap</label>
          <input type="text" id="adm-f-address" value="${f.address}" class="w-full px-3 py-2 border rounded-xl text-sm" />
        </div>
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">Nomor Telepon Kantor</label>
          <input type="text" id="adm-f-phone" value="${f.phone}" class="w-full px-3 py-2 border rounded-xl text-sm" />
        </div>
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">WhatsApp Resmi</label>
          <input type="text" id="adm-f-wa" value="${f.whatsapp}" class="w-full px-3 py-2 border rounded-xl text-sm" />
        </div>
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">Email Sekolah</label>
          <input type="email" id="adm-f-email" value="${f.email}" class="w-full px-3 py-2 border rounded-xl text-sm" />
        </div>
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">Jam Layanan Operasional</label>
          <input type="text" id="adm-f-hours" value="${f.openingHours}" class="w-full px-3 py-2 border rounded-xl text-sm" />
        </div>
        <div class="space-y-1 md:col-span-2">
          <label class="text-xs font-bold text-slate-700">Tentang Singkat SMAN 10 Bekasi</label>
          <textarea id="adm-f-about" rows="2" class="w-full px-3 py-2 border rounded-xl text-sm">${f.aboutText}</textarea>
        </div>
      </div>
    </div>
  `;
}

function saveAdminFooterForm() {
  const f = state.config.footer;
  f.address = document.getElementById("adm-f-address").value;
  f.phone = document.getElementById("adm-f-phone").value;
  f.whatsapp = document.getElementById("adm-f-wa").value;
  f.email = document.getElementById("adm-f-email").value;
  f.openingHours = document.getElementById("adm-f-hours").value;
  f.aboutText = document.getElementById("adm-f-about").value;

  saveConfigState();
}

// ADMIN TAB 12: Backup & Restore
function renderAdminSyncTab(el) {
  el.innerHTML = `
    <div class="space-y-6">
      <div class="border-b border-slate-100 pb-4">
        <h3 class="text-lg font-bold text-slate-900">Cadangan & Pemulihan Data SMAN 10 Bekasi</h3>
        <p class="text-xs text-slate-500">Ekspor seluruh data website ke file JSON cadangan atau impor dari file sebelumnya.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="p-6 bg-blue-50/60 border border-blue-200 rounded-2xl space-y-3">
          <div class="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center">
            <i data-lucide="download" class="w-5 h-5"></i>
          </div>
          <h4 class="font-bold text-slate-900 text-base">Ekspor Data (Backup)</h4>
          <p class="text-xs text-slate-500 leading-relaxed">
            Unduh seluruh konfigurasi SMAN 10 Bekasi, 19 ekskul, berita, agenda, dan fasilitas dalam format JSON.
          </p>
          <button onclick="exportBackupJSON()" class="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-md transition-colors flex items-center justify-center gap-2">
            <i data-lucide="download" class="w-4 h-4"></i>
            Unduh Cadangan JSON SMAN 10
          </button>
        </div>

        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
          <div class="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center">
            <i data-lucide="upload" class="w-5 h-5"></i>
          </div>
          <h4 class="font-bold text-slate-900 text-base">Impor Data (Restore)</h4>
          <p class="text-xs text-slate-500 leading-relaxed">
            Pulihkan data website dari berkas cadangan JSON yang telah disimpan sebelumnya.
          </p>
          <label class="w-full py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer">
            <i data-lucide="upload" class="w-4 h-4"></i>
            Pilih Berkas JSON
            <input type="file" id="import-json-file" accept=".json" onchange="importBackupJSON(event)" class="hidden" />
          </label>
        </div>
      </div>

      <!-- FIREBASE CLOUD FIRESTORE INTEGRATION -->
      <div class="p-6 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-300/60 rounded-2xl space-y-4">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-200/60 pb-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-md">
              <i data-lucide="flame" class="w-6 h-6"></i>
            </div>
            <div>
              <h4 class="font-bold text-slate-900 text-base flex items-center gap-2">
                Firebase Cloud Firestore Database
                <span id="firebase-status-badge" class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${window.FirebaseSync && window.FirebaseSync.isAvailable ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                  ${window.FirebaseSync && window.FirebaseSync.isAvailable ? '● Terhubung (Online)' : '○ Mode Offline / LocalStorage'}
                </span>
              </h4>
              <p class="text-xs text-slate-500">Hubungkan database online Google Firebase agar perubahan berita dan profil langsung dapat dilihat publik di Vercel.</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg border border-amber-300 text-amber-900 hover:bg-amber-100 text-xs font-semibold flex items-center gap-1">
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              Buka Firebase Console
            </a>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div>
            <label class="text-[11px] font-bold text-slate-700 block mb-1">API Key</label>
            <input type="password" id="fb-apiKey" value="${(window.FirebaseSync ? window.FirebaseSync.getConfig().apiKey : '') || ''}" placeholder="AIzaSy..." class="w-full px-3 py-2 border rounded-xl text-xs bg-white" />
          </div>
          <div>
            <label class="text-[11px] font-bold text-slate-700 block mb-1">Project ID</label>
            <input type="text" id="fb-projectId" value="${(window.FirebaseSync ? window.FirebaseSync.getConfig().projectId : '') || ''}" placeholder="sman10bekasi-xxx" class="w-full px-3 py-2 border rounded-xl text-xs bg-white" />
          </div>
          <div>
            <label class="text-[11px] font-bold text-slate-700 block mb-1">Auth Domain</label>
            <input type="text" id="fb-authDomain" value="${(window.FirebaseSync ? window.FirebaseSync.getConfig().authDomain : '') || ''}" placeholder="project-id.firebaseapp.com" class="w-full px-3 py-2 border rounded-xl text-xs bg-white" />
          </div>
          <div>
            <label class="text-[11px] font-bold text-slate-700 block mb-1">Storage Bucket</label>
            <input type="text" id="fb-storageBucket" value="${(window.FirebaseSync ? window.FirebaseSync.getConfig().storageBucket : '') || ''}" placeholder="project-id.appspot.com" class="w-full px-3 py-2 border rounded-xl text-xs bg-white" />
          </div>
          <div>
            <label class="text-[11px] font-bold text-slate-700 block mb-1">Messaging Sender ID</label>
            <input type="text" id="fb-messagingSenderId" value="${(window.FirebaseSync ? window.FirebaseSync.getConfig().messagingSenderId : '') || ''}" placeholder="1234567890" class="w-full px-3 py-2 border rounded-xl text-xs bg-white" />
          </div>
          <div>
            <label class="text-[11px] font-bold text-slate-700 block mb-1">App ID</label>
            <input type="text" id="fb-appId" value="${(window.FirebaseSync ? window.FirebaseSync.getConfig().appId : '') || ''}" placeholder="1:1234567890:web:abcdef" class="w-full px-3 py-2 border rounded-xl text-xs bg-white" />
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-2 pt-2">
          <div class="flex items-center gap-2">
            <button type="button" onclick="saveFirebaseCredentialsAdmin()" class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5 transition-colors">
              <i data-lucide="save" class="w-4 h-4"></i>
              Simpan & Sambungkan Firebase
            </button>
            <button type="button" onclick="disconnectFirebaseAdmin()" class="px-3 py-2 border border-slate-300 hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-medium">
              Putuskan
            </button>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" onclick="pushAllDataToFirestore()" class="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors" title="Kirim seluruh data lokal (berita & config) ke Cloud Firestore">
              <i data-lucide="cloud-upload" class="w-4 h-4"></i>
              Upload ke Firestore
            </button>
            <button type="button" onclick="pullAllDataFromFirestore()" class="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors" title="Tarik pembaruan dari Cloud Firestore ke browser">
              <i data-lucide="cloud-download" class="w-4 h-4"></i>
              Tarik dari Firestore
            </button>
          </div>
        </div>
      </div>

      <div class="pt-6 border-t border-slate-100">
        <div class="p-5 bg-rose-50 border border-rose-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 class="font-bold text-rose-900 text-sm">Hard Reset: Kembali ke Data Bawaan Pabrik</h4>
            <p class="text-xs text-rose-700 mt-0.5">Menghapus modifikasi LocalStorage dan mengembalikan seluruh data awal resmi SMAN 10 Kota Bekasi.</p>
          </div>
          <button onclick="hardResetCache()" class="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-md transition-colors flex items-center gap-2 flex-shrink-0">
            <i data-lucide="refresh-cw" class="w-4 h-4"></i>
            Reset Pabrik
          </button>
        </div>
      </div>
    </div>
  `;
}

function saveFirebaseCredentialsAdmin() {
  const cfg = {
    apiKey: document.getElementById("fb-apiKey").value.trim(),
    projectId: document.getElementById("fb-projectId").value.trim(),
    authDomain: document.getElementById("fb-authDomain").value.trim(),
    storageBucket: document.getElementById("fb-storageBucket").value.trim(),
    messagingSenderId: document.getElementById("fb-messagingSenderId").value.trim(),
    appId: document.getElementById("fb-appId").value.trim()
  };

  if (!cfg.apiKey || !cfg.projectId) {
    alert("Mohon isi minimal API Key dan Project ID Firebase.");
    return;
  }

  if (window.FirebaseSync) {
    const success = window.FirebaseSync.saveConfig(cfg);
    if (success) {
      showToast("Firebase berhasil dihubungkan ke project: " + cfg.projectId, "success");
      renderAdminDashboard();
    } else {
      showToast("Konfigurasi tersimpan, namun Firebase belum aktif. Pastikan API key dan Project ID valid.", "info");
      renderAdminDashboard();
    }
  }
}

function disconnectFirebaseAdmin() {
  if (confirm("Putuskan koneksi Firebase? Website akan kembali ke mode LocalStorage offline.")) {
    if (window.FirebaseSync) {
      window.FirebaseSync.saveConfig({
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
      });
      window.FirebaseSync.isAvailable = false;
      showToast("Koneksi Firebase diputuskan. Menggunakan LocalStorage.", "info");
      renderAdminDashboard();
    }
  }
}

async function pushAllDataToFirestore() {
  if (!window.FirebaseSync || !window.FirebaseSync.isAvailable) {
    alert("Firebase belum terhubung. Silakan isi kredensial dan simpan terlebih dahulu.");
    return;
  }
  showToast("Mengunggah data ke Cloud Firestore...", "info");
  const cfgOk = await window.FirebaseSync.saveSchoolConfig(state.config);
  const newsOk = await window.FirebaseSync.saveNews(state.news);
  if (cfgOk || newsOk) {
    showToast("Seluruh profil dan artikel SMAN 10 berhasil diunggah ke Firebase Cloud Firestore!", "success");
  } else {
    showToast("Gagal mengunggah ke Firestore. Periksa Security Rules Firestore di Firebase Console.", "error");
  }
}

async function pullAllDataFromFirestore() {
  if (!window.FirebaseSync || !window.FirebaseSync.isAvailable) {
    alert("Firebase belum terhubung. Silakan isi kredensial dan simpan terlebih dahulu.");
    return;
  }
  showToast("Mengunduh data dari Cloud Firestore...", "info");
  const remoteCfg = await window.FirebaseSync.loadSchoolConfig();
  const remoteNews = await window.FirebaseSync.loadNews();
  let updated = false;
  if (remoteCfg) {
    state.config = { ...state.config, ...remoteCfg };
    updated = true;
  }
  if (remoteNews && remoteNews.length > 0) {
    state.news = remoteNews;
    updated = true;
  }
  if (updated) {
    renderPortal();
    renderAdminDashboard();
    showToast("Data berhasil diperbarui dari Cloud Firestore!", "success");
  } else {
    showToast("Tidak ada data baru ditemukan di Firestore.", "info");
  }
}


function exportBackupJSON() {
  const exportData = {
    schoolConfig: state.config,
    articles: state.news,
    exportedAt: new Date().toISOString(),
    school: "SMA Negeri 10 Kota Bekasi"
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `backup_sman10bekasi_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  showToast("File cadangan JSON SMAN 10 Bekasi berhasil diunduh!", "success");
}

function importBackupJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.schoolConfig) {
        state.config = data.schoolConfig;
        localStorage.setItem(STORAGE_CONFIG_KEY, JSON.stringify(data.schoolConfig));
      }
      if (data.articles) {
        state.news = data.articles;
        localStorage.setItem(STORAGE_NEWS_KEY, JSON.stringify(data.articles));
      }
      renderPortal();
      renderAdminDashboard();
      showToast("Data SMAN 10 Bekasi berhasil dipulihkan!", "success");
    } catch (err) {
      showToast("Gagal membaca file JSON: " + err.message, "error");
    }
  };
  reader.readAsText(file);
}

// ==========================================
// 7. BOOTSTRAP INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderPortal();
});
