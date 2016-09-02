import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from '../config/routes.js';
import App from './App.jsx';

ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
);
