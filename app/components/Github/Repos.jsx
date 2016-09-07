/* React component that displays user repository information */
import React from 'react';

export default class Repos extends React.Component {
    render() {
        return (
            <div>
                <p>Repos</p>
                Repos: {this.props.repos}
            </div>
        )
    }
}

Repos.propTypes = {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired,
}
