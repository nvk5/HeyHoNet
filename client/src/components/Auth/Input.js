import React from 'react';

const Input = ({ setValue, value, type, placeholder }) => (
    <input 
        onChange={(event) => setValue(event.target.value)}
        value={value}
        required
        className="auth__form-input"
        type={type}
        placeholder={placeholder} />
);

export default Input;