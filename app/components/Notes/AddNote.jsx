/* React component that controls forms for adding notes */
import React from 'react';
import ReactDOM from 'react-dom';

export default class AddNote extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const newNote = this.newNote.value;
        this.newNote.value = '';
        this.props.addNote(newNote, this.props.username);
    }
    render() {
        return (
            <form className="input-group" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text"
                    className="form-control"
                    placeholder="Add new note"
                    ref={(ref) => this.newNote = ref}/>
                <span className="input-group-btn">
                    <button className="btn btn-default"
                        type="button"
                        onClick={this.handleSubmit.bind(this)}>
                        Submit</button>
                </span>
            </form>
        )
    }
}

AddNote.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired,
}
