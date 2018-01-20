import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const SIGNUP_MUTATION = gql`
  mutation {
    signup(email: "demo3@demo.com", password: "abc", name: "demo3") {
      token
      user {
        id
        name
      }
    }
  }
`;
const LOGIN_MUTATION = gql`
  mutation {
    signup(email: "demo3@demo.com", password: "abc", name: "demo3") {
      token
      user {
        id
        name
      }
    }
  }
`;

export default compose(
  graphql(SIGNUP_MUTATION, { name: 'signupMutation' }),
  graphql(LOGIN_MUTATION, { name: 'loginMutation' }),
)(App);
