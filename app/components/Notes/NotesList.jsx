/* React component that displays a list of notes associated with the current user */
import React from 'react';

export default class NotesList extends React.Component {
    render() {
        const notesArray = this.props.notes.map((note, index) => {
            return (
                <li className="list-group-item" key={index}>
                    {note}
                </li>
            )
        }, this);
        return (
            <ul className="list-group">{notesArray}</ul>
        )
    }
}
