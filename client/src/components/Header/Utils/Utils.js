import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './utils.scss';
import useComponentVisible from '../../../hooks/useComponentVisible';
import UtilButton from '../../buttons/UtilButton/UtilButton';
import Dropdown from '../../../utils/Dropdown/Dropdown';

const Utils = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref } = useComponentVisible(isVisible, () => setIsVisible(false));

    return (
        <div className="utils" ref={ref}>
            <UtilButton clickHandler={() => setIsVisible(prev => !prev) } />
            <Dropdown visible={isVisible}>
                <ul className="utils__list">
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
            </Dropdown>
        </div>
    );
}

export default Utils;
