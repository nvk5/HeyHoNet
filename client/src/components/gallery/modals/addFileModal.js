import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useUpdatingForm from '../../../hooks/useUpdatingForm';
import { addFile } from '../../../redux/actions/file';
import { hideAddFileModal, resetAddFileNotif } from '../../../redux/reducers/files/addFileReducer';
import Modal from '../../../utils/Modal/Modal';
import Select from '../../form-elements/Select';

const AddFileModal = ({ modalIsVisible, loading, error, creationSuccess, fileType, accept, albums }) => {
    const dispatch = useDispatch();
    const [album, setAlbum] = useState('');

    const albumOptions = albums.map(item => ({label: item.title, value: item.title}))

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const files = [...e.target.file.files];
        files.forEach(file => dispatch(addFile({file, type: fileType, album})))

    }

    const { updateFormStatus } = useUpdatingForm(
        loading, creationSuccess, error, resetAddFileNotif, 'Files uploaded'
    );

    return (
        <>
            {modalIsVisible &&
                <Modal
                    cancelBtnText="Cancel"
                    acceptBtnText="Add file"
                    form="file"
                    size="md"
                    headline="Add files"
                    acceptHandler={() => { }}
                    closeHandler={() => {
                        dispatch(hideAddFileModal());
                    }}>
                    <>
                        <form className="add-file-modal" id="file" autoComplete="off" onSubmit={handleSubmit}>
                            <input name="file" type="file" className="add-file-modal__input" multiple={true} accept={`${accept}/*`}/>
                            <Select name="albums" options={albumOptions} value={album} setValue={(value) => setAlbum(value)} placeholder="Select album" />
                        </form>
                        {updateFormStatus}
                    </>
                </Modal>
            }
        </>
    );
}

export default AddFileModal;
