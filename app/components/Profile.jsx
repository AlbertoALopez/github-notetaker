import React from 'react';
import Repos from './Github/Repos.jsx';
import UserProfile from './Github/UserProfile.jsx';
import Notes from './Notes/Notes.jsx';
import Rebase from 're-base';
import apiKey from '../config/apiKey.js'

const base = Rebase.createClass(apiKey);

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            bio: {},
            repos: [],
        };
    }
    init() {
        this.ref = base.bindToState(this.props.routeParams.username, {
            context: this,
            asArray: true,
            state: 'notes'
        });
    }
    componentDidMount() {
        this.init();
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    componentWillReceiveProps() {
        base.removeBinding(this.ref);
        this.init();
    }
    render() {
        const username = this.props.routeParams.username;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio}/>
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos}/>
                </div>
                <div className="col-md-4">
                    <Notes username={username} notes={this.state.notes}/>
                </div>
            </div>
        )
    }
}
