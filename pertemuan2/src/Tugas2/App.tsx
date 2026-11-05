// src/Tugas2/App.tsx
import { useState, useEffect } from "react";
import "./App.css";
import Kartu from "./Kartu";
import FormTransaksi from "./FormTransaksi";
import ItemTransaksi from "./ItemTransaksi";
import RingkasanSaldo from "./RingkasanSaldo";
import type { Transaksi, DataTransaksiBaru } from "./types";

function App() {
  // 1. State utama: baca dari localStorage dulu (hanya dijalankan sekali)
  const [daftarTransaksi, setDaftarTransaksi] = useState<Transaksi[]>(() => {
    const dataTersimpan = localStorage.getItem("catatan-keuangan");
    return dataTersimpan ? (JSON.parse(dataTersimpan) as Transaksi[]) : [];
  });

  // 2. Efek: simpan ke localStorage setiap daftarTransaksi berubah
  useEffect(() => {
    localStorage.setItem("catatan-keuangan", JSON.stringify(daftarTransaksi));
  }, [daftarTransaksi]);

  // 3. Menambah transaksi: array BARU (spread), tidak memakai push
  const tambahTransaksi = (data: DataTransaksiBaru) => {
    const transaksiBaru: Transaksi = { id: Date.now(), ...data };
    setDaftarTransaksi([...daftarTransaksi, transaksiBaru]);
  };

  // 4. Menghapus transaksi: .filter() menghasilkan array baru
  const hapusTransaksi = (id: number) => {
    setDaftarTransaksi(daftarTransaksi.filter((t) => t.id !== id));
  };

  // 5. Nilai turunan: dihitung dari state, TIDAK disimpan sebagai state baru
  const totalPemasukan = daftarTransaksi
    .filter((t) => t.jenis === "pemasukan")
    .reduce((jumlah, t) => jumlah + Number(t.nominal), 0);
  const totalPengeluaran = daftarTransaksi
    .filter((t) => t.jenis === "pengeluaran")
    .reduce((jumlah, t) => jumlah + Number(t.nominal), 0);
  const saldo = totalPemasukan - totalPengeluaran;

  return (
    <div className="wadah">
      <h1 className="judul">Catatan Keuangan Mini</h1>
      <p className="subjudul">Rifki Nurohmat Ramadani_243040054</p>

      <Kartu judul="Saldo">
        <RingkasanSaldo
          pemasukan={totalPemasukan}
          pengeluaran={totalPengeluaran}
          saldo={saldo}
        />
      </Kartu>

      <Kartu judul="Tambah Transaksi">
        <FormTransaksi onTambah={tambahTransaksi} />
      </Kartu>

      <Kartu judul="Daftar Transaksi">
        {/* Conditional rendering: pesan khusus jika belum ada transaksi */}
        {daftarTransaksi.length === 0 ? (
          <p className="kosong">
            Belum ada transaksi. Catat pemasukan atau pengeluaran pertamamu!
          </p>
        ) : (
          <ul className="daftar">
            {daftarTransaksi.map((t) => (
              <ItemTransaksi
                key={t.id}
                transaksi={t}
                onHapus={hapusTransaksi}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default App;
