/* React component that displays user profile information */
import React from 'react';

export default class UserProfile extends React.Component {
    render() {
        console.log(this.props.bio);
        return (
            <div>
                <p>User profile</p>
                <p>{this.props.username}</p>
                <p>Bio: </p>
            </div>
        )
    }
}

UserProfile.propTypes = {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired,
}
