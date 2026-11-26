import Link from "next/link";
import { daftarUkm } from "../data/ukm";

export default function HomePage() {
  const ukmUnggulan = daftarUkm.slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-slate-900 p-8 text-white sm:p-10">
        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
          Direktori Organisasi &amp; Minat Mahasiswa
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Temukan UKM yang Tepat di RuangUKM
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Jelajahi berbagai Unit Kegiatan Mahasiswa di bidang teknologi, seni
          dan budaya, olahraga, hingga penalaran. Cek jadwal latihan dan lokasi
          sekretariat sebelum mendaftar.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/ukm"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Lihat Direktori UKM
          </Link>
          <Link
            href="/tentang"
            className="rounded-lg border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Tentang Program
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">UKM Pilihan</h2>
          <Link
            href="/ukm"
            className="text-sm font-semibold text-slate-700 hover:underline"
          >
            Semua UKM &rarr;
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ukmUnggulan.map((ukm) => (
            <Link
              key={ukm.id}
              href={`/ukm/${ukm.id}`}
              className="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-2xl">
                {ukm.ikon}
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{ukm.nama}</h3>
              <p className="mt-1 text-xs font-medium text-slate-500">
                {ukm.singkatan} &middot; {ukm.jadwalLatihan}
              </p>
              <span className="mt-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {ukm.bidang}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}