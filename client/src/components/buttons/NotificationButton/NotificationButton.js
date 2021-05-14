import React from 'react';
import Sprite from '../../../assets/images/sprite.svg';
import './notification-button.scss';

const NotificationButton = ({ clickHandler = () => {} }) => {
    return (
        <button className="notification-button" onClick={clickHandler}>
            <svg className="notification-button__icon">
                <use href={`${Sprite}#notification`}></use>
            </svg>
        </button>
    );
}

export default NotificationButton;
