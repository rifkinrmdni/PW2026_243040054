// src/Tugas2/RingkasanSaldo.tsx
import { formatRupiah } from "./FormatRupiah";

interface RingkasanSaldoProps {
  pemasukan: number;
  pengeluaran: number;
  saldo: number;
}

function RingkasanSaldo({
  pemasukan,
  pengeluaran,
  saldo,
}: RingkasanSaldoProps) {
  return (
    <div>
      <p className="saldo-label">Total saldo</p>
      <p className={saldo < 0 ? "saldo merah" : "saldo"}>
        {saldo < 0 ? "-" : ""} {formatRupiah(Math.abs(saldo))}
      </p>
      <p className="ringkasan">
        Pemasukan: <span className="hijau">{formatRupiah(pemasukan)}</span> |
        Pengeluaran: <span className="merah">{formatRupiah(pengeluaran)}</span>
      </p>
    </div>
  );
}

export default RingkasanSaldo;
