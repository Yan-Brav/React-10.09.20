import React from 'react';
import './App.css';

import {Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/common/Header';
import Users from './components/users';
import Albums from './components/albums';
import About from './components/about';

function App() {
  return (
    <Router>
      <div className="container">
        <Header></Header>
        <Switch>
          <Route path='/users' component={Users} />
          <Route path='/albums/:id?' component={Albums} />
          <Route path='/about' component={About} />
          <Route path='/' render={() => <Redirect to="/users" />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
