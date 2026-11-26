export interface Ukm {
  id: string;
  nama: string;
  singkatan: string;
  bidang: "Teknologi" | "Seni & Budaya" | "Olahraga" | "Sosial & Penalaran";
  statusPendaftaran: "Buka" | "Terbatas";
  ikon: string;
  jadwalLatihan: string;
  sekretariat: string;
  deskripsi: string;
}

export const daftarUkm: Ukm[] = [
  {
    id: "robotika-iot",
    nama: "Komunitas Robotika & IoT Kampus",
    singkatan: "ROBIT-K",
    bidang: "Teknologi",
    statusPendaftaran: "Buka",
    ikon: "🤖",
    jadwalLatihan: "Selasa & Kamis, 16.00 - 18.30 WIB",
    sekretariat: "Gedung Teknik Lt. 2 - Lab Mikrokontroler",
    deskripsi:
      "Wadah mahasiswa untuk belajar mikrokontroler, sensor IoT, pemrograman embedded, dan mengikuti kompetisi robotika tingkat regional maupun nasional.",
  },
  {
    id: "teater-seni-pentas",
    nama: "Sanggar Teater & Seni Pertunjukan",
    singkatan: "STSP",
    bidang: "Seni & Budaya",
    statusPendaftaran: "Buka",
    ikon: "🎭",
    jadwalLatihan: "Rabu & Jumat, 15.30 - 18.00 WIB",
    sekretariat: "Student Center Lt. 1 - Ruang Studio 02",
    deskripsi:
      "Mengembangkan olah vokal, akting, penulisan naskah, tata artistik panggung, serta pementasan drama dan seni tradisi kampus.",
  },
  {
    id: "futsal-mahasiswa",
    nama: "Unit Kegiatan Futsal Mahasiswa",
    singkatan: "UKF",
    bidang: "Olahraga",
    statusPendaftaran: "Terbatas",
    ikon: "⚽",
    jadwalLatihan: "Senin & Kamis, 19.00 - 21.00 WIB",
    sekretariat: "GOR Kampus - Ruang Pelatih",
    deskripsi:
      "Membina fisik, strategi permainan futsal, latihan rutin, serta seleksi tim untuk kejuaraan antar-fakultas dan antar-perguruan tinggi.",
  },
  {
    id: "debat-karya-tulis",
    nama: "Forum Debat & Karya Tulis Ilmiah",
    singkatan: "FDKTI",
    bidang: "Sosial & Penalaran",
    statusPendaftaran: "Buka",
    ikon: "📚",
    jadwalLatihan: "Sabtu, 10.00 - 13.00 WIB",
    sekretariat: "Perpustakaan Pusat Lt. 3 - Ruang Diskusi",
    deskripsi:
      "Melatih kemampuan berpikir kritis, argumentasi publik, penulisan opini, dan penyusunan proposal riset atau Program Kreativitas Mahasiswa (PKM).",
  },
  {
    id: "sinematografi-media",
    nama: "Kolektif Sinematografi & Media Kreatif",
    singkatan: "KSMK",
    bidang: "Seni & Budaya",
    statusPendaftaran: "Buka",
    ikon: "🎬",
    jadwalLatihan: "Jumat, 14.00 - 17.00 WIB",
    sekretariat: "Gedung Kreativitas - Studio Audio Visual",
    deskripsi:
      "Fokus pada produksi film pendek, fotografi, videografi acara kampus, serta pascaproduksi dan penyuntingan visual.",
  },
  {
    id: "keamanan-siber",
    nama: "Kelompok Studi Keamanan Siber",
    singkatan: "K3S",
    bidang: "Teknologi",
    statusPendaftaran: "Terbatas",
    ikon: "🛡️",
    jadwalLatihan: "Sabtu, 13.30 - 16.00 WIB",
    sekretariat: "Gedung Teknik Lt. 3 - Lab Jaringan",
    deskripsi:
      "Mempelajari dasar keamanan jaringan, analisis kerentanan aplikasi web, etika siber, dan latihan Capture The Flag (CTF) secara terarah.",
  },
];