"use client";

import { useState } from "react";

export default function TombolDaftar({ namaUkm }: { namaUkm: string }) {
  const [terdaftar, setTerdaftar] = useState(false);
  const [jumlahPeminat, setJumlahPeminat] = useState(24);

  const handleToggle = () => {
    setTerdaftar((prev) => {
      const next = !prev;
      setJumlahPeminat((count) => (next ? count + 1 : count - 1));
      return next;
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-sm font-medium text-slate-800">
          {terdaftar
            ? `Minat pendaftaran "${namaUkm}" telah dicatat.`
            : "Tertarik bergabung dengan UKM ini?"}
        </p>
        <p className="text-xs text-slate-500">
          Calon anggota tercatat minggu ini: <strong>{jumlahPeminat}</strong> mahasiswa
        </p>
      </div>

      <button
        type="button"
        onClick={handleToggle}
        className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
          terdaftar
            ? "bg-emerald-600 text-white hover:bg-emerald-700"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {terdaftar ? "✓ Minat Terdaftar" : "+ Daftar Minat UKM"}
      </button>
    </div>
  );
}