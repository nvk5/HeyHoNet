import React from 'react';
import Sprite from '../../../assets/images/sprite.svg';
import './trash-button.scss';

const TrashButton = () => {
    return (
        <button className="trash-button" title="delete">
            <svg className="trash-button__icon">
                <use href={`${Sprite}#trash`}></use>
            </svg>
        </button>
    );
}

export default TrashButton;
