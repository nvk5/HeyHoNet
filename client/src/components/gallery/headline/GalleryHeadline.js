import React from 'react';
import './gallery-headline.scss';

const GalleryHeadline = ({ text = 'All', counter = '0' }) => {
    return (
        <h2 className="gallery-headline">
            <span className="gallery-headline__name">{text}</span>
            <span className="gallery-headline__counter">({counter})</span>
        </h2>
    );
}

export default GalleryHeadline;