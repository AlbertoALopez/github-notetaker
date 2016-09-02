import React from 'react';
import App from '../components/App.jsx';
import Home from '../components/Home.jsx';
import { Router, IndexRoute, hashHistory, Route } from 'react-router';

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
    </Route>
);
