import { useState } from 'react'
import Kartu from './Kartu'

function Penghitung() {
  const [jumlah, setJumlah] = useState<number>(0)

  function tambah() {
    setJumlah(jumlah + 1)
  }

  function ulangi() {
    setJumlah(0)
  }

  return (
    <Kartu judul="Penghitung">
      <div className="baris">
        <p className="ringkasan" style={{ margin: 0 }}>Penghitung: {jumlah}</p>
        <button className="tombol tombol-kecil" onClick={tambah}>Tambah</button>
        <button className="tombol tombol-merah tombol-kecil" onClick={ulangi}>Ulangi</button>
      </div>
    </Kartu>
  )
}

export default Penghitung