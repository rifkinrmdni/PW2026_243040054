import Link from "next/link";

export default function TentangPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Tentang RuangUKM</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          RuangUKM adalah portal direktori informasi Unit Kegiatan Mahasiswa
          yang dirancang untuk mempermudah mahasiswa baru maupun mahasiswa aktif
          mengenal komunitas kampus, jadwal kegiatan, dan prosedur pendaftaran.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900">Tujuan Direktori</h2>
          <p className="mt-2 text-sm text-slate-600">
            Menyatukan informasi resmi seluruh UKM agar mahasiswa dapat memilih
            kegiatan non-akademik sesuai minat dan ketersediaan waktu.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900">Alur Bergabung</h2>
          <p className="mt-2 text-sm text-slate-600">
            Pilih UKM di halaman direktori, cek jadwal latihan dan lokasi
            sekretariat, lalu hadir pada sesi orientasi atau hubungi pengurus.
          </p>
        </div>
      </div>

      <Link
        href="/ukm"
        className="inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Jelajahi Direktori UKM
      </Link>
    </div>
  );
}