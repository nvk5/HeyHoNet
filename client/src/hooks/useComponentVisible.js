import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

export default function useComponentVisible(visible, closeMethod) {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        const handleHideDropdown = (event) => {
            if (event.key === 'Escape') {
                dispatch(closeMethod());
            }
        };

        const handleClickOutside = function (event) {
            if (visible && !ref.current.contains(event.target)) {
                dispatch(closeMethod());
            }
        };

        window.addEventListener('keydown', handleHideDropdown);
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('keydown', handleHideDropdown);
            window.removeEventListener('click', handleClickOutside);
        };
    }, [visible, dispatch, closeMethod]);

    return { ref }
}