// src/App.tsx
import React from "react";
import KartuProfil from "./kartuprofil";
import ItemMatkul from "./Tugas1/ItemMatkul";
import BadgeSkill from "./Tugas1/BadgeSkill";
import KartuProyek from "./Tugas1/KartuProyek";

function App() {
  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF211",
      nama: "Pemrograman Web (React & Laravel)",
      sks: 3,
      hari: "Senin",
    },
    {
      id: 102,
      kode: "IF212",
      nama: "Sistem Basis Data (PostgreSQL)",
      sks: 3,
      hari: "Rabu",
    },
    {
      id: 103,
      kode: "IF213",
      nama: "Rekayasa Perangkat Lunak Terapan",
      sks: 3,
      hari: "Kamis",
    },
    {
      id: 104,
      kode: "IF214",
      nama: "Arsitektur Sistem Terdistribusi",
      sks: 2,
      hari: "Jumat",
    },
  ];

  const daftarSkill = [
    { namaSkill: "React.js", level: "Menengah" },
    { namaSkill: "JavaScript (ES6+)", level: "Mahir" },
    { namaSkill: "HTML & CSS", level: "Mahir" },
    { namaSkill: "Node.js", level: "Pemula" },
  ];

  const daftarProyek = [
    {
      judul: "Sistem Manajemen Akademik",
      deskripsi:
        "Aplikasi berbasis web untuk mengelola data mahasiswa, nilai, dan absensi perkuliahan secara real-time.",
      teknologi: ["React", "Vite", "CSS Modules"],
      githubUrl: "https://github.com/rifkinrmdni/PW2026_243040054",
    },
    {
      judul: "Aplikasi E-Commerce UMKM",
      deskripsi:
        "Platform toko online sederhana dengan fitur keranjang belanja dan integrasi gateway pembayaran lokal.",
      teknologi: ["React.js", "JavaScript", "REST API"],
      githubUrl: "https://github.com/rifkinrmdni/PW2026_243040054",
    },
    {
      judul: "Dashboard Analitik Cuaca",
      deskripsi:
        "Aplikasi pemantau cuaca interaktif yang mengambil data suhu dan kelembapan dari layanan pihak ketiga.",
      teknologi: ["React", "Fetch API", "Chart.js"],
      githubUrl: "https://github.com/rifkinrmdni/PW2026_243040054",
    },
    {
      judul: "Aplikasi Catatan Harian (Notes)",
      deskripsi:
        "Aplikasi pengelola catatan pribadi yang mendukung operasi CRUD dan penyimpanan lokal browser (LocalStorage).",
      teknologi: ["React", "JSX", "CSS"],
      githubUrl: "https://github.com/rifkinrmdni/PW2026_243040054",
    },
  ];

  const notifikasiSapaan = () => {
    alert(
      "Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.",
    );
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "0 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1
          style={{ color: "#18365D", margin: "0 0 16px 0", lineHeight: "1.2" }}
        >
          Praktikum Pemrograman Web
        </h1>
        <div style={{ marginTop: "12px" }}>
          <p style={{ color: "#666", fontSize: "15px", margin: "0" }}>
            Laboratorium Informatika Modul 1: Pengenalan React JS & Vite
          </p>
        </div>
      </header>

      {/* Profil Mahasiswa & Badge Skill */}
      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Profil Mahasiswa Praktikan
        </h2>
        <KartuProfil
          nama="Rifki Nurohmat Ramadani"
          npm="233040054"
          kelas="Praktikum Web (F)"
          status="Aktif"
          fotoUrl="https://via.placeholder.com/80"
        />

        <div
          style={{
            marginTop: "16px",
            padding: "16px",
            backgroundColor: "#F8F9FA",
            borderRadius: "8px",
            border: "1px solid #E1E4E8",
          }}
        >
          <h4 style={{ margin: "0 0 8px 0", color: "#333" }}>
            Keahlian & Level Penguasaan:
          </h4>
          <div>
            {daftarSkill.map((skill, index) => (
              <BadgeSkill
                key={index}
                namaSkill={skill.namaSkill}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Daftar Mata Kuliah */}
      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Daftar Rencana Praktikum Semester (List Rendering)
        </h2>
        <div style={{ display: "grid", gap: "12px" }}>
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul
              key={matkul.id}
              kode={matkul.kode}
              nama={matkul.nama}
              hari={matkul.hari}
              sks={matkul.sks}
            />
          ))}
        </div>
      </section>

      {/* Showcase Portofolio Mini */}
      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Showcase Portofolio Mini (Tugas Terstruktur)
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "16px",
          }}
        >
          {daftarProyek.map((proyek, index) => (
            <KartuProyek
              key={index}
              judul={proyek.judul}
              deskripsi={proyek.deskripsi}
              teknologi={proyek.teknologi}
              githubUrl={proyek.githubUrl}
            />
          ))}
        </div>
      </section>

      {/* Tombol Interaktivitas */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={notifikasiSapaan}
          style={{
            backgroundColor: "#1B365D",
            color: "#FFFFFF",
            padding: "12px 24px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>
    </div>
  );
}

export default App;
