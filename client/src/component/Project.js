import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const Project = ({ projectQuery }) => {
  const project = projectQuery.project;
  return (
    <div>
      {project && (
        <div>
          <h2>{project.name}</h2>
          <ul>
            {project.change.map(change => (
              <li key={change.id}>
                {change.author.name}({new Date(
                  change.createdAt,
                ).toLocaleString()}): {change.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

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

export default compose(
  graphql(PROJECT_QUERY, {
    name: 'projectQuery',
    options: ({ match }) => ({ variables: { id: match.params.projectId } }),
  }),
)(Project);
