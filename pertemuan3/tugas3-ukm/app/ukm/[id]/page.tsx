import Link from "next/link";
import { notFound } from "next/navigation";
import { daftarUkm } from "../../../data/ukm";
import TombolDaftar from "../../../components/TombolDaftar";

export function generateStaticParams() {
  return daftarUkm.map((ukm) => ({ id: ukm.id }));
}

export default async function DetailUkmPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ukm = daftarUkm.find((item) => item.id === id);

  if (!ukm) {
    notFound();
  }

  return (
    <div className="space-y-5">
      <Link
        href="/ukm"
        className="inline-block text-sm font-medium text-slate-700 hover:underline"
      >
        &larr; Kembali ke Direktori UKM
      </Link>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100 text-4xl">
            {ukm.ikon}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
                {ukm.bidang}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  ukm.statusPendaftaran === "Buka"
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                Pendaftaran: {ukm.statusPendaftaran}
              </span>
            </div>

            <h1 className="mt-2 text-2xl font-bold text-slate-900">
              {ukm.nama}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Singkatan: {ukm.singkatan}
            </p>
          </div>
        </div>

        <p className="mt-6 leading-relaxed text-slate-700">{ukm.deskripsi}</p>

        <div className="mt-6 grid gap-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-2">
          <div>
            <span className="font-semibold text-slate-900">Jadwal Latihan:</span>{" "}
            {ukm.jadwalLatihan}
          </div>
          <div>
            <span className="font-semibold text-slate-900">Sekretariat:</span>{" "}
            {ukm.sekretariat}
          </div>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-6">
          <TombolDaftar namaUkm={ukm.nama} />
        </div>
      </article>
    </div>
  );
}