const SET_FILES = 'SET_FILES';
const SHOW_GET_FILES_LOADER = 'SHOW_GET_FILES_LOADER';
const HIDE_GET_FILES_LOADER = 'HIDE_GET_FILES_LOADER';
const CATCH_GET_FILES_ERRORS = 'CATCH_GET_FILES_ERRORS';
const RESET_GET_FILES_NOTIF = 'RESET_GET_FILES_NOTIF';

const initialState = {
    getFileLoading: false,
    getFileError: false,
    photos: [],
    videos: [],
    audios: []
}

export const getFilesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_FILES:
            const { files, type } = payload;

            console.log(type, files);

            if (type === 'photo') {
                return { ...state, photos: [ ...files] }
            }
            if (type === 'video') {
                return { ...state, videos: [ ...files] }
            }
            if (type === 'video') {
                return { ...state, audios: [ ...files] }
            }
            break;
        case SHOW_GET_FILES_LOADER: return { ...state, getFileLoading: true }
        case HIDE_GET_FILES_LOADER: return { ...state, getFileLoading: false }
        case CATCH_GET_FILES_ERRORS: return { ...state, getFileError: payload }
        case RESET_GET_FILES_NOTIF: return { ...state, getFileLoading: false, getFileError: false }
        default: return state;
    }
}

export const setFiles = (files) => ({ type: SET_FILES, payload: files });
export const showGetFilesLoader = () => ({ type: SHOW_GET_FILES_LOADER });
export const hideGetFilesLoader = () => ({ type: HIDE_GET_FILES_LOADER });
export const catchGetFilesErrors = (err) => ({ type: CATCH_GET_FILES_ERRORS, payload: err });
export const resetGetFilesNotif = () => ({ type: RESET_GET_FILES_NOTIF });