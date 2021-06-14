import React, { useState } from 'react';
import Modal from '../../../utils/Modal/Modal';
import { useDispatch, } from 'react-redux';
import { hideCreateAlbumModal, resetCreateAlbumNotif } from '../../../redux/reducers/albums/createAlbumReducer';
import Text from '../../form-elements/Text';
import Textarea from '../../form-elements/Textarea';
import { createAlbum } from '../../../redux/actions/album';
import useUpdatingForm from '../../../hooks/useUpdatingForm';
import './gallery-modal.scss';

const CreateAlbumModal = ({modalIsVisible, loading, error, creationSuccess, albumType}) => {
    const [album, setAlbum] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createAlbum(e.target, albumType))
    }

    const { updateFormStatus } = useUpdatingForm(
        loading, creationSuccess, error, resetCreateAlbumNotif, 'Album successfully created'
    );

    return (
        <>
            {modalIsVisible &&
                <Modal
                    cancelBtnText="Cancel"
                    acceptBtnText="Create album"
                    form="album"
                    size="md"
                    headline="Create new album"
                    acceptHandler={() => { }}
                    closeHandler={() => {
                        dispatch(hideCreateAlbumModal());
                    }}>
                    <>
                        <form className="create-album-modal__form" id="album" autoComplete="off" onSubmit={handleSubmit}>
                            <Text setValue={setAlbum} value={album} placeholder="Album title" required name="title" />
                            <Textarea setValue={setDescription} value={description} placeholder="Description" name="description" />
                        </form>
                        {updateFormStatus}
                    </>
                </Modal>
            }
        </>
    );
}

export default CreateAlbumModal;
