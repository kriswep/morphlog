import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

class Profile extends React.Component {
  state = {
    email: '',
    password: '',
  };

  dispatch = (e, v, x) => {
    if (e.target.dataset && e.target.dataset.state) {
      const newState = {};
      newState[e.target.dataset.state] = e.target.value;
      this.setState(newState);
    }
  };

  signup = e => {
    this.props
      .signupMutation({
        variables: {
          email: this.state.email,
          password: this.state.password,
        },
      })
      .then(({ data }) => {
        console.log('got data', data);
      })
      .catch(error => {
        console.log('there was an error sending the query', error);
      });
  };

  signin = e => {
    this.props
      .signinMutation({
        variables: {
          email: this.state.email,
          password: this.state.password,
        },
      })
      .then(({ data }) => {
        console.log('got data', data);
      })
      .catch(error => {
        console.log('there was an error sending the query', error);
      });
  };

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <input
          type="text"
          placeholder="email"
          data-state="email"
          onChange={this.dispatch}
        />
        <input
          type="password"
          placeholder="password"
          data-state="password"
          onChange={this.dispatch}
        />
        <button onClick={this.signup}>SignUp</button>
        <button onClick={this.signin}>SignIn</button>
      </div>
    );
  }
}

const SIGNUP_MUTATION = gql`
  mutation s($email: String!, $password: String!) {
    signup(email: $email, password: $password, name: "demo3") {
      token
      user {
        id
        name
      }
    }
  }
`;
const SIGNIN_MUTATION = gql`
  mutation signin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
  graphql(SIGNIN_MUTATION, { name: 'signinMutation' }),
)(Profile);
// export default Profile;
