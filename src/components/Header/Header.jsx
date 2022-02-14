import React from 'react';

export default function Header({ type, text, fontSize }) {
  return (
    <>
      <div
        style={{
          fontSize: fontSize,
          fontWeight: 600,
          lineHeight: '28px',
        }}
      >
        {type === 'h1' && <h1 className="Header">{text}</h1>}
      </div>
      <div
        style={{
          fontSize: fontSize,
          fontWeight: 600,
          textTransform: 'uppercase',
        }}
      >
        {type === 'h2' && <h2 className="Header">{text}</h2>}
      </div>
    </>
  );
}
