import React from 'react';
import Sprite from '../../../assets/images/sprite.svg';
import './util-button.scss';

const UtilButton = ({ clickHandler = () => { }, id}) => {
    return (
        <button id={id} className={`util-button`} onClick={clickHandler}>
            <svg className="util-button__icon">
                <use href={`${Sprite}#three-dots`}></use>
            </svg>
        </button>
    );
}

export default UtilButton;
