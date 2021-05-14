import React from 'react';
import './profile-block.scss';
import UtilButton from '../../../buttons/UtilButton/UtilButton';
import PlateButton from '../../../buttons/PlateButton/PlateButton';
import ListButton from '../../../buttons/ListButton/ListButton';

const ProfileBlock = ({ content }) => {
    return (
        <div className="profile-block">
            <div className="profile-block__header">
                <h2 className="profile-block__headline">
                    <span className="profile-block__headline-text">Info</span>
                    <span className="profile-block__headline-counter">100</span>
                </h2>
                <div className="profile-block__view-settings">
                    <PlateButton/>
                    <ListButton/>
                    <UtilButton clickHandler={() => {}} placeClass="profile"/>
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
    );
}

export default ProfileBlock;
