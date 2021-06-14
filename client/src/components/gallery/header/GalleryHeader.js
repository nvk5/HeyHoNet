import React from 'react';
import PageBar from '../../../utils/PageBar/PageBar';
import PlateButton from '../../buttons/PlateButton/PlateButton';
import ListButton from '../../buttons/ListButton/ListButton';
import UtilButton from '../../buttons/UtilButton/UtilButton';
import MainButton from '../../buttons/MainButton/MainButton';
import './gallery-header.scss';

const GalleryHeader = ({ createAlbumHandler, createAlbumText, addItemHandler, addItemText }) => {
    return (
        <div className="gallery-header">
            <PageBar>
                <div className="gallery-header__wrap">
                    <div className="gallery-header__activity">
                        <MainButton text={createAlbumText} clickHandler={createAlbumHandler} />
                        <MainButton text={addItemText} clickHandler={addItemHandler} />
                    </div>
                    <div className="gallery-header__view">
                        <PlateButton />
                        <ListButton />
                        <UtilButton />
                    </div>
                </div>
            </PageBar>
        </div>
    );
}

export default GalleryHeader;
