const SET_ALBUMS = 'SET_ALBUMS';
const SHOW_GET_ALBUMS_LOADER = 'SHOW_GET_ALBUMS_LOADER';
const HIDE_GET_ALBUMS_LOADER = 'HIDE_GET_ALBUMS_LOADER';
const CATCH_GET_ALBUMS_ERRORS = 'CATCH_GET_ALBUMS_ERRORS';
const RESET_GET_ALBUMS_NOTIF = 'RESET_GET_ALBUMS_NOTIF';

const initialState = {
    getAlbumsLoading: false,
    getAlbumsError: false,
    photoAlbums: [],
    videoAlbums: [],
    audioAlbums: []
}

export const getAlbumsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_ALBUMS:
            const { albums, type } = payload;

            if (type === 'photo') {
                return { ...state, photoAlbums: [...albums] }
            }
            if (type === 'video') {
                return { ...state, videoAlbums: [...albums] }
            }
            if (type === 'video') {
                return { ...state, audioAlbums: [...albums] }
            }
            break;
        case SHOW_GET_ALBUMS_LOADER: return { ...state, loading: true }
        case HIDE_GET_ALBUMS_LOADER: return { ...state, loading: false }
        case CATCH_GET_ALBUMS_ERRORS: return { ...state, error: payload }
        case RESET_GET_ALBUMS_NOTIF: return { ...state, loading: false, error: false }
        default: return state;
    }
}

export const setAlbums = (albums) => ({ type: SET_ALBUMS, payload: albums });
export const showGetAlbumsLoader = () => ({ type: SHOW_GET_ALBUMS_LOADER });
export const hideGetAlbumsLoader = () => ({ type: HIDE_GET_ALBUMS_LOADER });
export const catchGetAlbumsErrors = (err) => ({ type: CATCH_GET_ALBUMS_ERRORS, payload: err });
export const resetGetAlbumsNotif = () => ({ type: RESET_GET_ALBUMS_NOTIF });