// src/Tugas2/FormTransaksi.tsx
import { useState } from 'react';
import type { FormEvent } from 'react';
import type { DataTransaksiBaru, JenisTransaksi } from './types';

interface FormTransaksiProps {
  onTambah: (data: DataTransaksiBaru) => void;
}

function FormTransaksi({ onTambah }: FormTransaksiProps) {
  // Tiga state lokal: satu untuk setiap input (formulir terkendali)
  const [keterangan, setKeterangan] = useState<string>('');
  const [nominal, setNominal] = useState<string>('');
  const [jenis, setJenis] = useState<JenisTransaksi>('pemasukan');

  // Validasi: keterangan tidak kosong (maks. 40 karakter), nominal harus > 0
  const terlaluPanjang = keterangan.length > 40;
  const nominalAngka = Number(nominal); // input selalu teks -> ubah jadi angka
  const tidakValid =
    keterangan.trim() === '' ||
    terlaluPanjang ||
    nominal === '' ||
    nominalAngka <= 0;

  const tanganiKirim = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // cegah halaman reload
    if (tidakValid) return;

    onTambah({
      keterangan: keterangan.trim(),
      nominal: nominalAngka,
      jenis: jenis,
    }); // "melapor" ke komponen induk

    setKeterangan('');
    setNominal('');
    setJenis('pemasukan');
  };

  return (
    <form onSubmit={tanganiKirim} className="form-transaksi">
      <input
        className="input"
        type="text"
        placeholder="Keterangan, contoh: Uang saku"
        value={keterangan}
        onChange={(event) => setKeterangan(event.target.value)}
      />
      {terlaluPanjang && (
        <p className="galat">Keterangan maksimal 40 karakter.</p>
      )}

      <div className="baris">
        <input
          className="input"
          type="number"
          placeholder="Nominal (Rp)"
          min="1"
          value={nominal}
          onChange={(event) => setNominal(event.target.value)}
        />
        <select
          className="input"
          value={jenis}
          onChange={(event) => setJenis(event.target.value as JenisTransaksi)}
        >
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>
      </div>

      <button className="tombol" type="submit" disabled={tidakValid}>
        Tambah Transaksi
      </button>
    </form>
  );
}

export default FormTransaksi;