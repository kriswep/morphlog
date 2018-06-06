// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', type => {
  let email, password;
  switch (type) {
    case 'member':
      email = 'Bob@example.com';
      password = 'idoknow';
      break;
    case 'external':
      email = 'Eve@example.com';
      password = 'kindasecret';
      break;
    default:
      email = 'Alice@example.com';
      password = 'nooneknows';
      break;
  }
  const body = {
    operationName: 'signin',
    variables: { email, password },
    query:
      'mutation signin($email: String!, $password: String!) { login(email: $email, password: $password) { token }}',
  };

  return cy
    .request({
      method: 'POST',
      url: 'http://localhost:4000/',
      body,
    })
    .then(res => {
      window.localStorage.setItem('auth', res.body.data.login.token);
    });
});

Cypress.Commands.add('logout', (email, password) => {
  window.localStorage.removeItem('auth');
});
