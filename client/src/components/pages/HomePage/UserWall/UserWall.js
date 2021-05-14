import React from 'react';
import Search from '../../../Header/Search/Search';
import User from '../../../../assets/images/user.svg';
import { hideSearchPosts, showSearchPosts } from '../../../../redux/reducers/searchReducer';
import { useSelector } from 'react-redux';
import Post from '../../../Post/Post';
import './user-wall.scss';
import PageBar from '../../../../utils/PageBar/PageBar';

const UserWall = () => {
    const { searchPostVisible } = useSelector(state => state.search);

    return (
        <section className="user-wall">
            <PageBar>
                <div className="user-wall__header">
                    <img alt="" src={User} className="user-wall__avatar" />
                    <form className="user-wall__form">
                        <input className="user-wall__form-input" type="text" placeholder="Whats new ? " />
                        <button className="user-wall__form-submit" type="submit">Send</button>
                    </form>
                </div>
            </PageBar>
            <div className="user-wall__news-content">
                <PageBar>
                    <div className="user-wall__filters">
                        <Search showMethod={showSearchPosts} hideMethod={hideSearchPosts} searchVisibility={searchPostVisible} placeholder="Search posts" />
                        <button className="user-wall__filter user-wall__filter--all">All</button>
                        <button className="user-wall__filter user-wall__filter--my">My notes</button>
                        <button className="user-wall__filter user-wall__filter--archieve">Archieve</button>
                    </div>
                </PageBar>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </section>
    );
}

export default UserWall;
