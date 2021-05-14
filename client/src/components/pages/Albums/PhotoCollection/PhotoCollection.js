import React from 'react';
import './photo-collection.scss';
import one from '../../../../assets/images/gallery/-xj7Yl3UNLI.jpg';
import two from '../../../../assets/images/gallery/1614155727119910729.jpg';
import three from '../../../../assets/images/gallery/1gvpUM0do-I.jpg';
import four from '../../../../assets/images/gallery/25G-Mv2B7A8.jpg';
import five from '../../../../assets/images/gallery/77152759_p0.jpg';
import six from '../../../../assets/images/gallery/84470193_p0_master1200.jpg';
import seven from '../../../../assets/images/gallery/EUqhacL9x4w.jpg';
import eight from '../../../../assets/images/gallery/Original_2847.jpg';
import nine from '../../../../assets/images/gallery/alsie-lau-ahri-small.jpg';
import ten from '../../../../assets/images/gallery/e_t-vRIXvvk.jpg';
import AlbumHeadline from '../AlbumHeadline/AlbumHeadline';

const PhotoCollection = () => {
    return (
        <section className="photo-collection">
            <AlbumHeadline text="All" counter="10"/>
            <div className="photo-collection__group">
                <img src={one} alt=""/>
                <img src={two} alt=""/>
                <img src={three} alt=""/>
                <img src={four} alt=""/>
                <img src={five} alt=""/>
                <img src={six} alt=""/>
                <img src={seven} alt=""/>
                <img src={eight} alt=""/>
                <img src={nine} alt=""/>
                <img src={ten} alt=""/>
            </div>
        </section>
    );
}

export default PhotoCollection;
