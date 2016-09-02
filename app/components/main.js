import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from '../config/routes.js';
import App from './App.jsx';

ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('app')
);
