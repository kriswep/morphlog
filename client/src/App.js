import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './component/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

// const SIGNUP_MUTATION = gql`
//   mutation {
//     signup(email: "demo3@demo.com", password: "abc", name: "demo3") {
//       token
//       user {
//         id
//         name
//       }
//     }
//   }
// `;
// const LOGIN_MUTATION = gql`
//   mutation {
//     signup(email: "demo3@demo.com", password: "abc", name: "demo3") {
//       token
//       user {
//         id
//         name
//       }
//     }
//   }
// `;

// export default compose(
//   graphql(SIGNUP_MUTATION, { name: 'signupMutation' }),
//   graphql(LOGIN_MUTATION, { name: 'loginMutation' }),
// )(App);
export default App;
