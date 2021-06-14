import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import githubIcon from '../../assets/images/github.svg';
import googleIcon from '../../assets/images/google.svg';
import AuthFormLoader from './AuthFormLoader';
import Input from './Input';
import './auth.scss';
import { logIn } from '../../redux/actions/user';
import useAnimationOnMount from '../../hooks/useAnimationOnMount';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { resetLoginNotifications } from '../../redux/reducers/auth/loginReducer';
import { resetSignupNotifications } from '../../redux/reducers/auth/signupReducer';


const LogInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const { loading, error } = useSelector(state => state.login);
    const { isRegistrated } = useSelector(state => state.signup);

    const { animation } = useAnimationOnMount();

    const handleLogIn = (event) => {
        event.preventDefault();
        dispatch(logIn({ email, password, history }));
    }

    useEffect(() => {
        return () => {
            dispatch(resetLoginNotifications())
            dispatch(resetSignupNotifications())
        }
    }, [dispatch]);

    return (
        <main className="auth">
            <div className="auth__content">
                <CSSTransition mountOnEnter unmountOnExit in={animation} timeout={1000} classNames="auth-animation">
                    <div className="auth__block">
                        <h1 className="auth__headline">Sign In</h1>
                        {isRegistrated && <p className="auth__greeting">You have been Successfully registrated!</p>}
                        {error && <p className="auth__error">{error}</p>}
                        {loading && <div className="auth__overlay"><AuthFormLoader /></div>}
                        <form className="auth__form" onSubmit={handleLogIn}>
                            <Input id="email" type="email" placeholder="Email" setValue={setEmail} value={email} />
                            <Input id="password" type="password" placeholder="Password" setValue={setPassword} value={password} />
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

export default LogInPage;
