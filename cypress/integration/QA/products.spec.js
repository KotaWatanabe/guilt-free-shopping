describe('homepage UI', () => {
    before(function () {
        cy.SignIn()
        cy.visit('/products')
    })
    const productsNum = 6;

    it('has title', () => {
        cy.get('[data-test=title]')
            .should('have.text','Our Products')
    })

    it('has  6 products', () => {
        cy.get('[data-test=cards]').children().as('productDetail')
            .should('have.length', productsNum);
    })

    it('order by low price to high price', () => {
        cy.get('[data-test=price-wrap]').within(($selector) => {
            cy.get('select').select('lowestprice')
        })
        cy.get('[data-test=cards]').children().first().within($firstEl => {
            cy.get('h1').contains('Brown Bag')
        })
    })
    it('order by price', () => {
        cy.get('[data-test=price-wrap]').within(($selector) => {
            cy.get('select').select('highestprice')
        })
        cy.get('[data-test=cards]').children().first().within($firstEl => {
            cy.get('h1').contains('Black Watch')
        })
    })
})
