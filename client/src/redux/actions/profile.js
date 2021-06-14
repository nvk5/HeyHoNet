import { API_URL } from "../../config/config";
import { catchEditProfileError, editDone, hideEditProfileLoader, showEditProfileLoader } from "../reducers/profile/editProfileReducer";
import {setUser} from '../reducers/profile/profileReducer';

export const edit = (form, path) => async dispatch => {
    try {
        dispatch(showEditProfileLoader());
        const formData = new FormData(form);
        const obj = Object.fromEntries(formData);

        const response = await fetch(`${API_URL}edit${path}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(obj)
        })

        if (response.ok) {
            const { updatedUser } = await response.json();

            dispatch(editDone());
            dispatch(setUser(updatedUser));
        } else {
            const { message } = await response.json();
            throw new Error(message);
        }
    } catch (err) {
        dispatch(catchEditProfileError(err.message));

    } finally {
        dispatch(hideEditProfileLoader());
    }
}