import React from 'react';
import Sprite from '../../../assets/images/sprite.svg';
import './list-button.scss';

const ListButton = () => {
    return (
        <button className="list-button" title="list view">
            <svg className="list-button__icon">
                <use href={`${Sprite}#list`}></use>
            </svg>
        </button>
    );
}

export default ListButton;
