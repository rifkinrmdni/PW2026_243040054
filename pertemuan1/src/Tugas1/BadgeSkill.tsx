// src/Tugas1/BadgeSkill.tsx
import React from 'react';

interface BadgeSkillProps {
  namaSkill: string;
  level: string;
}

const BadgeSkill: React.FC<BadgeSkillProps> = ({ namaSkill, level }) => {
  const getBadgeStyle = (lvl: string) => {
    switch (lvl) {
      case 'Mahir':
        return { bg: '#D4EDDA', color: '#155724' };
      case 'Menengah':
        return { bg: '#CCE5FF', color: '#004085' };
      case 'Pemula':
      default:
        return { bg: '#FFF3CD', color: '#856404' };
    }
  };

  const style = getBadgeStyle(level);

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: 'bold',
      backgroundColor: style.bg,
      color: style.color,
      margin: '4px'
    }}>
      {namaSkill} 
      <span style={{ 
        fontSize: '11px', 
        backgroundColor: 'rgba(0,0,0,0.1)', 
        padding: '2px 6px', 
        borderRadius: '10px' 
      }}>
        {level}
      </span>
    </span>
  );
};

export default BadgeSkill;