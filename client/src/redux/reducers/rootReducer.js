import { combineReducers } from 'redux';
import { searchReducer } from './searchReducer';
import { navReducer } from './navReducer';
import { modalReducer } from './modalReducer';
import { editProfileReducer } from './profile/editProfileReducer';
import { signupReducer } from './auth/signupReducer';
import { loginReducer } from './auth/loginReducer';
import { profileReducer } from './profile/profileReducer';
import { authReducer } from './auth/authReducer';
import { createAlbumReducer } from './albums/createAlbumReducer';
import { getAlbumsReducer } from './albums/getAlbumsReducer';
import { addFileReducer } from './files/addFileReducer';
import { getFilesReducer } from './files/getFilesReducer';

export default combineReducers({
    signup: signupReducer,
    login: loginReducer,
    auth: authReducer,
    profile: profileReducer,
    editprofile: editProfileReducer,
    search: searchReducer,
    nav: navReducer,
    modal: modalReducer,
    createAlbum: createAlbumReducer,
    getAlbums: getAlbumsReducer,
    addFile: addFileReducer,
    getFiles: getFilesReducer
})