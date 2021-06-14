import React from 'react';
import Spinner from '../Spinner/Spinner';
import './auth.scss';

const AuthFormLoader = () => (
    <div className="auth-form-loader">
        <Spinner/>
    </div>
)

export default AuthFormLoader;