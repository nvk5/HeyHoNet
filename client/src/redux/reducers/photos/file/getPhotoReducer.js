const SET_PHOTOS = 'SET_PHOTOS';
const SHOW_PHOTOS_LOADER = 'SHOW_PHOTOS_LOADER';
const HIDE_PHOTOS_LOADER = 'HIDE_PHOTOS_LOADER';
const CATCH_ALBUMS_ERRORS = 'CATCH_ALBUMS_ERRORS';
const RESET_GET_ALBUMS_NOTIF = 'RESET_GET_ALBUMS_NOTIF';

const initialState = {
    loading: false,
    error: false,
    albums: []
}

export const getAlbumsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_ALBUMS: return { ...state, albums: [...payload] }
        case SHOW_ALBUMS_LOADER: return { ...state, loading: true }
        case HIDE_ALBUMS_LOADER: return { ...state, loading: false }
        case CATCH_ALBUMS_ERRORS: return { ...state, error: payload }
        case RESET_GET_ALBUMS_NOTIF: return {...state, loading: false, error: false}
        default: return state;
    }
}

export const setAlbums = (albums) => ({ type: SET_ALBUMS, payload: albums });
export const showAlbumsLoader = () => ({ type: SHOW_ALBUMS_LOADER });
export const hideAlbumsLoader = () => ({ type: HIDE_ALBUMS_LOADER });
export const catchAlbumsErrors = (err) => ({ type: SET_ALBUMS, payload: err });
export const resetGetAlbumsNotif = () => ({ type: RESET_GET_ALBUMS_NOTIF });