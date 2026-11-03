import { type ReactNode } from 'react'

type KartuProps = {
  judul: string;
  children: ReactNode;
}

function Kartu({ judul, children }: KartuProps) {
  return (
    <div className="kartu">
      <h2>{judul}</h2>
      {children}
    </div>
  )
}

export default Kartu