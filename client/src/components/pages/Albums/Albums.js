import React from 'react';
import './albums.scss';
import PageBar from '../../../utils/PageBar/PageBar';
import MainButton from '../../buttons/MainButton/MainButton';
import PlateButton from '../../buttons/PlateButton/PlateButton';
import ListButton from '../../buttons/ListButton/ListButton';
import UtilButton from '../../buttons/UtilButton/UtilButton';
import Album from './Album/Album';
import PhotoCollection from './PhotoCollection/PhotoCollection';
import AlbumHeadline from './AlbumHeadline/AlbumHeadline';

const Albums = () => {
    return (
        <main className="main page__albums">
            <div className="albums">
                <div className="albums__header">
                    <PageBar>
                        <div className="albums__wrap">
                            <div className="albums__activity">
                                <MainButton text="Create album" />
                                <MainButton text="Add photo" />
                            </div>
                            <div className="albums__view">
                                <PlateButton />
                                <ListButton />
                                <UtilButton/>
                            </div>
                        </div>
                    </PageBar>
                </div>
                <div className="albums__content">
                    <PageBar>
                        <section className="albums__tab">
                            <AlbumHeadline text="Albums" counter="5"/>
                            <div className="albums__gallery">
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                                <Album/>
                            </div>
                        </section>
                        <div className="albums__tab-content">
                            <PhotoCollection/>
                        </div>
                    </PageBar>
                </div>
            </div>
        </main>
    );
}

export default Albums;
