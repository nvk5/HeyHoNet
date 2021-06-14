import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './UserDropdown.scss';
import placeholderUser from '../../../assets/images/user.svg';
import { logOut } from '../../../redux/reducers/userReducer';
import Sprite from '../../../assets/images/sprite.svg';
import useComponentVisible from '../../../hooks/useComponentVisible';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { resetUser } from '../../../redux/reducers/profile/profileReducer';
import Dropdown from '../../../utils/Dropdown/Dropdown';

const UserDropdown = () => {
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const { ref } = useComponentVisible(isVisible, () => setIsVisible(false));
    const history = useHistory();

    const handleLogOut = () => {
        dispatch(logOut());
        dispatch(resetUser());
        history.push('/login');
    }

    return (
        <div className="user-dropdown" ref={ref}>
            <button className="user-dropdown__button" onClick={() => setIsVisible(prev => !prev)} >
                <figure className="user-dropdown__content">
                    <figcaption>Name</figcaption>
                    <div className="user-dropdown__photo">
                        <img className="user-dropdown__image" alt="user" src={placeholderUser} />
                    </div>
                    <svg className={isVisible ? "user-dropdown__icon open" : "user-dropdown__icon"}>
                        <use href={`${Sprite}#arrow-down`}></use>
                    </svg>
                </figure>
            </button>
            <Dropdown visible={isVisible} size="sm">
                <ul className="user-dropdown__list">
                    <li className="user-dropdown__list-item">
                        <Link className="user-dropdown__list-link user-dropdown__list-link--settings" to="/user-settings">
                            <svg className="user-dropdown__list-link-icon">
                                <use href={`${Sprite}#settings`}></use>
                            </svg>
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li className="user-dropdown__list-item">
                        <button onClick={handleLogOut} className="user-dropdown__list-link user-dropdown__list-link--signout">
                            <svg className="user-dropdown__list-link-icon">
                                <use href={`${Sprite}#signout`}></use>
                            </svg>
                            <span>Sign Out</span>
                        </button>
                    </li>
                </ul>
            </Dropdown>
        </div>
    );
}

export default UserDropdown;
