Cypress.Commands.add('SignIn', () => {
    cy.visit('/login')
    cy.get('form').within(($form) => {
        cy.get('input[type="email"]').type('test@test.com')
        cy.get('input[type="password"]').type('123456') 
        cy.root().submit()
    })

    cy.url().should('include', 'products')
})
