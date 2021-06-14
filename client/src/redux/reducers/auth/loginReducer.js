const SHOW_LOGIN_LOADER = 'SHOW_LOGIN_LOADER';
const HIDE_LOGIN_LOADER = 'HIDE_LOGIN_LOADER';
const CATCH_LOGIN_ERRORS = 'CATCH_LOGIN_ERRORS';
const RESET_LOGIN_NOTIFICATIONS = 'RESET_LOGIN_NOTIFICATIONS';
const AUTHORIZATION_DONE = 'AUTHORIZATION_DONE';
const LOG_OUT = 'LOG_OUT';

const initialState = {
    loading: false,
    error: false,
    isAuth: false
}

export const loginReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_LOGIN_LOADER: return { ...state, loading: true }
        case HIDE_LOGIN_LOADER: return { ...state, loading: false }
        case CATCH_LOGIN_ERRORS: return { ...state, loading: false, error: payload }
        case RESET_LOGIN_NOTIFICATIONS: return { ...state, error: false }
        case AUTHORIZATION_DONE: return { ...state, isAuth: true }
        case LOG_OUT:
            localStorage.removeItem('token');
            return { ...state, isAuth: false }
        default: return state
    }
}

export const showLoginLoader = () => ({ type: SHOW_LOGIN_LOADER });
export const hideLoginLoader = () => ({ type: HIDE_LOGIN_LOADER });
export const catchLoginErrors = (error) => ({ type: CATCH_LOGIN_ERRORS, payload: error });
export const resetLoginNotifications = () => ({ type: RESET_LOGIN_NOTIFICATIONS });
export const setAuthorizationDone = () => ({ type: AUTHORIZATION_DONE });
export const logOut = () => ({ type: LOG_OUT });