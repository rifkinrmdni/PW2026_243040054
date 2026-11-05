// src/Tugas2/types.ts
// Definisi tipe data yang dipakai bersama oleh beberapa komponen

export type JenisTransaksi = 'pemasukan' | 'pengeluaran';

export interface Transaksi {
  id: number;
  keterangan: string;
  nominal: number;
  jenis: JenisTransaksi;
}

// Data dari formulir: sama seperti Transaksi, tetapi belum punya id
export type DataTransaksiBaru = Omit<Transaksi, 'id'>;