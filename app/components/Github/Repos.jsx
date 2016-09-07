/* React component that displays user repository information */
import React from 'react';

export default class Repos extends React.Component {
    render() {
        console.log(this.props.repos);
        return (
            <div>
                <p>Repos</p>
            </div>
        )
    }
}

Repos.propTypes = {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired,
}
