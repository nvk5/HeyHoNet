import React from 'react';
import './form-element.scss';

const Text = ({ setValue, value, placeholder, name, required }) => {

    const clear = (e) => {
        e.preventDefault();
        setValue('');
    }
    
    return (
        <label className="form-element">
            <input onChange={(event) => setValue(event.target.value)}
                value={value}
                className="form-element__item"
                type="text"
                name={name}
                required={required}
            />
            <span className="form-element__placeholder">{placeholder}</span>
            {value && <button onClick={clear} className="form-element__clear">&times;</button>}
        </label>
    );
}

export default Text;
