const SHOW_ADD_FILE_MODAL = 'SHOW_ADD_FILE_MODAL';
const HIDE_ADD_FILE_MODAL = 'HIDE_ADD_FILE_MODAL';
const CATCH_ADD_FILE_ERRORS = 'CATCH_ADD_FILE_ERRORS';
const SHOW_ADD_FILE_LOADER = 'SHOW_ADD_FILE_LOADER';
const HIDE_ADD_FILE_LOADER = 'HIDE_ADD_FILE_LOADER';
const FILE_ADDITION_DONE = 'FILE_ADDITION_DONE';
const RESET_ADD_FILE_NOTIF = 'RESET_ADD_FILE_NOTIF';

const initialState = {
    fileModalIsVisible: false,
    fileLoading: false,
    fileError: false,
    fileSuccess: false,
}

export const addFileReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_ADD_FILE_MODAL: return { ...state, fileModalIsVisible: true }
        case HIDE_ADD_FILE_MODAL: return { ...state, fileModalIsVisible: false }
        case SHOW_ADD_FILE_LOADER: return { ...state, fileLoading: true }
        case HIDE_ADD_FILE_LOADER: return { ...state, fileLoading: false }
        case CATCH_ADD_FILE_ERRORS: return { ...state, fileError: payload }
        case FILE_ADDITION_DONE: return { ...state, fileSuccess: true }
        case RESET_ADD_FILE_NOTIF: return { ...state, fileLoading: false, fileError: false, fileSuccess: false }
        default: return state;
    }
}

export const showAddFileModal = () => ({ type: SHOW_ADD_FILE_MODAL });
export const hideAddFileModal = () => ({ type: HIDE_ADD_FILE_MODAL });
export const catchAddFileErrors = (err) => ({ type: CATCH_ADD_FILE_ERRORS, payload: err });
export const showAddFileLoader = () => ({ type: SHOW_ADD_FILE_LOADER });
export const hideAddFileLoader = () => ({ type: HIDE_ADD_FILE_LOADER });
export const fileAdditionDone = () => ({ type: FILE_ADDITION_DONE });
export const resetAddFileNotif = () => ({ type: RESET_ADD_FILE_NOTIF });