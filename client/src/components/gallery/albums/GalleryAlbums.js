import React, { useEffect } from 'react';
import GallerySlider from '../slider/GallerySlider';
import GalleryHeadline from '../headline/GalleryHeadline';
import GalleryAlbum from '../album/GalleryAlbum';
import './gallery-albums.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../../../redux/actions/album';
import Spinner from '../../Spinner/Spinner';
import GalleryPlaceholder from '../placeholder/GalleryPlaceholder';
import PageBar from '../../../utils/PageBar/PageBar';

const GalleryAlbums = ({ loading, error, albums, type, files }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbums(type));
    }, [dispatch, type, files]);

    return (
        <div className="gallery-albums">
            <PageBar>
                {loading && <div className="gallery-loader"><Spinner /></div>}
                {error && <div className="gallery-error"><span>Error: </span>{error}</div>}
                {albums.length === 0 && <GalleryPlaceholder />}
                {albums.length !== 0 &&
                    <section className="gallery-content">
                        <GalleryHeadline text="Albums" counter={albums.length} />
                        <GallerySlider albums={albums}>
                            {albums && albums.map(album => (
                                <GalleryAlbum key={album._id} content={album} />
                            ))}
                        </GallerySlider>
                    </section>
                }
            </PageBar>
        </div>
    );
}

export default GalleryAlbums;
