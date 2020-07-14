describe('homepage UI', () => {
    before(function () {
        cy.SignIn()
        cy.visit('/products')
    })

    //config
    const productsNum = 6;
    const numberOfBugs = 2;
    const numberOfWatches = 2;
    const numberOfGlasses = 2;

    const highestPrice = 149;
    const lowestPrice = 49;

    it('has title', () => {
        cy.get('[data-test=title]')
            .should('have.text','Our Products')
    })

    //default cart
    it('has a empty cart', () => {
        cy.get('.cartBtn').as('cartBtn').within($cartBtn => {
            cy.get('.count').contains('0')
        })
        cy.get('@cartBtn')
            .click()
        cy.url().should('include', 'cart')
        cy.get('h2').should('have.text','Cart is empty')
        cy.go('back')
    })

    it('has  6 products', () => {
        cy.get('[data-test=cards]').children().as('productDetail')
            .should('have.length', productsNum);
    })

    it('filters by product category', () => {
        context('select BAG', () => {
            cy.get('[data-test=category-wrap]').within(($selector) => {
                cy.get('select').select('BAG')
            })
            cy.get('[data-test=cards]').children().should('have.length',numberOfBugs)
                .first()
                .get('h1')
                .contains('Bag')
        })
        context('select WATCH', () => {
            cy.get('[data-test=category-wrap]').within(($selector) => {
                cy.get('select').select('WATCH')
            })
            cy.get('[data-test=cards]').children().should('have.length',numberOfWatches)
                .first()
                .get('h1')
                .contains('Watch')
        })
        context('select GLASSES', () => {
            cy.get('[data-test=category-wrap]').within(($selector) => {
                cy.get('select').select('GLASSES')
            })
            cy.get('[data-test=cards]').children().should('have.length',numberOfGlasses)
                .first()
                .get('h1')
                .contains('Glasses')
        })
        context('select GLASSES', () => {
            cy.get('[data-test=category-wrap]').within(($selector) => {
                cy.get('select').select('ALL')
            })
            cy.get('[data-test=cards]').children().should('have.length',productsNum)
        })

    })

    it('order by price', () => {
        const firstProductName = 'Brown Bag'
        
        context('low price to high price', () => {
            cy.get('[data-test=price-wrap]').within(($selector) => {
                cy.get('select').select('lowestprice')
            })
            cy.get('[data-test=cards]').children().first().within($firstEl => {
                cy.get('p').contains(lowestPrice);
            })
        })

        context('highprice to low price', () => {
            cy.get('[data-test=price-wrap]').within(($selector) => {
                cy.get('select').select('highestprice')
            })
            cy.get('[data-test=cards]').children().first().within($firstEl => {
                cy.get('p').contains(highestPrice);
            })
        })

        context('back to normal order', () => {
            cy.get('[data-test=price-wrap]').within(($selector) => {
                cy.get('select').select('Select')
            })
            cy.get('[data-test=productTitle]').first().should('have.text',firstProductName)
        })
    })

    it('add to cart the product with clicking ADD TO CART button',() => {
        cy.get('[data-test=product-detail]').first().as('firstProduct')
        cy.get('@firstProduct').within($firstP => {
            cy.get('[data-test=addCartBtn]').as('addCartBtn')
                .should('have.text','Add To Cart')
            cy.get('@addCartBtn').click()
                .should('have.text','Already in Cart')
        })
        
        cy.get('.cartBtn').as('cartBtn').within($cartBtn => {
            cy.get('.count').contains('1')
        })
    })

})
