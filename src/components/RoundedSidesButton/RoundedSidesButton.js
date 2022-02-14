import React from 'react';
import './style.css';

export default function RoundedSidesButton({ buttonName, onClick }) {
  return (
    <>
      <button className="ButtonRoundedSides" onClick={onClick}>
        {buttonName}
      </button>
    </>
  );
}
