import { API_URL } from '../../config/config';
import { catchErrors, hideLoader, setUser, showLoader } from '../reducers/userReducer';

// export const signUp = async ({email, password, firstName, lastName}) => {
//     try {
//         const response = await fetch(`${API_URL}auth/signup`, {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({ email, password, firstName, lastName })
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log(result);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

export const signUp = ({email, password, firstName, lastName}) => async dispatch => {
    try {
        dispatch(showLoader());
        const response = await fetch(`${API_URL}auth/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password, firstName, lastName })
        });

        if (response.ok) {
            const result = await response.json();
            dispatch(setUser(result.user));
            console.log(result);
        }
    } catch (err) {
        console.log(err);
        dispatch(catchErrors(err));
    } finally {
        dispatch(hideLoader());
    }
}

export const logIn = ({email, password}) => async dispatch => {
    try {
        dispatch(showLoader());
        const response = await fetch(`${API_URL}auth/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        })

        if (response.ok) {
            const {token, user} = await response.json();

            dispatch(setUser(user));
            localStorage.setItem('token', token);
        }
    } catch (err) {
        console.log(err);
        dispatch(catchErrors(err));
    } finally {
        dispatch(hideLoader());
    }
} 

export const auth = () => async dispatch => {
    try {
        dispatch(showLoader());
        const response = await fetch(`${API_URL}auth/auth`, {
            headers: {authorization: `Bearer ${localStorage.getItem('token')}`}
        });

        if (response.ok) {
            const {user, token} = await response.json();
            dispatch(setUser(user));
            localStorage.setItem('token', token);
        }
        
    } catch (err) {
        console.log(err);
        dispatch(catchErrors(err));
        localStorage.removeItem('token');
    } finally {
        dispatch(hideLoader());
    }
}