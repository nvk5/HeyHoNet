import React from 'react';
import './dropdown.scss';

const Dropdown = ({ children, visible = false, size = 'md' }) => {
    return (
        <div className={visible ? `dropdown show ${size}` : `dropdown ${size}`}>
            {children}
        </div>
    );
}

export default Dropdown;
