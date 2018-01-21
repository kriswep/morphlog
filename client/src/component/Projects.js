import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const initialState = {
  name: '',
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
    return (
      <div>
        <h2>Projects</h2>
        <input
          value={this.state.name}
          type="text"
          placeholder="new project name"
          data-state="name"
          onChange={this.dispatch}
        />
        <button onClick={this.addProject}>add</button>
        <ul>
          {projects && (
            <p>
              {projects.map(project => (
                <li key={project.id}>{project.name}</li>
              ))}
            </p>
          )}
        </ul>
      </div>
    );
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
