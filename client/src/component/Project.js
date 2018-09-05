import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import media from '../styles/media';
import Changes from './Changes';

const ContentContainer = styled.section`
  padding: 1rem 0.25rem 0.75rem;
  ${media.m`
    padding: 1rem 0.75rem 0.75rem;
  `};
`;

export const PROJECT_QUERY = gql`
  query project($id: ID!) {
    project(id: $id) {
      id
      name
    }
  }
`;

const Project = ({ projectId, match }) => (
  <Query
    query={PROJECT_QUERY}
    variables={{ id: projectId || match.params.projectId }}
  >
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      const { project } = data;
      return (
        <ContentContainer data-test="project">
          {project && (
            <div>
              <h2>{project.name}</h2>
              <Changes projectId={project.id} />
            </div>
          )}
        </ContentContainer>
      );
    }}
  </Query>
);

export default Project;
