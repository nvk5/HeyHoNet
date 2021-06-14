import React, { useEffect, useState } from 'react';
import UnsavedChangesModal from '../components/UnsavedChangesModal/UnsavedChangesModal';

const useLeaveConfirmation = () => {
    const [confirm, setConfirmOpen] = useState(false);
    const [confirmCallback, setConfirmCallback] = useState(null);
    const [msg, setMsg] = useState(null);

    const getConfirmation = (message, callback) => {
        setMsg(JSON.parse(message));
        setConfirmCallback(() => callback);
        setConfirmOpen(true);
    }

    const handleHideConfirm = (event) => {
        if (event.key === 'Escape') {
            setConfirmOpen(false);
        }
    }


    useEffect(() => {
        window.addEventListener('keydown', handleHideConfirm);

        return () => {
            window.removeEventListener('keydown', handleHideConfirm);
        }
    }, [])

    return {
        confirmComponent: <>
            {confirm && (
                <UnsavedChangesModal confirmCallback={confirmCallback} setConfirmOpen={setConfirmOpen} message={msg}/>
            )}
        </>,
        promptAPIGetConfirmation: getConfirmation
    }
}

export default useLeaveConfirmation;
