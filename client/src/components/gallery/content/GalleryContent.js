import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GalleryPlaceholder from '../placeholder/GalleryPlaceholder';
import GalleryAlbum from '../album/GalleryAlbum';
import GalleryHeadline from '../headline/GalleryHeadline';
import GallerySlider from '../slider/GallerySlider';
import GalleryCollection from '../collection/GalleryCollection';
import Spinner from '../../Spinner/Spinner';
import PageBar from '../../../utils/PageBar/PageBar';
import './gallery-content.scss';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useRouteMatch } from 'react-router-dom';

const GalleryContent = ({ albumLoading, albumError, albums, fileLoading, fileError, files }) => {
    const { path } = useRouteMatch();

    return (
        <div className="gallery-content" >
            <PageBar>
                {albumLoading ? <div className="gallery-content__loader"><Spinner /></div> :
                    albumError ? <div className="gallery-content__error"><span>Error: </span>{albumError}</div> :
                        albums.length === 0 ? <GalleryPlaceholder /> :
                            <>
                                <section className="gallery-content__tab">
                                    <GalleryHeadline text="Albums" counter={albums.length} />
                                    <GallerySlider albums={albums}>
                                        {albums && albums.map(album => (
                                            <GalleryAlbum key={album._id} content={album} />
                                        ))}
                                    </GallerySlider>
                                </section>
                                <div className="gallery-content__tab-content">
                                    <Switch>
                                        <Route path={`${path}/album/:id`} component={GalleryCollection}/>
                                    </Switch>
                                </div>
                            </>
                }
            </PageBar>
        </div>
    );
}

export default GalleryContent;
