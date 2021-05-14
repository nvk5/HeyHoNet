const SEARCH = 'SEARCH';
const SHOW_SEARCH = 'SHOW_SEARCH';
const HIDE_SEARCH = 'HIDE_SEARCH';

const SEARCH_POSTS = 'SEARCH_POSTS';
const SHOW_SEARCH_POSTS = 'SHOW_SEARCH_POSTS';
const HIDE_SEARCH_POSTS = 'HIDE_SEARCH_POSTS';

const initialState = {
    search: '',
    searchPosts: '',
    searchVisible: false,
    searchPostVisible: false
}

export const searchReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_SEARCH: return { ...state, searchVisible: true }
        case HIDE_SEARCH: return { ...state, searchVisible: false }
        case SEARCH: return { ...state, searchVisible: false, search: payload }

        case SHOW_SEARCH_POSTS: return { ...state, searchPostVisible: true }
        case HIDE_SEARCH_POSTS: return { ...state, searchPostVisible: false }
        case SEARCH_POSTS: return { ...state, searchPostVisible: false, searchPosts: payload }
        default: return state
    }
}

export const search = (searchString) => ({ type: SEARCH, payload: searchString });
export const showSearch = () => ({ type: SHOW_SEARCH });
export const hideSearch = () => ({ type: HIDE_SEARCH });

export const searchPosts = (searchString) => ({ type: SEARCH_POSTS, payload: searchString });
export const showSearchPosts = () => ({ type: SHOW_SEARCH_POSTS });
export const hideSearchPosts = () => ({ type: HIDE_SEARCH_POSTS });

