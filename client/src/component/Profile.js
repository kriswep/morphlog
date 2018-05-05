import React from 'react';
import { gql } from 'apollo-boost';
import { withApollo, Query, Mutation } from 'react-apollo';
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

  logOut = async () => {
    localStorage.removeItem('auth');
    await this.props.client.resetStore();
  };

  signup = mutate => {
    mutate({
      variables: {
        email: this.state.email,
        password: this.state.password,
      },
    })
      .then(async ({ data }) => {
        console.log('got data', data);
        localStorage.setItem('auth', data.signup.token);
        return await this.props.client.resetStore();
      })
      .then(() => {
        this.setState(initialState);
      })
      .catch(error => {
        console.log('there was an error sending the query', error);
        this.setState(initialState);
      });
  };

  signin = mutate => {
    mutate({
      variables: {
        email: this.state.email,
        password: this.state.password,
      },
    })
      .then(async ({ data }) => {
        console.log('got data', data);
        localStorage.setItem('auth', data.login.token);
        return await this.props.client.resetStore();
      })
      .then(() => {
        this.setState(initialState);
      })
      .catch(error => {
        console.log('there was an error sending the query', error);
        this.setState(initialState);
      });
  };

  render() {
    return (
      <Query query={PROFILE_QUERY} fetchPolicy="network-only">
        {({ loading, error, data }) => {
          if (loading) return null;

          const me = data && data.me;
          const authenticated = me ? true : false;

          return (
            <ContentContainer>
              <Container>
                {!authenticated && (
                  <Form size="large" data-test="authenticate">
                    <Header as="h2" color="teal" textAlign="center">
                      Authenticate
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
                        <Mutation mutation={SIGNIN_MUTATION}>
                          {(
                            mutateSignIn,
                            {
                              loading: loadingSignInMutation,
                              error,
                              data: dataSignInMutation,
                            },
                          ) => (
                            <Grid.Column>
                              <Button
                                color="teal"
                                fluid
                                size="large"
                                onClick={e => {
                                  e.preventDefault();
                                  this.signin(mutateSignIn);
                                }}
                              >
                                SignIn
                              </Button>
                              {error && `Error!: ${error}`}
                            </Grid.Column>
                          )}
                        </Mutation>
                        <Mutation mutation={SIGNUP_MUTATION}>
                          {(mutateSignUp, { error }) => (
                            <Grid.Column>
                              <Button
                                fluid
                                size="large"
                                onClick={e => {
                                  e.preventDefault();
                                  this.signup(mutateSignUp);
                                }}
                              >
                                SignUp
                              </Button>
                              {error && `Error!: ${error}`}
                            </Grid.Column>
                          )}
                        </Mutation>
                      </Grid>
                    </Segment>
                  </Form>
                )}
                {authenticated && (
                  <Message data-test="profile">
                    <Header as="h2" color="teal" textAlign="center">
                      Profile
                    </Header>
                    <p>Name: {me.name}</p>
                    <p>E-Mail: {me.email}</p>

                    <Button
                      color="teal"
                      fluid
                      size="large"
                      onClick={this.logOut}
                    >
                      LogOut
                    </Button>
                  </Message>
                )}
              </Container>
            </ContentContainer>
          );
        }}
      </Query>
    );
  }
}

export default withApollo(Profile);
