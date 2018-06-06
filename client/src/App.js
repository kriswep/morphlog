import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './component/Header';
import Home from './component/Home';
import Profile from './component/Profile';
import Projects from './component/Projects';

import theme from './styles/theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Route path="/" component={Header} />
          <Route exact path="/" component={Home} />
          <Route path="/project/:projectId?" component={Projects} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
