import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        404 - Tidak Ditemukan
      </p>
      <h1 className="mt-2 text-2xl font-bold text-slate-900">
        Halaman atau Data UKM Tidak Ditemukan
      </h1>
      <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
        Alamat yang kamu akses tidak tersedia atau ID UKM yang dicari tidak ada
        dalam direktori.
      </p>
      <Link
        href="/ukm"
        className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Kembali ke Direktori UKM
      </Link>
    </div>
  );
}