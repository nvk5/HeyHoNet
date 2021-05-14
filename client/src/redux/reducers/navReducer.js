const SHOW_MENU = 'SHOW_MENU';
const HIDE_MENU = 'HIDE_MENU';
const TOGGLE_MENU = 'TOGGLE_MENU';

const initialState = {
    menuIsVisible: false
}

export const navReducer = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case SHOW_MENU: return { ...state, menuIsVisible: true }
        case HIDE_MENU: return { ...state, menuIsVisible: false }
        case TOGGLE_MENU: return { ...state, menuIsVisible: !state.menuIsVisible }
        default: return state
    }
}


export const showMenu = () => ({ type: SHOW_MENU });
export const hideMenu = () => ({ type: HIDE_MENU });
export const toggleMenu = () => ({ type: TOGGLE_MENU });