import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import AuthFormLoader from './AuthFormLoader';
import Input from './Input';
import './auth.scss';
import { signUp } from '../../redux/actions/user';
import useAnimationOnMount from '../../hooks/useAnimationOnMount';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { resetLoginNotifications } from '../../redux/reducers/auth/loginReducer';

const SignUpPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const { loading, error } = useSelector(state => state.signup);

    const { animation } = useAnimationOnMount();

    const handleSignUp = (event) => {
        event.preventDefault();
        dispatch(signUp({ email, password, firstName, lastName, history }));
    }

    useEffect(() => {
        return () => {
            dispatch(resetLoginNotifications());
        }
    }, [dispatch])

    return (
        <main className="auth">
            <div className="auth__content">
                <CSSTransition mountOnEnter unmountOnExit in={animation} timeout={1000} classNames="auth-animation">
                    <div className="auth__block">
                        <h1 className="auth__headline">Welcome!</h1>
                        {error && <p className="auth__error">{error}</p>}
                        
                        {loading && <div className="auth__overlay"><AuthFormLoader/></div>}
                        <form className="auth__form" onSubmit={handleSignUp}>
                            <Input type="text" placeholder="First Name" setValue={setFirstName} value={firstName} />
                            <Input type="text" placeholder="Last Name" setValue={setLastName} value={lastName} />
                            <Input id="email" type="email" placeholder="Email" setValue={setEmail} value={email} />
                            <Input id="password" type="password" placeholder="Password" setValue={setPassword} value={password} />
                            <button className="auth__button" type="submit">
                                <span>Sign Up</span>
                            </button>
                        </form>
                        <div>
                            <p>
                                <span>Already have an account?</span>
                                <Link to='/login'>Log In</Link>
                            </p>
                        </div>
                    </div>
                </CSSTransition>
            </div>
        </main>
    );
}

export default SignUpPage;
