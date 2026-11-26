"use client";

import { useState } from "react";
import Link from "next/link";
import type { Ukm } from "../data/ukm";

const daftarBidang = [
  "Semua",
  "Teknologi",
  "Seni & Budaya",
  "Olahraga",
  "Sosial & Penalaran",
] as const;

export default function FilterUkm({ items }: { items: Ukm[] }) {
  const [bidangAktif, setBidangAktif] = useState<string>("Semua");

  const hasilFilter =
    bidangAktif === "Semua"
      ? items
      : items.filter((ukm) => ukm.bidang === bidangAktif);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {daftarBidang.map((bidang) => {
          const aktif = bidangAktif === bidang;
          return (
            <button
              key={bidang}
              type="button"
              onClick={() => setBidangAktif(bidang)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                aktif
                  ? "bg-slate-900 text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              {bidang}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {hasilFilter.map((ukm) => (
          <article
            key={ukm.id}
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-2xl">{ukm.ikon}</span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    ukm.statusPendaftaran === "Buka"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {ukm.statusPendaftaran}
                </span>
              </div>

              <h2 className="mt-3 text-lg font-bold text-slate-900">
                {ukm.nama}
              </h2>
              <p className="mt-1 text-xs font-medium text-slate-500">
                {ukm.singkatan} &middot; {ukm.bidang}
              </p>
              <p className="mt-3 line-clamp-2 text-sm text-slate-600">
                {ukm.deskripsi}
              </p>
            </div>

            <Link
              href={`/ukm/${ukm.id}`}
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
            >
              Lihat Detail &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}