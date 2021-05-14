import React from 'react';
import UserDropdown from './UserDropdown/UserDropdown.js';
import Utils from './Utils/Utils.js';
import Notifications from './Notifications/Notifications.js';
import Search from './Search/Search.js';
import Logo from './Logo/Logo.js';
import BurgerMenu from './BurgerMenu/BurgerMenu.js';
import './header.scss';
import { useSelector } from 'react-redux';
import { hideSearch, showSearch } from '../../redux/reducers/searchReducer.js';


const Header = () => {
    const { isAuth } = useSelector(state => state.user);
    const { searchVisible } = useSelector(state => state.search);

    return (
        <header className={isAuth ? "header" : "header not-auth"}>
            {!isAuth ?
                <div className="header__start"><Logo /></div>
                :
                <>
                    <div className="header__left">
                        <BurgerMenu />
                        <Logo />
                        <Search showMethod={showSearch} hideMethod={hideSearch} searchVisibility={searchVisible} placeholder="Search on HeyHoNet"/>
                    </div>
                    <div className="header__right">
                        <Utils />
                        <Notifications />
                        <UserDropdown />
                    </div>
                </>
            }
        </header>
    );
}

export default Header;
