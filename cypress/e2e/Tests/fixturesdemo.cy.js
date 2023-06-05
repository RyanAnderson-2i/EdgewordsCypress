describe('Login Using Fixtures', function () {

    beforeEach(function(){
        //cy.fixture("loginData").as('data')
        cy.fixture("loginData").then(function(data){
            this.username = data.username
            this.password = data.password
        })
    });

    it('Login to webdriver', {tag:'@Run'},function () {
        cy.visit("https://www.edgewordstraining.co.uk/webdriver2/")
        cy.contains('Login To Restricted Area').click()
        //cy.get('#username').type(this.username)
        cy.get('#username').type(Cypress.env('username'))
        //cy.get('#password').type(this.password)
        cy.get('#password').type(Cypress.env('password'))
        cy.contains('Submit').click()
        
        cy.contains('Log Out').click();
        cy.on('window:confirm', str => {
            console.log('The message was' + str)
            return false
        })
        
        })
    });