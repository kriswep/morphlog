import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import styled from 'styled-components';

import media from '../styles/media';

const ContentContainer = styled.section`
  grid-area: content;
  padding: 0.25rem;
  ${media.m`
    padding 0.75rem;
  `};
`;

const ChangeContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const initialState = {
  text: '',
};

class Project extends React.Component {
  state = initialState;

  dispatch = (e, v, x) => {
    if (e.target.dataset && e.target.dataset.state) {
      const newState = {};
      newState[e.target.dataset.state] = e.target.value;
      this.setState(newState);
    }
  };

  addProject = e => {
    this.props
      .addChangeMutation({
        variables: {
          projectId: this.props.projectQuery.project.id,
          txt: this.state.text,
        },
      })
      .then(({ data }) => {
        console.log('got data', data);
      })
      .catch(error => {
        console.log('there was an error sending the query', error);
      })
      .finally(() => {
        this.setState(initialState);
      });
  };

  render() {
    const project = this.props.projectQuery.project;
    return (
      <ContentContainer>
        {project && (
          <div>
            <h2>{project.name}</h2>
            <textarea
              value={this.state.text}
              type="text"
              placeholder="describe your change"
              data-state="text"
              onChange={this.dispatch}
            />
            <button onClick={this.addProject}>add</button>
            <ChangeContainer>
              {project.change.map(change => (
                <li key={change.id}>
                  {change.author.name}({new Date(
                    change.createdAt,
                  ).toLocaleString()}): {change.text}
                </li>
              ))}
            </ChangeContainer>
          </div>
        )}
      </ContentContainer>
    );
  }
}

const PROJECT_QUERY = gql`
  query project($id: ID!) {
    project(id: $id) {
      id
      name
      change {
        id
        createdAt
        text
        author {
          id
          name
        }
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
        name
        change {
          id
          createdAt
          text
          author {
            id
            name
          }
        }
      }
    }
  }
`;

export default compose(
  graphql(PROJECT_QUERY, {
    name: 'projectQuery',
    options: props => ({
      variables: { id: props.projectId || props.match.params.projectId },
    }),
  }),
  graphql(ADD_CHANGE_MUTATION, { name: 'addChangeMutation' }),
)(Project);
