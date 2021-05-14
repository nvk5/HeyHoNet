import React from 'react';
import UtilButton from '../buttons/UtilButton/UtilButton';
import Sprite from '../../assets/images/sprite.svg';
import User from '../../assets/images/user.svg';
import './post.scss';
import PageBar from '../../utils/PageBar/PageBar';

const Post = () => {
    return (
        <PageBar>
            <article className="post">
                <h2 className="visually-hidden">Post</h2>
                <header className="post__header">
                    <img className="post__user-avatar" alt="" src={User} />
                    <div className="post__details">
                        <p className="post__author">Name Lastname</p>
                        <time datetime="2015-05-17 19:00">17 мая</time>
                    </div>
                    <div className="post__settings">
                        <UtilButton clickHandler={() => { }} placeClass="post-utils" />
                    </div>
                </header>
                <div className="post__content">
                    Lorem LoremLoremLorem
                </div>
                <div className="post__reaction">
                    <button className="post__button">
                        <svg className="post__reaction-icon">
                            <use href={`${Sprite}#like`}></use>
                        </svg>
                        <span>Like</span>
                    </button>
                    <button className="post__button">
                        <svg className="post__reaction-icon">
                            <use href={`${Sprite}#comment`}></use>
                        </svg>
                        <span>Comment</span>
                    </button>
                    <button className="post__button">
                        <svg className="post__reaction-icon">
                            <use href={`${Sprite}#share`}></use>
                        </svg>
                        <span>Share</span>
                    </button>
                </div>
            </article>
        </PageBar>
    );
}

export default Post;
