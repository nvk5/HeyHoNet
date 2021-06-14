import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import SignUpPage from '../Auth/SignUpPage';
import LogInPage from '../Auth/LogInPage';
import Header from '../Header/Header.js';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../redux/actions/user';
import HomePage from '../pages/HomePage/HomePage';
import Navigation from '../Navigation/Navigation';
import Photos from '../pages/Photos/Photos';
import EditProfile from '../pages/EditProfile/edit-profile';
import Widgets from '../Widgets/Widgets';
import useLeaveConfirmation from '../../hooks/useLeaveConfirmation';
import AuthLoader from '../Auth/AuthLoader';

const App = () => {
    const dispatch = useDispatch();
    const { authLoading } = useSelector(state => state.auth);
    const { isAuth } = useSelector(state => state.login);

    useEffect(() => dispatch(auth()), [dispatch]);

    const { confirmComponent, promptAPIGetConfirmation } = useLeaveConfirmation();

    if (authLoading) {
        return <div className="auth-loading"><AuthLoader /></div>
    }

    return (
        <BrowserRouter getUserConfirmation={promptAPIGetConfirmation}>
            {confirmComponent}
            <Header />
            {!isAuth ?
                <Switch>
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/login" component={LogInPage} />
                    {/* <Route path="*" render={() => <Redirect to="/login"/>}/> */}
                </Switch>
                :
                <>
                    <Navigation />
                    <div className="page">
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/photo" component={Photos} />
                            <Route path="/edit" component={EditProfile} />
                            {/* <Route path="*" component={PageNotFound}/> */}
                        </Switch>
                        <Widgets />
                    </div>
                </>
            }
        </BrowserRouter>
    );
}

export default App;