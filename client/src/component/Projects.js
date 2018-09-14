import React from 'react';
import { gql } from 'apollo-boost';
import { Query, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Button, Icon, Form } from 'semantic-ui-react';

import media from '../styles/media';
import Project from './Project';
// import Input from './Input';

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

export const PROJECTS_QUERY = gql`
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

const initialState = {
  name: '',
};

class Projects extends React.Component {
  state = initialState;

  dispatch = e => {
    if (e.target.name && e.target.name) {
      const newState = {};
      newState[e.target.name] = e.target.value;
      this.setState(newState);
    }
  };

  addProject = mutate => {
    mutate({
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
      <Query query={PROJECTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error!: ${error}`;

          const { projects } = data;

          let { projectId } = this.props.match.params;
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
                  <Mutation mutation={ADD_PROJECT_MUTATION}>
                    {(mutate, { mutationError }) => (
                      <Form data-test="newProject">
                        <Form.Input
                          name="name"
                          label="New project name"
                          value={this.state.name}
                          type="text"
                          placeholder="awesome project"
                          onChange={this.dispatch}
                        />
                        <Button
                          color="teal"
                          animated
                          onClick={e => {
                            e.preventDefault();
                            this.addProject(mutate);
                          }}
                        >
                          <Button.Content visible>Add</Button.Content>
                          <Button.Content hidden>
                            <Icon name="right arrow" />
                          </Button.Content>
                        </Button>
                        {mutationError && `Error!: ${mutationError}`}
                      </Form>
                    )}
                  </Mutation>
                  {projects && (
                    <ProjectsContainer data-test="projects">
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
        }}
      </Query>
    );
  }
}

export default Projects;
