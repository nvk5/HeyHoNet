import React, { useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import './photos.scss';
import '../../gallery/gallery.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../../../redux/actions/album';
import GalleryHeader from '../../gallery/header/GalleryHeader';
import GalleryContent from '../../gallery/content/GalleryContent';
import CreateAlbumModal from '../../gallery/modals/CreateAlbumModal';
import AddFileModal from '../../gallery/modals/addFileModal';
import { showAddFileModal } from '../../../redux/reducers/files/addFileReducer';
import { showCreateAlbumModal } from '../../../redux/reducers/albums/createAlbumReducer';
import GalleryAlbums from '../../gallery/albums/GalleryAlbums';
import GalleryCollection from '../../gallery/collection/GalleryCollection';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const Photos = () => {
    const dispatch = useDispatch();
    const { getAlbumsLoading, getAlbumsError, photoAlbums } = useSelector(state => state.getAlbums);
    const { getFileLoading, getFileError, photos } = useSelector(state => state.getFiles);
    const { albumModalIsVisible, albumLoading, albumError, albumSuccess } = useSelector(state => state.createAlbum);
    const { fileModalIsVisible, fileLoading, fileError, fileSuccess } = useSelector(state => state.addFile);
    const { path } = useRouteMatch();

    return (
        <main className="main page__photos">
            <CreateAlbumModal
                loading={albumLoading}
                error={albumError}
                modalIsVisible={albumModalIsVisible}
                creationSuccess={albumSuccess}
                albumType="photo"
            />
            <AddFileModal
                loading={fileLoading}
                error={fileError}
                modalIsVisible={fileModalIsVisible}
                creationSuccess={fileSuccess}
                fileType="photo"
                accept="image"
                albums={photoAlbums}
            />
            <div className="photos">
                <GalleryHeader
                    createAlbumHandler={() => dispatch(showCreateAlbumModal())}
                    createAlbumText="Create Album"
                    addItemHandler={() => dispatch(showAddFileModal())}
                    addItemText="Add photo"
                />
                <GalleryAlbums
                    loading={getAlbumsLoading}
                    error={getAlbumsError}
                    albums={photoAlbums}
                    files={photos}
                    type="photo"
                />
                <Switch>
                    <Route path={`${path}/album/:id`} children={
                        <GalleryCollection
                            type="photo"
                            loading={getFileLoading}
                            error={getFileError}
                            files={photos}
                        />
                    } />
                </Switch>
                {/* <GalleryCollection
                
                /> */}
                {/* <GalleryContent
                    albumLoading={getAlbumsLoading}
                    albumError={getAlbumsError}
                    albums={photoAlbums}
                /> */}
            </div>
        </main>
    );
}

export default Photos;
