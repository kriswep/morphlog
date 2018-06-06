import React from 'react';
import { gql } from 'apollo-boost';
import { Query, Mutation } from 'react-apollo';
import styled from 'styled-components';
import { Button, Comment } from 'semantic-ui-react';

import Input from './Input';

const Author = styled.div`
  display: inline-block;
`;

const CHANGES_QUERY = gql`
  query changes($projectId: ID!) {
    changes(projectId: $projectId) {
      id
      createdAt
      text
      author {
        id
        name
      }
    }
  }
`;

const ADD_CHANGE_MUTATION = gql`
  mutation addChange($projectId: ID!, $txt: String!) {
    addChange(projectId: $projectId, text: $txt) {
      id
      text
      createdAt
      author {
        id
        name
      }
      project {
        id
      }
    }
  }
`;

const initialState = {
  text: '',
};

class Project extends React.Component {
  state = initialState;

  dispatch = e => {
    if (e.target.name && e.target.name) {
      const newState = {};
      newState[e.target.name] = e.target.value;
      this.setState(newState);
    }
  };

  addChange = mutate => {
    mutate({
      variables: {
        projectId: this.props.projectId,
        txt: this.state.text,
      },
      update: (proxy, { data: { addChange } }) => {
        // Read the data from our cache for this query.
        const data = proxy.readQuery({
          query: CHANGES_QUERY,
          variables: {
            projectId: addChange.project.id,
          },
        });

        // Add our todo from the mutation to the end.
        const newChanges = [addChange, ...data.changes];

        // Write our data back to the cache.
        proxy.writeQuery({
          query: CHANGES_QUERY,
          variables: {
            projectId: addChange.project.id,
          },
          data: { changes: newChanges },
        });
      },
      refetchQueries: [
        {
          query: CHANGES_QUERY,
          variables: {
            projectId: this.props.projectId,
          },
        },
      ],
    })
      .then(({ data }) => {
        console.log('got data', data);
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
      <div>
        <Mutation mutation={ADD_CHANGE_MUTATION}>
          {(mutate, { error }) => (
            <div data-test="newChange">
              <Input
                textarea
                name="text"
                label="Change"
                value={this.state.text}
                type="text"
                placeholder="describe your change"
                onChange={this.dispatch}
              />
              <Button
                color="teal"
                onClick={e => {
                  e.preventDefault();
                  this.addChange(mutate);
                }}
              >
                Add
              </Button>
              {error && `Error!: ${error}`}
            </div>
          )}
        </Mutation>
        <Query
          query={CHANGES_QUERY}
          variables={{
            projectId:
              this.props.projectId || this.props.match.params.projectId,
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return `Error!: ${error}`;

            const { changes } = data;
            if (!changes) return null;
            return (
              <Comment.Group data-test="change">
                {changes.map(change => (
                  <Comment key={change.id}>
                    <Comment.Content>
                      <Comment.Author as={Author}>
                        {change.author.name}
                      </Comment.Author>
                      <Comment.Metadata>
                        <div>{new Date(change.createdAt).toLocaleString()}</div>
                      </Comment.Metadata>
                      <Comment.Text>{change.text}</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Maybe Change</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                ))}
              </Comment.Group>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Project;
