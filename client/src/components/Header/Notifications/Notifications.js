import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './notifications.scss';
import useComponentVisible from '../../../hooks/useComponentVisible';
import NotificationButton from '../../buttons/NotificationButton/NotificationButton';
import Dropdown from '../../../utils/Dropdown/Dropdown';

const Notifications = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref } = useComponentVisible(isVisible, () => setIsVisible(false));

    return (
        <div className="notifications header__notifications" ref={ref}>
            <NotificationButton clickHandler={() => setIsVisible(prev => !prev)} />
            <Dropdown visible={isVisible}>
                <ul className="notifications__list">
                    <li className="notifications__item">
                        <Link className="notifications__link" to="/">Notif1</Link>
                    </li>
                    <li className="notifications__item">
                        <Link className="notifications__link" to="/">Notif2</Link>
                    </li>
                    <li className="notifications__item">
                        <Link className="notifications__link" to="/">Notif2</Link>
                    </li>
                </ul>
            </Dropdown>
        </div>
    );
}

export default Notifications;
