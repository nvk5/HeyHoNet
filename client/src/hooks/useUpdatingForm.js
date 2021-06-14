import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Spinner from '../components/Spinner/Spinner';

const wrapper = {
    fontSize: '1.125rem',
    textAlign: 'center',
    letterSpacing: '.05em',
    margin: '20px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const successStyles = {
    color: '#00C787'
}

const errorStyles = {
    color: '#cc0f0f',
    marginRight: '15px'
}

const useUpdatingForm = (loading, success, error, resetMethod, successMessage) => {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => dispatch(resetMethod());
    }, [dispatch, resetMethod]);

    return {
        updateFormStatus: <>
            <div className="form-status" style={{...wrapper}}>
                {
                    loading ? <div><Spinner/></div> :
                    error ? <div><span style={{...errorStyles}}>Error:</span>{error}</div> :
                    success ? <div style={{...successStyles}}>{successMessage}</div> :
                    null
                }
            </div>
        </>
    }
}

export default useUpdatingForm;