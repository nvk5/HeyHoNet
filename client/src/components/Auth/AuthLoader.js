import React from 'react';
import Spinner from '../Spinner/Spinner';
import './auth.scss';

const AuthLoader = () => {
    return (
        <div className="auth-loader">
            <Spinner/>
        </div>
    );
}

export default AuthLoader;
