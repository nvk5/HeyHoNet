import React from 'react';
import './form-element.scss';

const Number = ({ setValue, value, placeholder, name }) => {

    const clear = (e) => {
        e.preventDefault();
        setValue('');
    }

    const handleChange = (e) => {
        const regex = /\d*/;
        const resultStr = e.target.value.match(regex);

        if (resultStr) {
            setValue(resultStr);
        }
    }

    return (
        <label className="form-element">
            <input onChange={handleChange}
                value={value}
                className="form-element__item"
                type="text"
                name={name}
            />
            <span className="form-element__placeholder">{placeholder}</span>
            {value && <button onClick={clear} className="form-element__clear">&times;</button>}
        </label>
    );
}

export default Number;
