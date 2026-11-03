import { useState } from 'react'
import './App.css'
import Penghitung from './Component/Penghitung'
import FormTugas from './Component/FormTugas'
import ItemTugas, { type Tugas } from './Component/ItemTugas'
import Kartu from './Component/Kartu'

function App() {
  const [daftarTugas, setDaftarTugas] = useState<Tugas[]>([
    { id: 1, judul: 'Install Node.js dan Vite', selesai: true },
    { id: 2, judul: 'Pelajari useState', selesai: false },
  ])

  function tambahTugas(judulBaru: string) {
    const tugasBaru: Tugas = {
      id: Date.now(),
      judul: judulBaru,
      selesai: false,
    }
    setDaftarTugas([...daftarTugas, tugasBaru])
  }

  function ubahStatusTugas(id: number) {
    setDaftarTugas(
      daftarTugas.map((t) => (t.id === id ? { ...t, selesai: !t.selesai } : t))
    )
  }

  function hapusTugas(id: number) {
    setDaftarTugas(daftarTugas.filter((t) => t.id !== id))
  }

  const jumlahSelesai = daftarTugas.filter((t) => t.selesai).length
  const totalTugas = daftarTugas.length

  return (
    <div className="wadah">
      <h1 className="judul">Daftar Tugas Praktikum</h1>
      <p className="subjudul">Laboratorium Informatika - Modul 2: React Lanjutan</p>

      <Penghitung />
      <FormTugas onTambah={tambahTugas} />

      <Kartu judul="Daftar Tugas">
        <p className="ringkasan">
          {jumlahSelesai} dari {totalTugas} tugas selesai
        </p>
        {daftarTugas.length === 0 ? (
          <p className="kosong">Belum ada tugas.</p>
        ) : (
          <ul className="daftar">
            {daftarTugas.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                ubahStatus={ubahStatusTugas}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  )
}

export default App