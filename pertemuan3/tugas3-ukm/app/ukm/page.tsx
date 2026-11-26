import { daftarUkm } from "../../data/ukm";
import FilterUkm from "../../components/FilterUkm";

export default function DirektoriUkmPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Direktori UKM</h1>
        <p className="mt-1 text-sm text-slate-600">
          Pilih kategori bidang di bawah untuk menyaring daftar UKM yang tersedia.
        </p>
      </div>

      <FilterUkm items={daftarUkm} />
    </div>
  );
}