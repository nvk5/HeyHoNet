import React from 'react';
import './main-button.scss';
import { Link } from 'react-router-dom';

const MainButton = ({ form , text = 'Main button', type = 'button', url = '/', clickHandler = () => {} }) => {
    return (
        <>
            {type === 'link'
                ?  <Link to={`${url}`} className="main-button">{text}</Link>
                : <button form={form} type={type} className="main-button" onClick={clickHandler}>{text}</button>
            }
        </>
    );
}

export default MainButton;
