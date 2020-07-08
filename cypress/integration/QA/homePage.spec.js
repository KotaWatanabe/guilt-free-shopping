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
            .should('have.text', 'Shop now')
    })
})
