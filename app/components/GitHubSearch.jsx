/* React component that allows searching of GitHub by user name */
import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class GitHubSearch extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const username = this.input.value
        this.input.value = '';
        this.props.router.push(`/profile/${username}`);
    }
    render() {
        return (
            <div className="col-sm-12">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group col-sm-7">
                        <input type="text"
                            className="form-control"
                            ref={(ref) => this.input = ref}/>
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="submit" className="btn btn-block btn-primary">
                            Search GitHub
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

GitHubSearch.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default withRouter(GitHubSearch);
