// React component that controls forms for adding notes
import React from 'react';
import ReactDOM from 'react-dom';

export default class AddNotes extends React.Component {
    handleSubmit() {
        const newNote = ReactDOM.findDOMNode(this.refs.note).value;
        ReactDOM.findDOMNode(this.refs.note).value = '';
        this.props.addNote(newNote);
    }
    render() {
        return (
            <div className="input-group">
                <input type="text"
                    className="form-control"
                    placeholder="Add new note"
                    ref={(ref) => this.note = ref}/>
                <span className="input-group-btn">
                    <button className="btn btn-default"
                        type="button"
                        onClick={() => this.handleSubmit()}>
                        Submit</button>
                </span>
            </div>
        )
    }
}

AddNotes.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired,
}
