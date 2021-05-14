import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './UserDropdown.scss';
import placeholderUser from '../../../assets/images/user.svg';
import { logOut } from '../../../redux/reducers/userReducer';
import Sprite from '../../../assets/images/sprite.svg';
import { hideUserMenu, toggleUserMenu } from '../../../redux/reducers/headerDropdownReducer';
import useComponentVisible from '../../../hooks/useComponentVisible';

const UserDropdown = () => {
    const dispatch = useDispatch();
    const { userMenuVisible } = useSelector(state => state.header);
    const { ref } = useComponentVisible(userMenuVisible, hideUserMenu);

    return (
        <div className="user-dropdown" ref={ref}>
            <button className="user-dropdown__button" onClick={() => dispatch(toggleUserMenu())} >
                <figure className="user-dropdown__content">
                    <figcaption>Name</figcaption>
                    <div className="user-dropdown__photo">
                        <img className="user-dropdown__image" alt="user" src={placeholderUser} />
                    </div>
                    <svg className={userMenuVisible ? "user-dropdown__icon open" : "user-dropdown__icon"}>
                        <use href={`${Sprite}#arrow-down`}></use>
                    </svg>
                </figure>
            </button>
            <ul className={userMenuVisible ? "user-dropdown__list show" : "user-dropdown__list"}>
                <li className="user-dropdown__list-item">
                    <Link className="user-dropdown__list-link user-dropdown__list-link--settings" to="/user-settings">
                        <svg className="user-dropdown__list-link-icon">
                            <use href={`${Sprite}#settings`}></use>
                        </svg>
                        <span>Settings</span>
                    </Link>
                </li>
                <li className="user-dropdown__list-item">
                    <button onClick={() => dispatch(logOut())} className="user-dropdown__list-link user-dropdown__list-link--signout">
                        <svg className="user-dropdown__list-link-icon">
                            <use href={`${Sprite}#signout`}></use>
                        </svg>
                        <span>Sign Out</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default UserDropdown;
