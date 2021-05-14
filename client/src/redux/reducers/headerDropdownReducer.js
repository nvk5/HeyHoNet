const TOGGLE_UTILS = 'TOGGLE_UTILS';
const TOGGLE_NOTIFICATIONS = 'TOGGLE_NOTIFICATIONS';
const TOGGLE_USER_MENU = 'TOGGLE_USER_MENU';

const HIDE_UTILS = 'HIDE_UTILS';
const HIDE_NOTIFICATIONS = 'HIDE_NOTIFICATIONS';
const HIDE_USER_MENU = 'HIDE_USER_MENU';

const HIDE_ALL_DROPDOWNS = 'HIDE_ALL_DROPDOWNS';

const initialState = {
    utilsVisible: false,
    notificationsVisible: false,
    userMenuVisible: false,
}

export const headerDropdownReducer = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case TOGGLE_UTILS: return {...state, utilsVisible: !state.utilsVisible}
        case TOGGLE_NOTIFICATIONS: return {...state, notificationsVisible: !state.notificationsVisible}
        case TOGGLE_USER_MENU: return {...state, userMenuVisible: !state.userMenuVisible}

        case HIDE_UTILS: return {...state, utilsVisible: false}
        case HIDE_NOTIFICATIONS: return {...state, notificationsVisible: false}
        case HIDE_USER_MENU: return {...state, userMenuVisible: false}
        // case TOGGLE_UTILS:
        //     return {
        //         utilsVisible: !state.utilsVisible,
        //         notificationsVisible: false,
        //         userMenuVisible: false,
        //     }
        // case TOGGLE_NOTIFICATIONS:
        //     return {
        //         utilsVisible: false,
        //         notificationsVisible: !state.notificationsVisible,
        //         userMenuVisible: false,
        //     }
        // case TOGGLE_USER_MENU:
        //     return {
        //         utilsVisible: false,
        //         notificationsVisible: false,
        //         userMenuVisible: !state.userMenuVisible,
        //     }
        case HIDE_ALL_DROPDOWNS:
            return {
                utilsVisible: false,
                notificationsVisible: false,
                userMenuVisible: false,
            }
        default: return state
    }
}


export const toggleUtils = () => ({ type: TOGGLE_UTILS });
export const toggleNotifications = () => ({ type: TOGGLE_NOTIFICATIONS });
export const toggleUserMenu = () => ({ type: TOGGLE_USER_MENU });
export const hideUtils = () => ({type: HIDE_UTILS});
export const hideNotifications = () => ({type: HIDE_NOTIFICATIONS});
export const hideUserMenu = () => ({type: HIDE_USER_MENU});
export const hideAllDropdowns = () => ({type: HIDE_ALL_DROPDOWNS});
