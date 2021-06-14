import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';
import Sprite from '../../assets/images/sprite.svg';
import { useSelector } from 'react-redux';
import { hideMenu } from '../../redux/reducers/navReducer';
import useComponentVisible from '../../hooks/useComponentVisible';

const Navigation = () => {
    const {menuIsVisible} = useSelector(state => state.nav);
    const { ref } = useComponentVisible(menuIsVisible, hideMenu);

    return (
        <nav className={menuIsVisible ? "nav open" : "nav hide"} >
            <div className={menuIsVisible ? "nav__overlay show" : "nav__overlay hide"}></div>
            <ul className="nav__list" ref={ref}>
                <li className="nav__item">
                    <NavLink className="nav__link" exact to="/" title={!menuIsVisible ? "My page" : ''}>
                        <svg className="nav__icon">
                            <use href={`${Sprite}#home`}></use>
                        </svg>
                        <span className="nav__link-title">Page</span>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/friends" title={!menuIsVisible ? "My friends" : ''}>
                        <svg className="nav__icon">
                            <use href={`${Sprite}#friends`}></use>
                        </svg>
                        <span className="nav__link-title">Friends</span>

                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/messages" title={!menuIsVisible ? "My messages" : ''}>
                        <svg className="nav__icon">
                            <use href={`${Sprite}#messages`}></use>
                        </svg>
                        <span className="nav__link-title">Messages</span>

                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/groups" title={!menuIsVisible ? "My groups" : ''}>
                        <svg className="nav__icon">
                            <use href={`${Sprite}#groups`}></use>
                        </svg>
                        <span className="nav__link-title">Groups</span>

                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/news" title={!menuIsVisible ? "My news" : ''}>
                        <svg className="nav__icon">
                            <use href={`${Sprite}#news`}></use>
                        </svg>
                        <span className="nav__link-title">News</span>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/photo" title={!menuIsVisible ? "My photos" : ''}>
                        <svg className="nav__icon">
                            <use href={`${Sprite}#photos`}></use>
                        </svg>
                        <span className="nav__link-title">Photos</span>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/audio" title={!menuIsVisible ? "My playlist" : ''}>
                        <svg className="nav__icon">
                            <use href={`${Sprite}#music`}></use>
                        </svg>
                        <span className="nav__link-title">Music</span>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/video" title={!menuIsVisible ? "My videos" : ''}>
                        <svg className="nav__icon">
                            <use href={`${Sprite}#videos`}></use>
                        </svg>
                        <span className="nav__link-title">Videos</span>
                    </NavLink>
                </li>
            </ul>
            
        </nav>
    );
}

export default Navigation;
