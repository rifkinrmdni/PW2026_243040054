import Link from "next/link";

export default function KontakPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Kontak &amp; Layanan Kemahasiswaan
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Hubungi bagian kemahasiswaan atau pengurus UKM apabila membutuhkan
          informasi tambahan terkait keanggotaan.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900">Jam Pelayanan</h2>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li>Senin - Jumat: 08.30 - 16.30 WIB</li>
            <li>Sabtu: 09.00 - 13.00 WIB</li>
            <li>Minggu &amp; Hari Libur: Tutup</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold text-slate-900">Sekretariat Kemahasiswaan</h2>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li>Lokasi: Gedung Student Center Lt. 2</li>
            <li>Email: kemahasiswaan@kampus.ac.id</li>
            <li>Telepon: (022) 2019400</li>
          </ul>
        </div>
      </div>

      <Link
        href="/"
        className="inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}