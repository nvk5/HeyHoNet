const RESET_USER = 'RESET_USER';
const SET_USER = 'SET_USER';

const initialState = {
    currentUser: null
}

export const profileReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case RESET_USER: return { ...state, currentUser: null }
        case SET_USER: return { ...state, currentUser: payload }
        default: return state;
    }
}

export const resetUser = () => ({ type: RESET_USER });
export const setUser = (user) => ({ type: SET_USER, payload: user });