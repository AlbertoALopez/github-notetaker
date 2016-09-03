import React from 'react';
import NotesList from './NotesList.jsx';

export default class Notes extends React.Component {
    render() {
        return (
            <div>
                <h3>Notes</h3>
                <NotesList notes={this.props.notes} />
            </div>
        )
    }
}
