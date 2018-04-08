describe('SignUp', function() {
  it('opens SignUp page', function() {
    cy.visit('http://localhost:3030');

    cy.get('a[href="/profile"]').click();

    // Should be on a new URL which includes '/profile'
    cy.url().should('include', '/profile');

    // Should render authenticate
    cy.get('[data-test="authenticate"]');
  });

  it('SignUp with existing email', function() {
    // fill out form
    cy.get('input[name="email"]').type('Alice@example.com');
    cy.get('input[name="password"]').type('wrong');

    // submit SignUp action
    cy.contains('button', 'SignUp').click();

    // should show error message
    cy.get('[data-test="authenticate"]').contains('Error');
  });

  it('SignUp new user', function() {
    const email = `${new Date().getTime()}@example.com`;
    // fill out form
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type('weknow');

    // submit SignUp action
    cy.contains('button', 'SignUp').click();

    // should show profile
    cy.get('[data-test="profile"]').contains(email);

    // should logout
    cy.contains('button', 'LogOut').click();

    // Should show authenticate
    cy.get('[data-test="authenticate"]');
  });
});
