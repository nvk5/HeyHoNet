import { API_URL } from '../../config/config';
import { catchAuthErrors, hideAuthLoader, showAuthLoader } from '../reducers/auth/authReducer';
import { catchLoginErrors, hideLoginLoader, setAuthorizationDone, showLoginLoader } from '../reducers/auth/loginReducer';
import { catchSignupErrors, hideSignupLoader, setRegistrationDone, showSignupLoader } from '../reducers/auth/signupReducer';
import { setUser } from '../reducers/profile/profileReducer';
// import { catchAuthErrors, catchAuthFormErrors, hideAuthFormLoader, hideAuthLoader, setUser, showAuthFormLoader, showAuthLoader } from '../reducers/userReducer';

export const signUp = ({ email, password, firstName, lastName, history }) => async dispatch => {
    firstName = `${firstName[0].toUpperCase()}${firstName.slice(1)}` 
    lastName = `${lastName[0].toUpperCase()}${lastName.slice(1)}` 
    
    try {
        dispatch(showSignupLoader());
        const response = await fetch(`${API_URL}auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, firstName, lastName })
        });

        if (response.ok) {
            const result = await response.json();
            dispatch(setRegistrationDone());
            history.push('/login');
        } else {
            const { message } = await response.json();
            throw new Error(message);
        }
    } catch (err) {
        dispatch(catchSignupErrors(err.message));
    } finally {
        dispatch(hideSignupLoader());
    }
}

export const logIn = ({ email, password, history }) => async dispatch => {
    try {
        dispatch(showLoginLoader());
        const response = await fetch(`${API_URL}auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const { token, user } = await response.json();

            dispatch(setAuthorizationDone())
            dispatch(setUser(user));
            localStorage.setItem('token', token);
            history.push('/');
        } else {
            const { message } = await response.json();
            throw new Error(message);
        }
    } catch (err) {
        dispatch(catchLoginErrors(err.message));
    } finally {
        dispatch(hideLoginLoader());
    }
}

export const auth = () => async dispatch => {
    try {
        dispatch(showAuthLoader());
        const response = await fetch(`${API_URL}auth/auth`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });

        if (response.ok) {
            const { user, token } = await response.json();
            dispatch(setAuthorizationDone())
            dispatch(setUser(user));
            localStorage.setItem('token', token);
        } else {
            const { message } = await response.json();
            throw new Error(message);
        }

    } catch (err) {
        dispatch(catchAuthErrors(err.message));
        localStorage.removeItem('token');
    } finally {
        dispatch(hideAuthLoader());
    }
}

