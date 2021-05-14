import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { headerDropdownReducer } from './headerDropdownReducer';
import { searchReducer } from './searchReducer';
import { navReducer } from './navReducer';

export default combineReducers({
    user: userReducer,
    search: searchReducer,
    header: headerDropdownReducer,
    nav: navReducer
})