const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';
const CATCH_FILE_ERRORS = 'CATCH_FILE_ERRORS';
const SHOW_FILE_LOADER = 'SHOW_FILE_LOADER';
const HIDE_FILE_LOADER = 'HIDE_FILE_LOADER';
const ADDITION_DONE = 'ADDITION_DONE';
const RESET_ADD_FILE_NOTIF = 'RESET_ADD_FILE_NOTIF';

const initialState = {
    fileModalIsVisible: false,
    addFileLoading: false,
    addFileError: false,
    addFileSuccess: false,
}

export const addPhotoReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_MODAL: return { ...state, fileModalIsVisible: true }
        case HIDE_MODAL: return { ...state, fileModalIsVisible: false }
        case SHOW_FILE_LOADER: return { ...state, addFileLoading: true }
        case HIDE_FILE_LOADER: return { ...state, addFileLoading: false }
        case CATCH_FILE_ERRORS: return { ...state, addFileError: payload }
        case ADDITION_DONE: return { ...state, addFileSuccess: true }
        case RESET_ADD_FILE_NOTIF: return { ...state, addFileLoading: false, addFileError: false, addFileSuccess: false }
        default: return state;
    }
}

export const showFileModal = () => ({ type: SHOW_MODAL });
export const hideFileModal = () => ({ type: HIDE_MODAL });
export const catchFileErrors = (err) => ({ type: CATCH_FILE_ERRORS, payload: err });
export const showFileLoader = () => ({ type: SHOW_FILE_LOADER });
export const hideFileLoader = () => ({ type: HIDE_FILE_LOADER });
export const additionDone = () => ({ type: ADDITION_DONE });
export const resetAddFileNotif = () => ({ type: RESET_ADD_FILE_NOTIF });