export default function UkmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-indigo-200 bg-indigo-50 px-5 py-4 text-sm text-indigo-950">
        <p className="font-semibold">Informasi Keanggotaan UKM Kampus</p>
        <p className="mt-1 text-indigo-800">
          Mahasiswa aktif dapat mengikuti maksimal 2 UKM per semester. Pastikan
          memeriksa jadwal latihan agar tidak bentrok dengan jadwal kuliah.
        </p>
      </div>
      {children}
    </div>
  );
}