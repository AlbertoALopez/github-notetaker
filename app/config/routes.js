import React from 'react';
import App from '../components/App.jsx';
import Home from '../components/Home.jsx';
import Profile from '../components/Profile.jsx';
import { IndexRoute, Route } from 'react-router';

const routes = (
    <Route path="/" component={App}>
        <Route path="profile/:username" component={Profile} />
        <IndexRoute component={Home} />
    </Route>
);

export default routes;
