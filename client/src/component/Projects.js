import React from 'react';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router';
import { Grid, Button, Icon } from 'semantic-ui-react';

import media from '../styles/media';
import Project from './Project';
import Input from './Input';

const SidebarContainer = styled.section`
  padding: 1rem 0.25rem 0.75rem;
  ${media.m`
    padding: 1rem 0.75rem 0.75rem;
  `};
`;

const ProjectsContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ProjectLink = styled(Link)`
  color: ${props => props.theme.darkShades};
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
    if (e.target.name && e.target.name) {
      const newState = {};
      newState[e.target.name] = e.target.value;
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
      !projectId &&
      projects &&
      projects.length >= 0 &&
      projects[0] &&
      projects[0].id
    ) {
      // no project open, but we have projects: render project comp
      projectId = projects[0].id;
    }
    return (
      <Grid reverserd="mobile">
        <Grid.Column
          mobile={16}
          tablet={4}
          computer={4}
          largeScreen={4}
          widescreen={4}
        >
          <SidebarContainer key={`${projectId}ProjectList}`}>
            <h2>Projects</h2>
            <Input
              name="name"
              label="New project name"
              value={this.state.name}
              type="text"
              placeholder="awesome project"
              onChange={this.dispatch}
            />
            <Button color="teal" animated onClick={this.addProject}>
              <Button.Content visible>Add</Button.Content>
              <Button.Content hidden>
                <Icon name="right arrow" />
              </Button.Content>
            </Button>
            {projects && (
              <ProjectsContainer>
                {projects.map(project => (
                  <li key={project.id}>
                    <ProjectLink to={`/project/${project.id}`}>
                      {project.name}
                    </ProjectLink>
                  </li>
                ))}
              </ProjectsContainer>
            )}
          </SidebarContainer>
        </Grid.Column>
        <Grid.Column
          mobile={16}
          tablet={12}
          computer={12}
          largeScreen={12}
          widescreen={12}
        >
          {projectId && (
            <Project key={`${projectId}Project}`} projectId={projectId} />
          )}
        </Grid.Column>
      </Grid>
    );

    // return [
    //   projectId && (
    //     <Project key={`${projectId}Project}`} projectId={projectId} />
    //   ),
    //   <SidebarContainer key={`${projectId}ProjectList}`}>
    //     <h2>Projects</h2>
    //     <Input
    //       name="name"
    //       label="New project name"
    //       value={this.state.name}
    //       type="text"
    //       placeholder="awesome project"
    //       onChange={this.dispatch}
    //     />
    //     <Button color="teal" animated>
    //       <Button.Content visible>Add</Button.Content>
    //       <Button.Content hidden>
    //         <Icon name="right arrow" />
    //       </Button.Content>
    //     </Button>
    //     {projects && (
    //       <ProjectsContainer>
    //         {projects.map(project => (
    //           <li key={project.id}>
    //             <ProjectLink to={`/project/${project.id}`}>
    //               {project.name}
    //             </ProjectLink>
    //           </li>
    //         ))}
    //       </ProjectsContainer>
    //     )}
    //   </SidebarContainer>,
    // ];
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
