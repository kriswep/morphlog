describe('SignIn', function() {
  // beforeEach(function() {
  //   // slower!
  //   cy.visit('http://localhost:3030/profile');
  // });

  it('opens signIn page', function() {
    cy.visit('http://localhost:3030');

    cy.get('a[href="/profile"]').click();

    // Should be on a new URL which includes '/profile'
    cy.url().should('include', '/profile');

    // Should render authenticate
    cy.get('[data-test="authenticate"]');
  });

  it('dont signIn with wrong email', function() {
    // fill out form
    cy.get('input[name="email"]').type('wrong@example.com');
    cy.get('input[name="password"]').type('nooneknows');

    // submit signIn action
    cy.contains('button', 'SignIn').click();

    // should show error message
    cy
      .get('[data-test="authenticate"]')
      .contains('No such user found for email: wrong@example.com');
  });

  it('dont signIn with wrong password', function() {
    // fill out form
    cy.get('input[name="email"]').type('developer@example.com');
    cy.get('input[name="password"]').type('wrong');

    // submit signIn action
    cy.contains('button', 'SignIn').click();

    // should show error message
    cy.get('[data-test="authenticate"]').contains('Invalid password');
  });

  it('signIn with right credentials', function() {
    // fill out form
    cy.get('input[name="email"]').type('developer@example.com');
    cy.get('input[name="password"]').type('nooneknows');

    // submit signIn action
    cy.contains('button', 'SignIn').click();

    // should show profile
    cy.get('[data-test="profile"]').contains('developer@example.com');

    // should logout
    cy.contains('button', 'LogOut').click();

    // Should show authenticate
    cy.get('[data-test="authenticate"]');
  });
});
