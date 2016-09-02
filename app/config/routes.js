import React from 'react';
import App from '../components/App.jsx';
import Home from '../components/Home.jsx';
import { Router, IndexRoute, hashHistory, Route } from 'react-router';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
    </Route>
);

export default routes;
