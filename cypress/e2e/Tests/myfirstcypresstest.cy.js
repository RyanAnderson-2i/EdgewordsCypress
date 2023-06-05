describe('empty spec', function(){

before(function () {
  cy.log('Runs before any tests get to execute')
});
beforeEach(function () {
  cy.log('Runs before each test')
});
afterEach(function () {
  cy.log('Runs after each and every test execute')
});
after(function () {
  cy.log('Runs once at the end of this suite')
});

it('Order Something', function (){
  cy.addToCart('Cap')
})

  it('passes', function(){
    //cy.pause()
    cy.visit('https://edgewordstraining.co.uk/demo-site')
    cy.get('#woocommerce-product-search-field-0').type('cap{enter}')
    //cy.get('.single_add_to_cart_button').click()
    //cy.contains('Add to cart').click()
    //cy.get('div#product-29 div.summary').contains('Add to cart').click()
    //cy.get('div#product-29 div.summary').find('button[name=add-to-cart]').click()
    cy.get('div#product-29 div.summary').within(function(){
        //cy.get('button[name=add-to-cart]').click()
        cy.contains("add to cart",{matchCase: false}).click()
    })
    cy.get('.woocommerce-message > .button').click()
  })

  
  it('is another test',{tags: '@Run'}, function () {
    cy.visit('https://edgewordstraining.co.uk/webdriver/docs/forms.html')
    cy.get('#right-column > h1').invoke('text').should('match',/FORMS/i)

    cy.get('input[type=radio]').click({multiple:true}).should('have.lengthOf',3)
    cy.get('#checkbox').check()
    cy.get('#checkbox').uncheck()

    cy.get('#textInput',{timeout: 10000}).type('Ryan Anderson', {delay: 100}).invoke('val').then(captureval => {
        expect(captureval).to.match(/Anderson$/)
    })
    //.should('match',/Anderson$/)
    //.should('have.value', 'Ryan Anderson')

    cy.get('#textInput').invoke('val').then(thetext => {
  
      console.log(thetext)
    })

    cy.get('input[type=radio]').check('Two','Three')
    cy.get('#select').select(1)
    cy.get('select').select('Selection Three')

    cy.log('Login Successful')
    cy.log('normal')
    cy.log('**bold**')
    cy.log('_italic_')
    cy.log('[blue](http://example.com)')
    cy.log('![Logo](http://edgewordstraining.co.uk/training-site/images/site_logo.gif)')
    
    cy.get('#textInput').screenshot()
  });

})