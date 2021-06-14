import { API_URL } from "../../config/config";
import { catchAddFileErrors, fileAdditionDone, hideAddFileLoader, showAddFileLoader } from "../reducers/files/addFileReducer";
import { catchGetFilesErrors, hideGetFilesLoader, setFiles, showGetFilesLoader } from "../reducers/files/getFilesReducer";

export const addFile = ({file, type, album}) => async dispatch => {
    try {
        dispatch(showAddFileLoader());
        const formData = new FormData();
        formData.append('albumTitle', album.value || 'All');
        formData.append('file', file);
        formData.append('fileType', type);

        const response = await fetch(`${API_URL}files/add`, {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: formData
        })

        if (response.ok) {
            const {albums, files} = await response.json();
            console.log(files);
            dispatch(setFiles({files, type}));
            dispatch(fileAdditionDone());
        } else {
            const { message } = await response.json();
            throw new Error(message);
        }
    } catch (err) {
        console.log(err);
        dispatch(catchAddFileErrors(err.message));
    } finally {
        dispatch(hideAddFileLoader());
    }
}

export const getFiles = ({albumId, type}) => async dispatch => {
    try {
        dispatch(showGetFilesLoader());
        const response = await fetch(`${API_URL}files?type=${type}&album=${albumId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            } 
        })

        if (response.ok) {
            const {files, album} = await response.json();
            console.log(files);
            dispatch(setFiles({files, type}));
        }
    } catch (err) {
        dispatch(catchGetFilesErrors(err.message));
    } finally {
        dispatch(hideGetFilesLoader())
    }
}