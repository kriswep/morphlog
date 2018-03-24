import React from 'react';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';
import styled from 'styled-components';

import media from '../styles/media';
import Changes from './Changes';

const ContentContainer = styled.section`
  padding: 1rem 0.25rem 0.75rem;
  ${media.m`
    padding: 1rem 0.75rem 0.75rem;
  `};
`;

const initialState = {};

export class Project extends React.Component {
  state = initialState;

  // dispatch = (e, v, x) => {
  //   if (e.target.name && e.target.name) {
  //     const newState = {};
  //     newState[e.target.name] = e.target.value;
  //     this.setState(newState);
  //   }
  // };

  render() {
    const project = this.props.projectQuery.project;
    return (
      <ContentContainer>
        {project && (
          <div>
            <h2>{project.name}</h2>
            <Changes projectId={this.props.projectQuery.project.id} />
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
)(Project);
