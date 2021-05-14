import React from 'react';
import Sprite from '../../../assets/images/sprite.svg';
import './plate-button.scss';

const PlateButton = () => {
    return (
        <button className="plate-button" title="plate view">
            <svg className="plate-button__icon">
                <use href={`${Sprite}#plate`}></use>
            </svg>
        </button>
    );
}

export default PlateButton;
