const SHOW_EDIT_PROFILE_LOADER = 'SHOW_EDIT_PROFILE_LOADER';
const HIDE_EDIT_PROFILE_LOADER = 'HIDE_EDIT_PROFILE_LOADER';
const CATCH_EDIT_PROFILE_ERRORS = 'CATCH_EDIT_PROFILE_ERRORS';
const EDIT_DONE = 'EDIT_DONE';
const RESET_EDIT_PROFILE_NOTIF = 'RESET_EDIT_PROFILE_NOTIF'

const initialState = {
    loading: false,
    editSuccess: false,
    error: false
}

export const editProfileReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_EDIT_PROFILE_LOADER: return { ...state, loading: true, error: false }
        case HIDE_EDIT_PROFILE_LOADER: return { ...state, loading: false }
        case CATCH_EDIT_PROFILE_ERRORS: return { ...state, loading: false, success: false, error: payload }
        case EDIT_DONE: return { ...state, editSuccess: true }
        case RESET_EDIT_PROFILE_NOTIF: return { loading: false, editSuccess: false, error: false }
        default: return state;
    }
}

export const showEditProfileLoader = () => ({ type: SHOW_EDIT_PROFILE_LOADER });
export const hideEditProfileLoader = () => ({ type: HIDE_EDIT_PROFILE_LOADER });
export const catchEditProfileError = (error) => ({ type: CATCH_EDIT_PROFILE_ERRORS, payload: error });
export const editDone = () => ({ type: EDIT_DONE });
export const resetEditProfileNotif = () => ({ type: RESET_EDIT_PROFILE_NOTIF })
