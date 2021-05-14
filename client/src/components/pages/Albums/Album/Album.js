import React from 'react';
import {NavLink} from 'react-router-dom';
import './album.scss';
import Temp from '../../../../assets/images/Temp.jpg';
import x from '../../../../assets/images/pexels-wojtek-pacześ-5819779.jpg'
import UtilButton from '../../../buttons/UtilButton/UtilButton';

const Album = () => {

    return (
        <NavLink className="album" to="/">
            <figure className="album__wrap">
                <div className="album__poster-wrap">
                    <img className="album__poster" src={Temp} alt=""/>
                </div>
                <figcaption className="album__caption">
                    <h3 className="album__name">{'Album Name'}</h3>
                    <div className="album__details">
                        <span className="album__counter">10 photos</span>
                        <UtilButton/>
                    </div>
                </figcaption>
            </figure>
        </NavLink>
    );
}

export default Album;
