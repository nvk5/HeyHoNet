const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';
const TOGGLE_MODAL = 'TOGGLE_MODAL';

const initialState = {
    modalIsVisible: false
}

export const modalReducer = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case SHOW_MODAL: return { ...state, modalIsVisible: true }
        case HIDE_MODAL: return { ...state, modalIsVisible: false }
        case TOGGLE_MODAL: return { ...state, modalIsVisible: !state.modalIsVisible }
        default: return state
    }
}

export const showModal = () => ({ type: SHOW_MODAL });
export const hideModal = () => ({ type: HIDE_MODAL });
export const toggleModal = () => ({ type: TOGGLE_MODAL });