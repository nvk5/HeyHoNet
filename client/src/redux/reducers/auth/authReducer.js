const SHOW_AUTH_LOADER = 'SHOW_AUTH_LOADER';
const HIDE_AUTH_LOADER = 'HIDE_AUTH_LOADER';
const CATCH_AUTH_ERRORS = 'CATCH_AUTH_ERRORS';

const initialState = {
    authLoading: false,
    authError: false
}

export const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_AUTH_LOADER: return { ...state, authLoading: true, authError: false }
        case HIDE_AUTH_LOADER: return { ...state, authLoading: false }
        case CATCH_AUTH_ERRORS: return { ...state, authError: payload }
        default:
            return state;
    }
}

export const showAuthLoader = () => ({ type: SHOW_AUTH_LOADER });
export const hideAuthLoader = () => ({ type: HIDE_AUTH_LOADER });
export const catchAuthErrors = (error) => ({ type: CATCH_AUTH_ERRORS, payload: error });