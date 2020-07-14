describe('homepage UI', () => {
    before(function () {
        cy.visit('/')
    })
    it('has title', () => {
        cy.get('[data-test=title]')
            .should('have.text','GUILT FREE')
    })
    it('has a Shop Now button', () => {
        cy.get('[data-test=ctaBtn]')
            .should('have.text', 'Shop now').click()
            cy.url().should('include', 'products')
    })

    // it('goes to login page with clicking Shop Now button', () =>{
    //     cy.get('[data-test=ctaBtn]')
    //         .should('have.text', 'Shop now')
    //     cy.url().should('include', 'login')
    // })
    // context('logged in user', () => {
    //     beforeEach(() => {
    //         cy.SignIn()
    //     })

    //     it('goes to products page with clicking Shop Now button', () =>{
    //         cy.get('[data-test=ctaBtn]')
    //             .should('have.text', 'Shop now')
    //         cy.url().should('include', 'products')
    //     })
    // })
    
})
