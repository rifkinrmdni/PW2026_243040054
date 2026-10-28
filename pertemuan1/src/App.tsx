import type { CSSProperties } from "react";
import "./App.css";
import KartuProfil from "./kartuprofil";

interface Praktikum {
  id: number;
  kode: string;
  nama: string;
  sks: number;
  hari: string;
}

const daftarPraktikum: Praktikum[] = [
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

const styles: Record<string, CSSProperties> = {
  page: {
    width: "100%",
    maxWidth: "800px",
    margin: "40px auto",
    padding: "0 24px",
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
    textAlign: "left",
  },
  header: {
    marginBottom: "32px",
    textAlign: "center",
  },
  title: {
    margin: "0 0 8px",
    color: "#1b365d",
    fontSize: "clamp(28px, 5vw, 40px)",
    lineHeight: 1.2,
  },
  subtitle: {
    color: "#666",
    fontSize: "15px",
  },
  section: {
    marginBottom: "32px",
  },
  sectionTitle: {
    margin: "0 0 16px",
    paddingBottom: "8px",
    borderBottom: "2px solid #e1e4e8",
    color: "#2c3e50",
    fontSize: "22px",
    lineHeight: 1.3,
  },
  list: {
    display: "grid",
    gap: "12px",
  },
  course: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px 16px",
    padding: "14px 18px",
    borderLeft: "5px solid #1b365d",
    borderRadius: "4px",
    backgroundColor: "#f8f9fa",
  },
  courseName: {
    color: "#333",
  },
  courseCode: {
    color: "#1b365d",
  },
  schedule: {
    marginTop: "4px",
    color: "#777",
    fontSize: "12px",
  },
  credits: {
    padding: "4px 10px",
    borderRadius: "12px",
    backgroundColor: "#e1e4e8",
    color: "#333",
    fontSize: "13px",
    whiteSpace: "nowrap",
  },
  action: {
    marginTop: "40px",
    textAlign: "center",
  },
  button: {
    padding: "12px 24px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#1b365d",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  },
};

function App() {
  const notifikasiSapaan = () => {
    window.alert(
      "Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.",
    );
  };

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Praktikum Pemrograman Web</h1>
        <p style={styles.subtitle}>
          Laboratorium Informatika - Modul 1: Pengenalan React JS &amp; Vite
        </p>
      </header>

      <section aria-labelledby="profil-title" style={styles.section}>
        <h2 id="profil-title" style={styles.sectionTitle}>
          Profil Mahasiswa Praktikan
        </h2>
        <KartuProfil
          nama="Mahasiswa Informatika"
          npm="233040000"
          kelas="IF - Praktikum"
          status="Aktif"
          fotoUrl="https://via.placeholder.com/80"
        />
      </section>

      <section aria-labelledby="praktikum-title" style={styles.section}>
        <h2 id="praktikum-title" style={styles.sectionTitle}>
          Daftar Rencana Praktikum Semester ({daftarPraktikum.length} mata
          kuliah)
        </h2>
        <div style={styles.list}>
          {daftarPraktikum.map((matkul) => (
            <article key={matkul.id} style={styles.course}>
              <div style={styles.courseName}>
                <strong style={styles.courseCode}>{matkul.kode}</strong>
                {" - "}
                {matkul.nama}
                <p style={styles.schedule}>Jadwal Sesi: {matkul.hari}</p>
              </div>
              <span style={styles.credits}>{matkul.sks} SKS</span>
            </article>
          ))}
        </div>
      </section>

      <div style={styles.action}>
        <button type="button" onClick={notifikasiSapaan} style={styles.button}>
          Uji Interaktivitas Event (Klik di Sini)
        </button>
      </div>
    </main>
  );
}

export default App;
