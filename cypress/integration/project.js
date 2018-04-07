describe('Project', function() {
  beforeEach(function() {
    cy.login();
  });

  it('no projects when logged out', function() {
    cy.logout();
    cy.visit('http://localhost:3030/project');

    // Should not render projects
    cy.contains('Not Authenticated');
  });

  it('project page contains expected elements', function() {
    cy.visit('http://localhost:3030/project');

    // Should render newProject
    cy.get('[data-test="newProject"]');
    cy.get('input[name="name"]');

    // Should render projects
    cy.get('[data-test="projects"]');
    cy.get('[data-test="projects"]').contains('first project');
    cy.get('[data-test="projects"]').contains('second project');
    cy.get('[data-test="projects"]').contains('third project');
  });

  it('adds a new project', function() {
    const projectName = `${new Date().getTime()}Project`;

    // Fill out form
    cy
      .get('[data-test="newProject"]')
      .get('input[name="name"]')
      .type(projectName);

    // Submit add action
    cy
      .get('[data-test="newProject"]')
      .contains('button', 'Add')
      .click();

    // Should render new project
    cy.contains(projectName);
  });
});
