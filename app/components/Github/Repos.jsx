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
