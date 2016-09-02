import React from 'react';
import {Router} from 'react-router';
import Repos from './Github/Repos.jsx';
import UserProfile from './Github/UserProfile.jsx';
import Notes from './Notes/Notes.jsx';

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
                    <UserProfile username={this.props.params.username} bio={this.state.bio}/>
                </div>
                <div className="col-md-4">
                    <Repos repose={this.state.repos}/>
                </div>
                <div className="col-md-4">
                    <Notes notes={this.state.notes}/>
                </div>
            </div>
        )
    }
}
