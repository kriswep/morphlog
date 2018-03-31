import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './component/Header';
import Home from './component/Home';
import Profile from './component/Profile';
import Projects from './component/Projects';
// import Project from './component/Project';

import theme from './styles/theme';
// import media from './styles/media';

// const Main = styled.section`
//   min-height: 100vh;
//   color: ${props => props.theme.darkShades};
//   background: ${props => props.theme.lightShades};
//   line-height: 1.625rem;
//   display: grid;
//   grid-gap: 3px;
//   grid-template-columns: 17.5rem 1fr;
//   grid-template-rows: auto 1fr auto auto;
//   grid-template-areas:
//     'header header' 'content content' 'sidebar sidebar' 'footer footer';
//   ${media.m`
//   grid-gap: 10px;
//   grid-template-rows: auto 1fr auto;
//   grid-template-areas: 'header header header' 'sidebar content content' 'footer footer footer';
//   `} ${media.l`
//     grid-template-columns: 20rem 1fr;
//   `} ${media.xl`
//     grid-template-columns: 35rem 1fr;
//   `} ${media.xxl`
//     grid-template-columns: 50rem 1fr;
//   `} ${media.xxxl`
//     grid-template-columns: 70rem 1fr;
//   `} ${media.uxxxl`
//     grid-template-columns: 100rem 1fr;
//   `};
// `;

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
