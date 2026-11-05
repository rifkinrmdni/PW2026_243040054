// src/Tugas2/formatRupiah.ts
// Fungsi bantu: 5000 -> "Rp 5.000"
export function formatRupiah(angka: number): string {
  return 'Rp ' + angka.toLocaleString('id-ID');
}