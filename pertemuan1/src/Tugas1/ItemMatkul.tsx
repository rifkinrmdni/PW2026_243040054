// src/Tugas1/ItemMatkul.tsx
import React from 'react';

interface ItemMatkulProps {
  kode: string;
  nama: string;
  hari: string;
  sks: number;
}

const ItemMatkul: React.FC<ItemMatkulProps> = ({ kode, nama, hari, sks }) => {
  return (
    <div style={{
      padding: '14px 18px',
      backgroundColor: '#F8F9FA',
      borderLeft: '5px solid #1B365D',
      borderRadius: '4px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <span style={{ fontWeight: 'bold', color: '#1B365D', marginRight: '8px' }}>{kode}</span>
        {nama}
        <div style={{ fontSize: '12px', color: '#777', marginTop: '4px' }}>
          Jadwal Sesi: {hari}
        </div>
      </div>
      <span style={{ 
        backgroundColor: '#E1E4E8', 
        padding: '4px 10px', 
        borderRadius: '12px', 
        fontSize: '13px',
        fontWeight: '500' 
      }}>
        {sks} SKS
      </span>
    </div>
  );
};

export default ItemMatkul;