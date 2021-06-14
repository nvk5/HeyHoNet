const SHOW_AUTH_LOADER = 'SHOW_AUTH_LOADER';
const HIDE_AUTH_LOADER = 'HIDE_AUTH_LOADER';
const CATCH_AUTH_ERRORS = 'CATCH_AUTH_ERRORS';

const SHOW_AUTH_FORM_LOADER = 'SHOW_AUTH_FORM_LOADER';
const HIDE_AUTH_FORM_LOADER = 'HIDE_AUTH_FORM_LOADER';
const CATCH_AUTH_FORM_ERRORS = 'CATCH_AUTH_FORM_ERRORS';

const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';
const HIDE_AUTH_FORM_ERRORS = 'HIDE_AUTH_FORM_ERRORS';

const initialState = {
    currentUser: null,
    isAuth: false,
    authLoading: false,
    authError: false,
    authFormLoading: false,
    authFormError: false,
}

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_AUTH_LOADER: return { ...state, authLoading: true, authError: false }
        case HIDE_AUTH_LOADER: return { ...state, authLoading: false }
        case CATCH_AUTH_ERRORS: return { ...state, authError: payload }

        case SHOW_AUTH_FORM_LOADER: return { ...state, authFormLoading: true, authFormError: false }
        case HIDE_AUTH_FORM_LOADER: return { ...state, authFormLoading: false }
        case CATCH_AUTH_FORM_ERRORS: return { ...state, authFormError: payload }

        case SET_USER: return { ...state, isAuth: true, currentUser: payload }
        case HIDE_AUTH_FORM_ERRORS: return { ...state, authFormError: false }
        case LOG_OUT:
            localStorage.removeItem('token');
            return { ...state, isAuth: false, currentUser: null }
        default:
            return state;
    }
}

export const showAuthLoader = () => ({ type: SHOW_AUTH_LOADER });
export const hideAuthLoader = () => ({ type: HIDE_AUTH_LOADER });
export const catchAuthErrors = (error) => ({ type: CATCH_AUTH_ERRORS, payload: error });

export const showAuthFormLoader = () => ({ type: SHOW_AUTH_FORM_LOADER });
export const hideAuthFormLoader = () => ({ type: HIDE_AUTH_FORM_LOADER });
export const catchAuthFormErrors = (error) => ({ type: CATCH_AUTH_FORM_ERRORS, payload: error });

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const logOut = () => ({ type: LOG_OUT });
export const hideAuthFormErrors = () => ({ type: HIDE_AUTH_FORM_ERRORS });
