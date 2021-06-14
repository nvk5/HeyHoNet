const SHOW_CREATE_ALBUM_MODAL = 'SHOW_CREATE_ALBUM_MODAL';
const HIDE_CREATE_ALBUM_MODAL = 'HIDE_CREATE_ALBUM_MODAL';
const CATCH_CREATE_ALBUM_ERRORS = 'CATCH_CREATE_ALBUM_ERRORS';
const SHOW_CREATE_ALBUM_LOADER = 'SHOW_CREATE_ALBUM_LOADER';
const HIDE_CREATE_ALBUM_LOADER = 'HIDE_CREATE_ALBUM_LOADER';
const ALBUM_CREATION_DONE = 'ALBUM_CREATION_DONE';
const RESET_CREATE_ALBUM_NOTIF = 'RESET_CREATE_ALBUM_NOTIF';

const initialState = {
    albumModalIsVisible: false,
    albumLoading: false,
    albumError: false,
    albumSuccess: false,
}

export const createAlbumReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_CREATE_ALBUM_MODAL: return { ...state, albumModalIsVisible: true }
        case HIDE_CREATE_ALBUM_MODAL: return { ...state, albumModalIsVisible: false }
        case SHOW_CREATE_ALBUM_LOADER: return { ...state, albumLoading: true }
        case HIDE_CREATE_ALBUM_LOADER: return { ...state, albumLoading: false }
        case CATCH_CREATE_ALBUM_ERRORS: return { ...state, albumError: payload }
        case ALBUM_CREATION_DONE: return { ...state, albumSuccess: true }
        case RESET_CREATE_ALBUM_NOTIF: return { ...state, albumLoading: false, albumError: false, albumSuccess: false }
        default: return state;
    }
}

export const showCreateAlbumModal = () => ({ type: SHOW_CREATE_ALBUM_MODAL });
export const hideCreateAlbumModal = () => ({ type: HIDE_CREATE_ALBUM_MODAL });
export const catchCreateAlbumErrors = (err) => ({ type: CATCH_CREATE_ALBUM_ERRORS, payload: err });
export const showCreateAlbumLoader = () => ({ type: SHOW_CREATE_ALBUM_LOADER });
export const hideCreateAlbumLoader = () => ({ type: HIDE_CREATE_ALBUM_LOADER });
export const albumCreationDone = () => ({ type: ALBUM_CREATION_DONE });
export const resetCreateAlbumNotif = () => ({ type: RESET_CREATE_ALBUM_NOTIF });