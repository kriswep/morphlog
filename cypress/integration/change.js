/// <reference types="cypress" />

describe('Change', function() {
  beforeEach(function() {
    cy.login();
  });

  it('project details contains expected elements', function() {
    cy.visit('http://localhost:3030/project');
    cy
      .get('[data-test="projects"]')
      .contains('first project')
      .click();

    // Should render newChange
    cy.get('[data-test="newChange"]');
    cy.get('textarea[name="text"]');

    // Should render Changes
    cy.get('[data-test="change"]');
    // first change
    cy
      .get('[data-test="change"]')
      .find('.comment')
      .contains('Alice');
    cy
      .get('[data-test="change"]')
      .find('.comment')
      .contains('First change');
    //second change
    cy.get('[data-test="change"]');
    cy
      .get('[data-test="change"]')
      .find('.comment')
      .contains('Bob');
    cy
      .get('[data-test="change"]')
      .find('.comment')
      .contains('Second change');
  });

  it('adds a new project', function() {
    const changeText = `${new Date().getTime()}Change`;

    // Fill out form
    cy
      .get('[data-test="newChange"]')
      .get('textarea[name="text"]')
      .type(changeText);

    // Submit add action
    cy
      .get('[data-test="newChange"]')
      .contains('button', 'Add')
      .click();

    // Should render new project
    cy.get('[data-test="change"]').contains(changeText);
  });

  it('should show projects to members', function() {
    cy.login('member');
    cy.visit('http://localhost:3030/project');
    cy
      .get('[data-test="projects"]')
      .contains('first project')
      .click();

    // Should render member users projects
    // first change
    cy
      .get('[data-test="change"]')
      .find('.comment')
      .contains('Alice');
    cy
      .get('[data-test="change"]')
      .find('.comment')
      .contains('First change');
    //second change
    cy.get('[data-test="change"]');
    cy
      .get('[data-test="change"]')
      .find('.comment')
      .contains('Bob');
    cy
      .get('[data-test="change"]')
      .find('.comment')
      .contains('Second change');

    // Open own project detail
    cy
      .get('[data-test="projects"]')
      .contains("Bob's own project")
      .click();
    // own project detail
    cy.get('[data-test="project"]').contains("Bob's own project");
  });

  it('does not show project detail to externals', function() {
    cy.login('external');
    cy.visit('http://localhost:3030/project/wrongid');

    // Should not render project detail
    cy.contains('No Access');
  });
});
