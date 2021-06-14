const SET_ALBUMS = 'SET_ALBUMS';
const SHOW_ALBUMS_LOADER = 'SHOW_ALBUMS_LOADER';
const HIDE_ALBUMS_LOADER = 'HIDE_ALBUMS_LOADER';
const CATCH_ALBUMS_ERRORS = 'CATCH_ALBUMS_ERRORS';
const RESET_GET_ALBUMS_NOTIF = 'RESET_GET_ALBUMS_NOTIF';

const initialState = {
    getPhotoAlbumsLoading: false,
    getPhotoAlbumsError: false,
    photoAlbums: []
}

export const getPhotoAlbumsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_PHOTO_ALBUMS: return { ...state, photoAlbums: [...payload] }
        case SHOW_GET_ALBUMS_LOADER: return { ...state, loading: true }
        case HIDE_GET_ALBUMS_LOADER: return { ...state, loading: false }
        case CATCH_GET_ALBUMS_ERRORS: return { ...state, error: payload }
        case RESET_GET_ALBUMS_NOTIF: return {...state, loading: false, error: false}
        default: return state;
    }
}

export const setPhotoAlbums = (albums) => ({ type: SET_ALBUMS, payload: albums });
export const showAlbumsLoader = () => ({ type: SHOW_ALBUMS_LOADER });
export const hideAlbumsLoader = () => ({ type: HIDE_ALBUMS_LOADER });
export const catchAlbumsErrors = (err) => ({ type: SET_ALBUMS, payload: err });
export const resetGetAlbumsNotif = () => ({ type: RESET_GET_ALBUMS_NOTIF });