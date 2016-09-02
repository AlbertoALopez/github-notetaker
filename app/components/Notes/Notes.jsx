import React from 'react';

export default class Notes extends React.Component {
    render() {
        return (
            <div><p>Notes: {this.props.notes}</p></div>
        )
    }
}
