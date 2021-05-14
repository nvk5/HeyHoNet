import React from 'react';
import User from '../../../assets/images/user.svg';
import './homepage.scss';
import UtilButton from '../../buttons/UtilButton/UtilButton';
import UserWall from './UserWall/UserWall';
import PageBar from '../../../utils/PageBar/PageBar';
import MainButton from '../../buttons/MainButton/MainButton';
import TrashButton from '../../buttons/TrashButton/TrashButton';

const HomePage = () => {

    return (
        <main className="main page__home">
            <div className="profile">
                {/* <section className="profile__cover-image"></section> */}
                <section className="profile__header">
                    <figure className="profile__user">
                        <img alt="" src={User} className="profile__avatar" />
                        <figcaption>
                            <h1 className="profile__init">
                                <span className="profile__firstname">Name</span>
                                <span className="profile__lastname">LastName</span>
                            </h1>
                            <span className="caption">Whats' new?</span>
                        </figcaption>
                    </figure>
                    <div className="profile__cover-img-buttons">
                        <TrashButton />
                        <MainButton text="Edit cover image" />
                    </div>
                </section>
                <div className="profile__buttons">
                    <PageBar>
                        <div className="profile__buttons-wrap">
                            <MainButton text="Edit profile" type="link" url="/edit"/>
                            <UtilButton />
                        </div>
                    </PageBar>
                </div>
                <div className="profile__content">
                    <div className="profile__left">
                        <section className="profile__info">
                            <PageBar>
                                <div className="profile-block">
                                    <div className="profile-block__header">
                                        <h2 className="profile-block__headline">
                                            <span className="profile-block__headline-text">Personal Info</span>
                                            <span className="profile-block__headline-counter">100</span>
                                        </h2>
                                        <div className="profile-block__settings">
                                            <UtilButton />
                                        </div>
                                    </div>
                                    <div className="profile-block__content">
                                        <ul className="prfile-block__list">
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                            <li>4</li>
                                            <li>5</li>
                                        </ul>
                                    </div>
                                </div>
                            </PageBar>
                        </section>
                        <section className="profile__photos">
                            <PageBar>
                                <div className="profile-block">
                                    <div className="profile-block__header">
                                        <h2 className="profile-block__headline">
                                            <span className="profile-block__headline-text">Photos</span>
                                            <span className="profile-block__headline-counter">100</span>
                                        </h2>
                                        <div className="profile-block__settings">
                                            <UtilButton />
                                        </div>
                                    </div>
                                    <div className="profile-block__content">
                                        <ul className="prfile-block__list">
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                            <li>4</li>
                                            <li>5</li>
                                        </ul>
                                    </div>
                                </div>
                            </PageBar>
                        </section>
                        <section className="profile__videos">
                            <PageBar>
                                <div className="profile-block">
                                    <div className="profile-block__header">
                                        <h2 className="profile-block__headline">
                                            <span className="profile-block__headline-text">Videos</span>
                                            <span className="profile-block__headline-counter">100</span>
                                        </h2>
                                        <div className="profile-block__settings">
                                            <UtilButton />
                                        </div>
                                    </div>
                                    <div className="profile-block__content">
                                        <ul className="prfile-block__list">
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                            <li>4</li>
                                            <li>5</li>
                                        </ul>
                                    </div>
                                </div>
                            </PageBar>
                        </section>
                        <section className="profile__friends">
                            <PageBar>
                                <div className="profile-block">
                                    <div className="profile-block__header">
                                        <h2 className="profile-block__headline">
                                            <span className="profile-block__headline-text">Friends</span>
                                            <span className="profile-block__headline-counter">100</span>
                                        </h2>
                                        <div className="profile-block__settings">
                                            <UtilButton />
                                        </div>
                                    </div>
                                    <div className="profile-block__content">
                                        <ul className="prfile-block__list">
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                            <li>4</li>
                                            <li>5</li>
                                        </ul>
                                    </div>
                                </div>
                            </PageBar>
                        </section>
                    </div>
                    <div className="profile__right">
                        <UserWall />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
