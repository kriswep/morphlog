import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import styled from 'styled-components';
import {
  Container,
  Form,
  Grid,
  Button,
  Header,
  Segment,
  Message,
} from 'semantic-ui-react';

import media from '../styles/media';

const ContentContainer = styled.section`
  padding: 1rem 0.25rem 0.75rem;
  ${media.m`
    padding: 1rem 0.75rem 0.75rem;
  `};
`;

const initialState = {
  email: '',
  password: '',
};

class Profile extends React.Component {
  state = initialState;

  dispatch = (e, v, x) => {
    if (e.target.name && e.target.name) {
      const newState = {};
      newState[e.target.name] = e.target.value;
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
        localStorage.setItem('auth', data.signup.token);
      })
      .catch(error => {
        console.log('there was an error sending the query', error);
      })
      .finally(() => {
        this.setState(initialState);
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
        localStorage.setItem('auth', data.login.token);
      })
      .catch(error => {
        console.log('there was an error sending the query', error);
      })
      .finally(() => {
        this.setState(initialState);
      });
  };

  render() {
    return (
      <ContentContainer>
        <Container>
          <Form size="large">
            <Header as="h2" color="teal" textAlign="center">
              Profile
            </Header>
            <Segment raised>
              <Form.Input
                value={this.state.email}
                onChange={this.dispatch}
                name="email"
                label="E-Mail Address"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-Mail Address"
              />
              <Form.Input
                value={this.state.password}
                onChange={this.dispatch}
                name="password"
                label="Password"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Grid columns={2}>
                <Grid.Column>
                  <Button color="teal" fluid size="large" onClick={this.signin}>
                    SignIn
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button fluid size="large" onClick={this.signup}>
                    SignUp
                  </Button>
                </Grid.Column>
              </Grid>
            </Segment>
          </Form>
          {!this.props.profileQuery.loading && (
            <Message>
              <p>Name: {this.props.profileQuery.me.name}</p>
              <p>E-Mail: {this.props.profileQuery.me.email}</p>
            </Message>
          )}
        </Container>
      </ContentContainer>
    );
  }
}

const SIGNUP_MUTATION = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password, name: "demo3") {
      token
      user {
        id
        name
        email
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
        email
      }
    }
  }
`;
const PROFILE_QUERY = gql`
  query profile {
    me {
      id
      name
      email
    }
  }
`;

export default compose(
  graphql(PROFILE_QUERY, { name: 'profileQuery' }),
  graphql(SIGNUP_MUTATION, { name: 'signupMutation' }),
  graphql(SIGNIN_MUTATION, { name: 'signinMutation' }),
)(Profile);
