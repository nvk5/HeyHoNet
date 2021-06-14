import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import PageBar from '../../../utils/PageBar/PageBar';
import './edit-profile.scss';
import CareerInfo from './fieldsets/CareerInfo';
import InterestsInfo from './fieldsets/InterestsInfo';
import EducationInfo from './fieldsets/EducationInfo';
import MainInfo from './fieldsets/MainInfo';
import ContactInfo from './fieldsets/ContactInfo';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import Sprite from '../../../assets/images/sprite.svg';

const EditProfile = () => {
    const { path } = useRouteMatch();


    return (
        <main className="main page__edit-profile">
            <div className="edit-profile">
                <div className="edit-profile__header">
                    <PageBar>
                        <h1 className="edit-profile__headline">Edit profile</h1>
                    </PageBar>
                </div>
                <div className="edit-profile__content">
                    <PageBar>
                        <div className="edit-profile__body">
                            <div className="edit-profile__aside">
                                <ul className="edit-profile__tab">
                                    <li className="edit-profile__tab-item">
                                        <NavLink className="edit-profile__tab-link" exact to={`${path}`}>
                                            <svg className="edit-profile__tab-link-icon">
                                                <use href={`${Sprite}#main-info`}></use>
                                            </svg>
                                        </NavLink>
                                    </li>
                                    <li className="edit-profile__tab-item">
                                        <NavLink className="edit-profile__tab-link" to={`${path}/contact`}>
                                            <svg className="edit-profile__tab-link-icon">
                                                <use href={`${Sprite}#contact-info`}></use>
                                            </svg>
                                        </NavLink>
                                    </li>
                                    <li className="edit-profile__tab-item">
                                        <NavLink className="edit-profile__tab-link" to={`${path}/interests`}>
                                            <svg className="edit-profile__tab-link-icon">
                                                <use href={`${Sprite}#interests-info`}></use>
                                            </svg>
                                        </NavLink>
                                    </li>
                                    <li className="edit-profile__tab-item">
                                        <NavLink className="edit-profile__tab-link" to={`${path}/education`}>
                                            <svg className="edit-profile__tab-link-icon">
                                                <use href={`${Sprite}#education-info`}></use>
                                            </svg>
                                        </NavLink>
                                    </li>
                                    <li className="edit-profile__tab-item">
                                        <NavLink className="edit-profile__tab-link" to={`${path}/career`}>
                                            <svg className="edit-profile__tab-link-icon">
                                                <use href={`${Sprite}#career-info`}></use>
                                            </svg>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <Switch>
                                <Route path={`${path}`} exact component={MainInfo} />
                                <Route path={`${path}/contact`} component={ContactInfo} />
                                <Route path={`${path}/interests`} component={InterestsInfo} />
                                <Route path={`${path}/education`} component={EducationInfo} />
                                <Route path={`${path}/career`} component={CareerInfo} />
                            </Switch>
                        </div>
                    </PageBar>
                </div>
            </div>
        </main>
    );
}

export default EditProfile;
