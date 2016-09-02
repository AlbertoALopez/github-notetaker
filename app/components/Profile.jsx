import React from 'react';
import {Router} from 'react-router';

export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            bio: {},
            repos: [],
        };
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    User profile component
                </div>
                <div className="col-md-4">
                    Repos component
                </div>
                <div className="col-md-4">
                    Notes component
                </div>
            </div>
        )
    }
}
