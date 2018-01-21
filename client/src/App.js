import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './component/Home';
import Profile from './component/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
