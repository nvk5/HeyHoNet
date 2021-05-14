import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import SignUpPage from '../Auth/SignUpPage';
import LogInPage from '../Auth/LogInPage';
import Header from '../Header/Header.js';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../redux/actions/user';
import HomePage from '../pages/HomePage/HomePage';
import Spinner from '../Spinner/Spinner';
import Navigation from '../Navigation/Navigation';
import Albums from '../pages/Albums/Albums';
import EditProfile from '../pages/EditProfile/EditProfile';
import Widgets from '../Widgets/Widgets';

const App = () => {
    const dispatch = useDispatch();
    const { isAuth, loading } = useSelector(state => state.user);

    useEffect(() => dispatch(auth()), [dispatch]);

    if (loading) {
        return <div className="auth-loading"><Spinner /></div>
    }

    return (
        <BrowserRouter>
            <Header />
            {!isAuth ?
                <Switch>
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/login" component={LogInPage} />
                    {/* <Redirect to="/login" exact/> */}
                </Switch>
                :
                <>
                    <Navigation />
                    <div className="page">
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/albums" component={Albums} />
                            <Route path="/edit" component={EditProfile} />
                            {/* <Redirect to="/" exact /> */}
                        </Switch>
                        <Widgets />
                    </div>
                </>
            }
        </BrowserRouter>
    );
}

export default App;