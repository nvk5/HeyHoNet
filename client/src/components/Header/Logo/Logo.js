import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => {
    const { isAuth } = useSelector(state => state.user);

    return (
        <Link className={isAuth ? "logo" : "logo not-auth"} to="/">
            <div className="logo__icon">
                <div className="logo__group">
                    <span className="logo__icon-item one">H</span>
                    <span className="logo__icon-item two">H</span>
                </div>
                <span className="logo__icon-item three">N</span>
            </div>
            <span className="logo__desc logo__group">
                <span>HeyHo</span>
                <span>Net</span>
            </span>
        </Link>
    );
}

export default Logo;
