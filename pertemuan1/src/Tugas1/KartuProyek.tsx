// src/Tugas1/KartuProyek.tsx
import React from 'react';

interface KartuProyekProps {
  judul: string;
  deskripsi: string;
  teknologi: string[];
  githubUrl: string;
}

const KartuProyek: React.FC<KartuProyekProps> = ({ judul, deskripsi, teknologi, githubUrl }) => {
  return (
    <div style={{
      border: '1px solid #D0D7DE',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 4px 6px 1px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', color: '#18365D' }}>{judul}</h3>
        <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.5', marginBottom: '16px' }}>
          {deskripsi}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {teknologi.map((tech: string, index: number) => (
            <span key={index} style={{
              backgroundColor: '#F1F8FF',
              color: '#0366D6',
              fontSize: '12px',
              padding: '3px 8px',
              borderRadius: '6px',
              fontWeight: '500'
            }}>
              #{tech}
            </span>
          ))}
        </div>
      </div>
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          textAlign: 'center',
          backgroundColor: '#24292E',
          color: '#FFFFFF',
          padding: '8px 16px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '13px',
          fontWeight: 'bold'
        }}
      >
        Lihat Repositori GitHub
      </a>
    </div>
  );
};

export default KartuProyek;