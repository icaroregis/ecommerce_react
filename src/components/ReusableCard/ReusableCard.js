import React from 'react';
import './style.css';

export default function ReusableCard({ src, onClick, key }) {
  return (
    <div className="DivPartnerBrands" onClick={(e) => onClick(e)} key={key}>
      <img className="LogoPartnerBrands" src={src} alt="Logo-Marcas" />
    </div>
  );
}
