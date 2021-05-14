import React from 'react';
import { NavLink, useLocation, Switch, Route } from 'react-router-dom';
import PageBar from '../../../utils/PageBar/PageBar';
import './edit-profile.scss';
import InputText from '../../../utils/InputText/InputText';
import CareerInfo from './CareerInfo';
import InterestsInfo from './InterestsInfo';
import EducationInfo from './EducationInfo';
import MainInfo from './MainInfo';
import ContactInfo from './ContactInfo';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const EditProfile = () => {
    const {path} = useRouteMatch();

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
                            <Switch>
                                <Route path={`${path}`} exact component={MainInfo}/>
                                <Route path={`${path}/contact`} component={ContactInfo}/>
                                <Route path={`${path}/interests`} component={InterestsInfo}/>
                                <Route path={`${path}/education`} component={EducationInfo}/>
                                <Route path={`${path}/career`} component={CareerInfo}/>
                            </Switch>
                        <div className="edit-profile__aside">
                            <ul className="edit-profile__tab">
                                <li className="edit-profile__tab-item">
                                    <NavLink className="edit-profile__tab-link" exact to={`${path}`}>Main info</NavLink>
                                </li>
                                <li className="edit-profile__tab-item">
                                    <NavLink className="edit-profile__tab-link" to={`${path}/contact`}>Contacts</NavLink>
                                </li>
                                <li className="edit-profile__tab-item">
                                    <NavLink className="edit-profile__tab-link" to={`${path}/interests`}>Interests</NavLink>
                                </li>
                                <li className="edit-profile__tab-item">
                                    <NavLink className="edit-profile__tab-link" to={`${path}/education`}>Education</NavLink>
                                </li>
                                <li className="edit-profile__tab-item">
                                    <NavLink className="edit-profile__tab-link" to={`${path}/career`}>Career</NavLink>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </PageBar>
                </div>
            </div>
        </main>
    );
}

export default EditProfile;
