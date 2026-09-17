# SMA Negeri 10 Kota Bekasi - Website Resmi & CMS Sekolah

Website resmi sekolah modern berbasis SPA (Single Page Application) responsif dengan Content Management System (CMS) terintegrasi untuk pengelolaan konten, berita, agenda, sarana, dan 19 ekstrakurikuler sekolah.

Direplikasi dan dioptimalkan dari portal resmi [www.sman10bekasi.sch.id](https://www.sman10bekasi.sch.id).

---

## Identitas Sekolah Resmi
- **Nama Sekolah**: SMA Negeri 10 Kota Bekasi (SMAN 10 Bekasi / SMANTEN)
- **NPSN**: `20223019`
- **Akreditasi**: `Akreditasi A (Unggul)` — BAN-S/M
- **Kepala Sekolah**: **Dra. Turheni Komar, M.Pd**
- **Visi**: *"Terwujudnya murid yang cerdas, religius, berprestasi, sehat, berbudaya lokal, dan berwawasan global."*
- **Alamat**: Perumahan Harapan Indah, Jl. Flamboyan Raya, RT.003/RW.019, Kel. Pejuang, Kec. Medan Satria, Kota Bekasi, Jawa Barat 17610
- **Telepon**: (021) 889 759 28 | **WhatsApp**: +62 889-7592-8000 | **Email**: info@sman10bekasi.sch.id

---

## Fitur Utama

1. **Portal Publik Sekolah**:
   - **Running Text Pengumuman & Akreditasi**: Informasi aktual program sekolah (Sosialisasi AI, Pramuka Garuda, PPDB) dan status akreditasi BAN-S/M.
   - **Header & Navbar Responsif**: Dropdown menu profil, kesiswaan, berita, kalender, dan kontak.
   - **Hero Banner & Stat Counter**: 4 kartu capaian riil (Akreditasi Unggul A, 1.500+ Murid, 75 Guru Pendidik, 37 Staf Kependidikan).
   - **Sambutan Kepala Sekolah**: Foto resmi Dra. Turheni Komar, M.Pd., kutipan, NIP, serta modal baca sambutan lengkap.
   - **Profil, Visi & 7 Misi SMAN 10**: Visi sekolah, 7 misi terpadu, dan 6 dimensi Profil Pelajar Pancasila.
   - **Portal Berita & Pengumuman**: Artikel berita nyata (Sosialisasi AI Polres Metro Bekasi Kota, Penyerahan Sertifikat Garuda oleh Walikota Bekasi, HUT RI ke-81, KPHO, Aturan Murid Baru, VIMAJA Cup, dsb.) dengan pencarian instan dan filter kategori.
   - **Agenda Akademik**: Kalender linimasa kegiatan sekolah.
   - **Sarana & Fasilitas**: Galeri laboratorium komputer & multimedia, laboratorium IPA, perpustakaan digital, sarana ibadah, studio marching band, dan lapangan olahraga.
   - **19 Ekstrakurikuler Siswa Lengkap**:
     - *WAKAMACA* (Pramuka Ambalan)
     - *SATKOPAS* (Paskibra)
     - *OPTION* (IT, Robotik & E-Sport)
     - *IKLIM* (Rohis Muslim)
     - *ROHKRIS* (Rohani Kristen)
     - *KIR CANOPUS* (Karya Ilmiah Remaja)
     - *MBGF* (Marching Band Gita Flamboyan)
     - *AKSI* (Jurnalistik & Broadcast)
     - *LLC* (Language & Literature Club)
     - *BASTEN* (Bola Basket)
     - *FUTSALTEN* (Futsal)
     - *VOLTEN* (Bola Voli)
     - *BELA DIRI* (Pencak Silat Keris Pusaka Cimacan)
     - *PMR* (Palang Merah Remaja)
     - *SWAKAPASI* (Siswa Pecinta Alam)
     - *MUGIWARA-NIJUKU* (Klub Budaya Jepang)
     - *PB CHAPTOEN* (Bulutangkis)
     - *KERANI* (Kreasi Seni & Teater)
     - *PIK-R* (Pusat Konseling Remaja)
   - **Hero Background Video**: Video latar sinematik berulang WebM asli dari portal SMAN 10 Bekasi (`media/vid/background.webm`).
   - **Video Slide & Galeri Video Interaktif**: Carousel slider berisi 7 dokumentasi resmi SMAN 10 Bekasi (Moment MPLS 2026, KPHO, Hari Lahir Pancasila, Kartini Day, HUT ke-23, Deklarasi Sekolah Ramah Digital, Gebyar Seni) dengan thumbnail, durasi, navigasi geser, dan pemutar instan di player utama.
   - **Video Profil Resmi & Peta Lokasi**: Terintegrasi langsung dengan saluran YouTube resmi `@SMAN10BEKASI` (`hY-x_cvI0kM`) dan peta interaktif Harapan Indah Google Maps.
   - **Footer Lengkap & Kontak**: Alamat lengkap, nomor telepon, WhatsApp, email, dan media sosial (Instagram @sman10kotabekasi, YouTube, Facebook, OSIS).
   - **Floating Bottom Dock**: Navigasi melayang untuk pengguna smartphone.

2. **Panel Pengelola Admin CMS**:
   - Dilindungi kata sandi resmi: **`sman10bks`**
   - Mengelola data sekolah, tema warna, berita, agenda, sarana, ekstrakurikuler, dan cadangan data secara mandiri.

---

## Cara Menjalankan Website

### Opsi 1: Klik Langsung (Paling Mudah)
Cukup buka berkas `index.html` dengan klik ganda (double-click) di peramban web apa pun (Chrome, Edge, Opera, Firefox).

### Opsi 2: Menggunakan Server Lokal
Jalankan file `start.bat` atau buka PowerShell di folder proyek dan jalankan:
```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```
Buka peramban di alamat: **`http://localhost:3000`**

---

## Akses Panel Admin CMS
- Klik ikon **Gerigi (Settings)** di navbar kanan atas atau tombol **"Masuk CMS"** di footer.
- Masukkan kata sandi: **`sman10bks`**
