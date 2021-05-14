import React from 'react';
import './input.scss'

const Input = ({ setValue, value, type, placeholder }) => (
    <input 
        onChange={(event) => setValue(event.target.value)}
        value={value}
        className="auth__form-input"
        type={type}
        placeholder={placeholder} />
);

export default Input;