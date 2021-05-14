import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { hideNotifications, toggleNotifications } from '../../../redux/reducers/headerDropdownReducer';
import './notifications.scss';
import useComponentVisible from '../../../hooks/useComponentVisible';
import NotificationButton from '../../buttons/NotificationButton/NotificationButton';

const Notifications = () => {
    const dispatch = useDispatch();
    const { notificationsVisible } = useSelector(state => state.header);
    const { ref } = useComponentVisible(notificationsVisible, hideNotifications);

    return (
        <div className="notifications header__notifications" ref={ref}>
            <NotificationButton clickHandler={() => dispatch(toggleNotifications())} />
            <ul className={notificationsVisible ? "notifications__list show" : "notifications__list"}>
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
        </div>
    );
}

export default Notifications;
