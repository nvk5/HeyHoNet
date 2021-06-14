import React from 'react';
import Modal from '../../utils/Modal/Modal';
import './unsaved-changes-modal.scss';

const UnsavedChangesModal = ({ confirmCallback, setConfirmOpen, message: { header = 'Warning', body = 'Unsaved changes will be lost' } }) => {

    const allowTransition = () => {
        setConfirmOpen(false);
        confirmCallback(true);
    }

    const blockTransition = () => {
        setConfirmOpen(false);
        confirmCallback(false);
    }

    return (
        <Modal 
            cancelBtnText="Cancel" 
            acceptBtnText="Continue" 
            closeHandler={blockTransition} 
            headline={header}
            size="sm" 
            acceptHandler={allowTransition}>
            <div className="unsaved-changes-modal">
                {body.split('. ').map((msg, i) => (
                    <p key={i} className="unsaved-changes-modal__text">{msg}</p>
                ))}
            </div>
        </Modal>

    );
}

export default UnsavedChangesModal;
