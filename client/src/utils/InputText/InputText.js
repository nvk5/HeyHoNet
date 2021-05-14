import React from 'react';
import './input-text.scss';

const InputText = ({ setValue, value, type, placeholder, textarea = false }) => {
    return (
        <label className="input-text">
            <span className="input-text__placeholder">{placeholder}</span>
            {!textarea ?
                <input onChange={(event) => setValue(event.target.value)}
                    value={value}
                    className="input-text__item"
                    type={type}
                />
                :
                <textarea
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                    className="input-text__item"
                />
            }
        </label>
    );
}

export default InputText;
