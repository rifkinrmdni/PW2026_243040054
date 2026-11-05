// src/Tugas2/ItemTransaksi.tsx
import { formatRupiah } from "./FormatRupiah";
import type { Transaksi } from "./types";

interface ItemTransaksiProps {
  transaksi: Transaksi;
  onHapus: (id: number) => void;
}

function ItemTransaksi({ transaksi, onHapus }: ItemTransaksiProps) {
  const pemasukan = transaksi.jenis === "pemasukan";

  return (
    <li className="item">
      <span>{transaksi.keterangan}</span>
      {/* className dinamis: hijau untuk pemasukan, merah untuk pengeluaran */}
      <strong className={pemasukan ? "hijau" : "merah"}>
        {pemasukan ? "+" : "-"} {formatRupiah(transaksi.nominal)}
      </strong>
      <button
        className="tombol tombol-merah tombol-kecil"
        onClick={() => onHapus(transaksi.id)}
      >
        Hapus
      </button>
    </li>
  );
}

export default ItemTransaksi;
