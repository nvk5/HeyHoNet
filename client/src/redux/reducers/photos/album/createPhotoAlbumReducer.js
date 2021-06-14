const SHOW_CREATE_ALBUM_MODAL = 'SHOW_CREATE_ALBUM_MODAL';
const HIDE_CREATE_ALBUM_MODAL = 'HIDE_CREATE_ALBUM_MODAL';
const CATCH_CREATE_ALBUM_ERRORS = 'CATCH_CREATE_ALBUM_ERRORS';
const SHOW_CREATE_ALBUM_LOADER = 'SHOW_CREATE_ALBUM_LOADER';
const HIDE_CREATE_ALBUM_LOADER = 'HIDE_CREATE_ALBUM_LOADER';
const ALBUM_CREATION_DONE = 'ALBUM_CREATION_DONE';
const RESET_CREATE_ALBUM_NOTIF = 'RESET_CREATE_ALBUM_NOTIF';

const initialState = {
    photoAlbumModalIsVisible: false,
    createPhotoAlbumLoading: false,
    createPhotoAlbumError: false,
    createPhotoAlbumSuccess: false,
}

export const createPhotoAlbumReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_CREATE_ALBUM_MODAL: return { ...state, photoAlbumModalIsVisible: true }
        case HIDE_CREATE_ALBUM_MODAL: return { ...state, photoAlbumModalIsVisible: false }
        case SHOW_CREATE_ALBUM_LOADER: return { ...state, createPhotoAlbumLoading: true }
        case HIDE_CREATE_ALBUM_LOADER: return { ...state, createPhotoAlbumLoading: false }
        case CATCH_CREATE_ALBUM_ERRORS: return { ...state, createPhotoAlbumError: payload }
        case ALBUM_CREATION_DONE: return { ...state, createPhotoAlbumSuccess: true }
        case RESET_CREATE_ALBUM_NOTIF: return { ...state, createPhotoAlbumLoading: false, createPhotoAlbumError: false, createPhotoAlbumSuccess: false }
        default: return state;
    }
}

export const showCreateAlbumModal = () => ({ type: SHOW_CREATE_ALBUM_MODAL });
export const hideCreateAlbumModal = () => ({ type: HIDE_CREATE_ALBUM_MODAL });
export const catchCreateAlbumErrors = (err) => ({ type: CATCH_CREATE_ALBUM_ERRORS, payload: err });
export const showCreateAlbumLoader = () => ({ type: SHOW_CREATE_ALBUM_LOADER });
export const hideCreateAlbumLoader = () => ({ type: HIDE_CREATE_ALBUM_LOADER });
export const creationDone = () => ({ type: ALBUM_CREATION_DONE });
export const resetCreateAlbumNotif = () => ({ type: RESET_CREATE_ALBUM_NOTIF });