describe('Header UI', () => {
    describe('Header UI for no-login user', () => {
        it('has three navbar menus for non-login user', () => {
            cy.visit('/')
            cy.get('ul').children().as('navbar-menus').should('have.length', 2)
            cy.get('@navbar-menus').eq(0).contains('Register').click()
            cy.url().should('include', 'registration')
            cy.go('back')
            cy.get('@navbar-menus').eq(1).contains('Login').click()
            cy.url().should('include', 'login')
            cy.go('back')
        })
    })
    
    describe('Header UI for loggedIn user', () => {
        before(function () {
            cy.SignIn()
        })
        it('has four Header menus for loggedIn user', () => {
            cy.get('[data-test=navMenus]').children().as('navbar-menus').should('have.length', 3)
            cy.get('@navbar-menus').eq(0).contains('PRODUCTS').click()
            cy.url().should('include', 'products')
            cy.go('back')
            cy.get('@navbar-menus').eq(2).contains('my cart').click()
            cy.url().should('include', 'cart')
            cy.go('back')
            cy.get('@navbar-menus').eq(1).contains('LOGOUT').click()
            cy.url().should('include', '/')
            cy.go('back')
        })
    });

    describe('Header responsive UI', () => {
        before(function () {
            cy.SignIn()
        })
        context('720p resolution', () => {
            beforeEach(() => {
              cy.viewport(1280, 720)
            })
        
            it('displays full header', () => {
                cy.get('li').contains('PRODUCTS').should('be.visible')
                cy.get('li').contains('LOGOUT').should('be.visible')
                cy.get('.fa-shopping-bag').should('be.visible')
                cy.get('.fa-sign-out-alt').should('be.visible')
                cy.get('[data-test=myCart]').should('be.visible')
            })
        })
        
        context('iphone-5 resolution', () => {
            beforeEach(() => {
              cy.viewport('iphone-5')
            })
        
            it('displays mobile menu on click', () => {
                cy.get('.fa-shopping-bag').should('be.visible')
                cy.get('.hide-sm').first().should('not.be.visible')
                cy.get('.fa-sign-out-alt').should('be.visible')
                cy.get('.hide-sm').eq(1).should('not.be.visible')
            })
        })
    })

})
