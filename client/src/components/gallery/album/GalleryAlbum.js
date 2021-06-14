import React, { useEffect, useRef, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useHistory, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import useComponentVisible from '../../../hooks/useComponentVisible';
import UtilButton from '../../buttons/UtilButton/UtilButton';
import Dropdown from '../../../utils/Dropdown/Dropdown';
import Sprite from '.././../../assets/images/sprite.svg';
import Temp from '../../../assets/images/Temp.jpg';
import './gallery-album.scss';

const GalleryAlbum = ({ content: { title, description, children, _id } }) => {
    const { path } = useRouteMatch();
    const [isVisible, setIsVisible] = useState(false);
    const { ref } = useComponentVisible(isVisible, () => setIsVisible(false));
    const history = useHistory();

    return (
        <li className="glide__slide gallery-album">
            <NavLink className="gallery-album__link" onClick={() => history.push(`${path}/album/${_id}`)} to={`${path}/album/${_id}`}>
                <figure className="gallery-album__wrap">
                    <div className="gallery-album__poster-wrap">
                        <img className="gallery-album__poster" src={Temp} alt="" />
                    </div>
                    <figcaption className="gallery-album__caption">
                        <h3 className="gallery-album__name">{title}</h3>
                        <div className="gallery-album__details">
                            <span className="gallery-album__counter">{children.length} photos</span>
                            <div className="gallery-album__config" ref={ref} onClick={(e) => { e.stopPropagation(); e.preventDefault() }}>
                                <UtilButton id={_id} clickHandler={(e) => { setIsVisible(prev => !prev) }} />
                                <Dropdown visible={isVisible} size="sm">
                                    <ul className="gallery-album__config-list">
                                        <li className="gallery-album__config-list-item">
                                            <button className="gallery-album__config-list-btn">
                                                <svg className="gallery-album__config-list-icon">
                                                    <use href={`${Sprite}#trash`}></use>
                                                </svg>
                                                <span>Delete album</span>
                                            </button>
                                        </li>
                                        <li className="gallery-album__config-list-item">
                                            <button className="gallery-album__config-list-btn">
                                                <svg className="gallery-album__config-list-icon">
                                                    <use href={`${Sprite}#edit`}></use>
                                                </svg>
                                                <span>Edit album</span>
                                            </button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </NavLink>
        </li>
    );
}

export default GalleryAlbum;
