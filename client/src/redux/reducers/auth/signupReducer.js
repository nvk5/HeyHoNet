const SHOW_SIGNUP_LOADER = 'SHOW_SIGNUP_LOADER';
const HIDE_SIGNUP_LOADER = 'HIDE_SIGNUP_LOADER';
const CATCH_SIGNUP_ERRORS = 'CATCH_SIGNUP_ERRORS';
const RESET_SIGNUP_NOTIFICATIONS = 'RESET_SIGNUP_NOTIFICATIONS'
const REGISTRATION_DONE = 'REGISTRATION_DONE';

const initialState = {
    loading: false,
    error: false,
    isRegistrated: false
}

export const signupReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_SIGNUP_LOADER: return { ...state, loading: true }
        case HIDE_SIGNUP_LOADER: return { ...state, loading: false }
        case CATCH_SIGNUP_ERRORS: return { ...state, loading: false, error: payload }
        case RESET_SIGNUP_NOTIFICATIONS: return { ...state, error: false, isRegistrated: false }
        case REGISTRATION_DONE: return { ...state, isRegistrated: true }
        default: return state;
    }
}

export const showSignupLoader = () => ({ type: SHOW_SIGNUP_LOADER });
export const hideSignupLoader = () => ({ type: HIDE_SIGNUP_LOADER });
export const catchSignupErrors = (error) => ({ type: CATCH_SIGNUP_ERRORS, payload: error });
export const resetSignupNotifications = () => ({ type: RESET_SIGNUP_NOTIFICATIONS });
export const setRegistrationDone = () => ({ type: REGISTRATION_DONE });
