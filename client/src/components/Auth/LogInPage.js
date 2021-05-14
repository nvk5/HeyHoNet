import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import githubIcon from '../../assets/images/github.svg';
import googleIcon from '../../assets/images/google.svg';
import useAuthFormAnimation from '../../hooks/useAuthFormAnimation';
import Spinner from '../Spinner/Spinner';
import Input from '../../utils/Input/Input';
import './Auth.scss';
import { logIn } from '../../redux/actions/user';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {loading, error} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const { animation } = useAuthFormAnimation();

    const handleLogIn = (event) => {
        event.preventDefault();
        dispatch(logIn({ email, password }))
    }

    // if (isAuth) {
    //     return <Redirect to="/"/>
    // }

    return (
        <main className="auth">
            <div className="auth__content">
                <CSSTransition mountOnEnter unmountOnExit in={animation} timeout={1000} classNames="form-animation">
                    <div className="auth__block">
                        <h1 className="auth__headline">Sign In</h1>
                        {error && <p className="auth__error">{error.message}</p>}
                        {loading && <div className="auth__overlay"><Spinner /></div>}
                        <form className="auth__form" onSubmit={handleLogIn}>
                            <Input id="email" type="email" placeholder="Email" setValue={setEmail} value={email}/>
                            <Input id="password" type="password" placeholder="Password" setValue={setPassword} value={password}/>
                            <button className="auth__button" type="submit">
                                <span>Log In</span>
                            </button>
                        </form>
                        <div>
                            <p>
                                <span>Don't have an account?</span>
                                <Link to='/signup'>Sign Up</Link>
                            </p>
                        </div>
                        <div className="auth__additional">
                            <div className="auth__additional-divider">&mdash; or &mdash;</div>
                            <button className="auth__button auth__button--google">
                                <img className="auth__button-icon" src={googleIcon} alt="google" />
                                <span>Log in with Google</span>
                            </button>
                            <button className="auth__button auth__button--github">
                                <img className="auth__button-icon" src={githubIcon} alt="github" />
                                <span>Log in with Github</span>
                            </button>
                        </div>
                    </div>
                </CSSTransition>
            </div>
        </main>

    );
}

export default SignInPage;
