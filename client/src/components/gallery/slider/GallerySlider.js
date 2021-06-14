import React, { useEffect, useRef, useState } from 'react';
import Glide from '@glidejs/glide'
import './gallery-slider.scss';
import Sprite from '../../../assets/images/sprite.svg';

const GallerySlider = ({ children, albums}) => {
    const slider = useRef(null);

    useEffect(() => {
        const getActiveIndex = () => {
            const activeLink = slider.current.querySelector('.gallery-album__link.active');
            const defaultLink = slider.current.querySelector('.gallery-album__link');
            const slides = slider.current.querySelectorAll('.glide__slide');
    
           return [...slides].findIndex(item => {
               return activeLink ? item === activeLink.parentElement : item === defaultLink.parentElement
           });
        }

        const config = {
            type: 'slider',
            startAt: getActiveIndex(),
            perView: 5,
            gap: 15,
            bound: true,
            dragThreshold: false,
        }

        const glide = new Glide('.glide', config);
        glide.mount();

    }, [albums]);

    return (
        <div className="glide" ref={slider}>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {children}
                </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                    <svg>
                        <use href={`${Sprite}#arrow-left`}></use>
                    </svg>
                </button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                    <svg>
                        <use href={`${Sprite}#arrow-left`}></use>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default GallerySlider;
