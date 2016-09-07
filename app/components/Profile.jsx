/* React component container for user profile information, repos and notes */
import React from 'react';
import Repos from './Github/Repos.jsx';
import UserProfile from './Github/UserProfile.jsx';
import Notes from './Notes/Notes.jsx';
import Rebase from 're-base';
import apiKey from '../config/apiKey.js'
import helpers from '../utils/helpers.js';

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
    init(username) {
        // Update list of notes
        base.fetch(username, {
            context: this,
            state: 'notes',
            asArray: true,
            then(data) {
                this.setState({
                    notes: data,
                });
                console.log(this.state.notes);
            }
        });
    }
    componentDidMount() {
        this.init(this.props.params.username);

        helpers.getGithubInfo(this.props.params.username)
        .then((data) => {
            this.setState({
                bio: data.bio,
                repos: data.repos
            });
        });
    }
    componentWillReceiveProps(nextProps) {
        this.init(nextProps.params.username);
    }
    componentWillUnmount() {

    }
    addNoteHandler(newNote, username) {
        const self = this;
        base.push(username, {
            data: newNote,
            then() {
                base.fetch(username, {
                    context: self,
                    state: 'notes',
                    asArray: true,
                    then(data) {
                        this.setState({
                            notes: data,
                        });
                        console.log(this.state.notes);
                    }
                });
            }
        })
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
                    <Notes username={username}
                        notes={this.state.notes}
                        addNote={this.addNoteHandler.bind(this)}/>
                </div>
            </div>
        )
    }
}

Profile.contextTypes = {
    router: React.PropTypes.object.isRequired,
};
