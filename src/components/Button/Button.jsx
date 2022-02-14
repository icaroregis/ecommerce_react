import React from 'react';
import './style.css';

export default function Button({ buttonName, onClick, background, width }) {
  return (
    <>
      <button
        style={{ background: background, width: width }}
        className="ButtonDefault"
        onClick={onClick}
      >
        {buttonName}
      </button>
    </>
  );
}
