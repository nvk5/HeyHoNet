import React, { useEffect } from 'react';
import one from '../../../assets/images/gallery/-xj7Yl3UNLI.jpg';
import two from '../../../assets/images/gallery/1614155727119910729.jpg';
import three from '../../../assets/images/gallery/1gvpUM0do-I.jpg';
import four from '../../../assets/images/gallery/25G-Mv2B7A8.jpg';
import five from '../../../assets/images/gallery/77152759_p0.jpg';
import six from '../../../assets/images/gallery/84470193_p0_master1200.jpg';
import seven from '../../../assets/images/gallery/EUqhacL9x4w.jpg';
import eight from '../../../assets/images/gallery/Original_2847.jpg';
import nine from '../../../assets/images/gallery/alsie-lau-ahri-small.jpg';
import ten from '../../../assets/images/gallery/e_t-vRIXvvk.jpg';
import GalleryHeadline from '../headline/GalleryHeadline';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import PageBar from '../../../utils/PageBar/PageBar';
import { getFiles } from '../../../redux/actions/file';
import Spinner from '../../Spinner/Spinner';
import GalleryPlaceholder from '../placeholder/GalleryPlaceholder';

const GalleryCollection = ({ type, loading, error, files, }) => {
    console.log(files);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFiles({ albumId: id, type }))
    }, [dispatch, id, type]);

    return (
        <PageBar>
            {loading && <div className="gallery-loader"><Spinner /></div>}
            {error && <div className="gallery-error"><span>Error: </span>{error}</div>}
            <section className="gallery-collection">
                <GalleryHeadline text="All" counter="10" />
                <div className="photo-collection__group">
                    {files && files.map(file => (
                        <>
                            <p key={file._id}>{file.name}</p>
                            <img src={file.data} alt="" />
                        </>
                    ))}
                </div>
            </section>
        </PageBar>
    );
}

export default GalleryCollection;
