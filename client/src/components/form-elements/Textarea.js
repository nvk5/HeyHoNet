import React from 'react';
import './form-element.scss';

const Textarea = ({ value, setValue, placeholder, name }) => {
    return (
        <label className="form-element textarea">
            <textarea
                onChange={(event) => setValue(event.target.value)}
                value={value}
                className="form-element__item"
                name={name}
            />
            <span className="form-element__placeholder">{placeholder}</span>
        </label>
    );
}

export default Textarea;
