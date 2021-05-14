import React from 'react';
import './album-headline.scss';

const AlbumHeadline = ({ text = 'All', counter = '0' }) => {
    return (
        <h2 className="album-headline">
            <span className="album-headline__name">{text}</span>
            <span className="album-headline__counter">({counter})</span>
        </h2>
    );
}

export default AlbumHeadline;
