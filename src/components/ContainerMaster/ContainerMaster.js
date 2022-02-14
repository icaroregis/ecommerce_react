import React from 'react';
import './style.css';

export default function ContainerMaster({ children, backgroundColor, height }) {
  return (
    <section
      style={{ backgroundColor: backgroundColor, height: height }}
      className="ContainerMaster"
    >
      {children}
    </section>
  );
}
