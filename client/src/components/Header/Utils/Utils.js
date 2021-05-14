import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { hideUtils, toggleUtils } from '../../../redux/reducers/headerDropdownReducer';
import './utils.scss';
import useComponentVisible from '../../../hooks/useComponentVisible';
import UtilButton from '../../buttons/UtilButton/UtilButton';

const Utils = () => {
    const dispatch = useDispatch();
    const { utilsVisible } = useSelector(state => state.header);
    const { ref } = useComponentVisible(utilsVisible, hideUtils);

    return (
        <div className="utils" ref={ref}>
            <UtilButton clickHandler={() => dispatch(toggleUtils())} />
            <ul className={utilsVisible ? "utils__list show" : "utils__list"}>
                <li className="utils__item">
                    <Link className="utils__link" to="/weather">Weather</Link>
                </li>
                <li className="utils__item">
                    <Link className="utils__link" to="/todos">Todos</Link>
                </li>
                <li className="utils__item">
                    <Link className="utils__link" to="/quote">Quote</Link>
                </li>
            </ul>
        </div>
    );
}

export default Utils;
