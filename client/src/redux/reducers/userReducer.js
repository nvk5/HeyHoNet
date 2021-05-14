const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';
const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';
const CATCH_ERRORS = 'CATCH_ERRORS';

const initialState = {
    currentUser: null,
    isAuth: false,
    loading: false,
    error: false
}

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_LOADER: return { ...state, loading: true, error: false }
        case HIDE_LOADER: return { ...state, loading: false }
        case SET_USER: return { ...state, isAuth: true, currentUser: payload }
        case CATCH_ERRORS: return { ...state, loading: false, error: payload }
        case LOG_OUT:
            localStorage.removeItem('token');
            return { ...state, isAuth: false, currentUser: null }
        default:
            return state;
    }
}

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
export const catchErrors = (error) => ({ type: CATCH_ERRORS, payload: error });
export const logOut = () => ({ type: LOG_OUT });