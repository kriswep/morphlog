import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const Projects = ({ projectsQuery }) => {
  const projects = projectsQuery.projects;
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects && <p>{projects.map(project => <li>{project.name}</li>)}</p>}
      </ul>
    </div>
  );
};

const PROJECTS_QUERY = gql`
  query projects {
    projects {
      id
      name
    }
  }
`;

// export default Projects;
export default compose(graphql(PROJECTS_QUERY, { name: 'projectsQuery' }))(
  Projects,
);
