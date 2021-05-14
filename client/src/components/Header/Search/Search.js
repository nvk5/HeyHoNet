import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Sprite from '../../../assets/images/sprite.svg';
import './search.scss';

const Search = ({ showMethod, hideMethod, searchVisibility, placeholder }) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const input = useRef(null);

    const hide = () => !search && dispatch(hideMethod());

    const show = () => {
        input.current.focus();
        dispatch(showMethod())
    }

    const onEnter = (event) => {
        if (event.key === 'Enter' && !search) {
            dispatch(showMethod())
        }
    }

    return (
        <div className="search">
            <label className="search__item" onClick={show} onBlur={hide} onKeyDown={onEnter}>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    value={search}
                    className={searchVisibility ? "search__text show" : "search__text hide"}
                    placeholder={placeholder}
                    ref={input}
                />
                <svg className="search__icon">
                    <use href={`${Sprite}#search`}></use>
                </svg>
            </label>
        </div>
    );
}

export default Search;
