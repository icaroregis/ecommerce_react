import React from 'react';
import './style.css';

export default function SearchInput({
  id,
  label,
  value,
  setValue,
  type,
  placeholder,
  required,
}) {
  return (
    <section className="ContainerSearchByProduct">
      <div className="LabelSearchInput">
        <label htmlFor={id}>{label}</label>
      </div>

      <input
        className="InputSearchBrand"
        label={label}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        placeholder={placeholder}
        required={required}
      />
      <div className="BorderSearchBrand" />
    </section>
  );
}
