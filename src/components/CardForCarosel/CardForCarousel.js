import React from 'react';
import './style.css';

export default function CardForCarousel({ key, children, onClick }) {
  return (
    <div className="ContainerCarousel" key={key} onClick={(e) => onClick(e)}>
      {children}
    </div>
  );
}
