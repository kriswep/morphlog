import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './component/Header';
import Home from './component/Home';
import Profile from './component/Profile';
import Projects from './component/Projects';
import Project from './component/Project';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route path="/project/:projectId?" component={Projects} />
        <Route exact path="/profile" component={Profile} />
      </div>
    );
  }
}

export default App;
