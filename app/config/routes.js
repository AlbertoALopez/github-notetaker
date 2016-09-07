import React from 'react';
import App from '../components/App.jsx';
import Home from '../components/Home.jsx';
import Profile from '../components/Profile.jsx';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="profile/:username" component={Profile} />
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

export default routes;
