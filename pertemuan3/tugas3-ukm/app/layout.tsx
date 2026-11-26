import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "RuangUKM - Direktori UKM Kampus",
  description:
    "Direktori Unit Kegiatan Mahasiswa (UKM) kampus untuk mengeksplorasi minat, jadwal latihan, dan pendaftaran anggota.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
          RuangUKM &copy; 2026 - Tugas Terstruktur Praktikum Pemrograman Web
        </footer>
      </body>
    </html>
  );
}