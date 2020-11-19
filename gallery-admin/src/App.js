import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/dark-theme.css';
import './styles/styles.css';
import Users from './components/users/Users';
import Albums from './components/albums/Albums';
import Header from './components/common/Header';

function App() {
    return (
        // <Router>
            <div className="container">
                <Header />
                {/* <Switch>
                    <Route path="/users" component={Users} />
                    <Route path="/albums" component={Albums} />
                </Switch> */}
            </div>
        // </Router>
  );
}

export default App;
