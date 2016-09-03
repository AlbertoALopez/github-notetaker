import React from 'react';
import NotesList from './NotesList.jsx';
import AddNote from './AddNote.jsx';

export default class Notes extends React.Component {
    render() {
        return (
            <div>
                <h3>Notes</h3>
                <AddNote username={this.props.username} addNote={this.props.addNote} />
                <NotesList notes={this.props.notes} />
            </div>
        )
    }
}

Notes.propTypes = {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired,
}
