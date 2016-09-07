/* App container */
import React from 'react';
import GitHubSearch from './GitHubSearch.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        <GitHubSearch />
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;
