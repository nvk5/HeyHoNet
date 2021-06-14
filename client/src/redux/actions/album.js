import { API_URL } from "../../config/config";
import { albumCreationDone, catchCreateAlbumErrors, hideCreateAlbumLoader, showCreateAlbumLoader } from "../reducers/albums/createAlbumReducer";
import { catchGetAlbumsErrors, hideGetAlbumsLoader, setAlbums, showGetAlbumsLoader } from "../reducers/albums/getAlbumsReducer";


export const createAlbum = (form, type) => async dispatch => {
    try {
        dispatch(showCreateAlbumLoader());
        const formData = new FormData(form);
        const obj = { ...Object.fromEntries(formData), type };

        const response = await fetch(`${API_URL}albums/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(obj)
        })

        if (response.ok) {
            const albums = await response.json();
            dispatch(setAlbums({ albums, type }));
            dispatch(albumCreationDone());
        } else {
            const { message } = await response.json();
            throw new Error(message);
        }
    } catch (err) {
        console.log(err);
        dispatch(catchCreateAlbumErrors(err.message));
    } finally {
        dispatch(hideCreateAlbumLoader());
    }
}

export const getAlbums = (type) => async dispatch => {
    try {
        dispatch(showGetAlbumsLoader());
        const response = await fetch(`${API_URL}albums?type=${type}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.ok) {
            const albums = await response.json();
            dispatch(setAlbums({ albums, type }));
        }
    } catch (err) {
        dispatch(catchGetAlbumsErrors(err.message));
    } finally {
        dispatch(hideGetAlbumsLoader())
    }
}