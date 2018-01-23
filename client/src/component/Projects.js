import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router';

import media from '../styles/media';
import Project from './Project';

const SidebarContainer = styled.section`
  grid-area: sidebar;
  padding: 0.25rem;
  ${media.m`
    padding 0.75rem;
  `};
`;

const initialState = {
  name: '',
};

const ProjectWrapper = props => {
  const projectId = props;
  return <Project {...props} />;
};

class Projects extends React.Component {
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
      .addProjectMutation({
        variables: {
          name: this.state.name,
        },
        refetchQueries: [
          {
            query: PROJECTS_QUERY,
          },
        ],
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
    const projects = this.props.projectsQuery.projects;

    let projectId = this.props.match.params.projectId;
    if (
      !this.props.match.params.projectId &&
      projects &&
      projects.length >= 0 &&
      projects[0].id
    ) {
      // no project open, but we have projects: render project comp
      projectId = projects[0].id;
    }
    return [
      projectId && <Project projectId={projectId} />,
      <SidebarContainer>
        <h2>Projects</h2>
        <input
          value={this.state.name}
          type="text"
          placeholder="new project name"
          data-state="name"
          onChange={this.dispatch}
        />
        <button onClick={this.addProject}>add</button>
        {projects && (
          <ul>
            {projects.map(project => (
              <li key={project.id}>
                <Link to={`/project/${project.id}`}>{project.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </SidebarContainer>,
    ];
  }
}

const PROJECTS_QUERY = gql`
  query projects {
    projects {
      id
      name
    }
  }
`;
const ADD_PROJECT_MUTATION = gql`
  mutation addProject($name: String!) {
    createProject(name: $name) {
      id
      name
    }
  }
`;

export default compose(
  graphql(PROJECTS_QUERY, { name: 'projectsQuery' }),
  graphql(ADD_PROJECT_MUTATION, { name: 'addProjectMutation' }),
)(Projects);
