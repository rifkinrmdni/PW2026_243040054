import { useState, type FormEvent } from 'react'
import Kartu from './Kartu'

type FormTugasProps = {
  onTambah: (judul: string) => void
}

function FormTugas({ onTambah }: FormTugasProps) {
  const [teks, setTeks] = useState('')
  const terlaluPanjang = teks.length > 50
  const tidakValid = terlaluPanjang || teks.trim() === ''

  function tanganiKirim(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (tidakValid) return

    onTambah(teks.trim())
    setTeks('')
  }

  return (
    <Kartu judul="Tambah Tugas Baru">
      <form onSubmit={tanganiKirim}>
        <div className="baris">
          <input
            className="input"
            type="text"
            placeholder="Masukkan judul tugas"
            value={teks}
            onChange={(event) => setTeks(event.target.value)}
          />
          <button className="tombol" type="submit" disabled={tidakValid}>
            Tambah Tugas
          </button>
        </div>
        {terlaluPanjang && (
          <p className="galat">Judul tugas maksimal 50 karakter.</p>
        )}
      </form>
    </Kartu>
  )
}

export default FormTugas