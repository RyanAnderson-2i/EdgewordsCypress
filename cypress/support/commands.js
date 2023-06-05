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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addToCart', function(product){

    cy.visit('https://edgewordstraining.co.uk/demo-site')
    cy.get('#woocommerce-product-search-field-0').type(product+'{enter}')
    //cy.wait(3000)
    //cy.get('.single_add_to_cart_button').click()
    //cy.contains('Add to cart').click()
    cy.contains("Add to cart",{matchCase: false}).click()
    cy.get('#content > div > div.woocommerce > div > a').click();
  })