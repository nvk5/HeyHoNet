import { useDispatch } from 'react-redux';

const useHandleSubmit = (method, path) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(method(e.target, path))
    }

    return { handleSubmit }
}

export default useHandleSubmit;
