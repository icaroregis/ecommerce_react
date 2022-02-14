import React from 'react';
import './style.css';

export default function Input({
  value,
  setValue,
  type,
  placeholder,
  label,
  id,
  required,
}) {
  return (
    <>
      <label className="Label" htmlFor={id}>
        {label}
      </label>
      <input
        className="Input"
        label={label}
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
}
