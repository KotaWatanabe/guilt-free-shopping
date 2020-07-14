describe('cart UI', () => {
    before(function () {
        cy.SignIn()
        cy.visit('/cart')
    })

    it('has empty cart', () => {
        cy.get('h2').should('have.text','Cart is empty')
    })
    
    it('adds products to the cart', () => {
        cy.visit('/products')
        cy.get('[data-test=product-detail]').first().as('firstProduct')
        cy.get('[data-test=product-detail]').eq(2).as('secondProduct')

        cy.get('@firstProduct').within($firstP => {
            cy.get('[data-test=addCartBtn]').as('addCartBtn')
                .should('have.text','Add To Cart')
            cy.get('@addCartBtn').click()
                .should('have.text','Already in Cart')
        })

        cy.get('@secondProduct').within($secondP => {
            cy.get('[data-test=addCartBtn]').as('addCartBtn2')
                .should('have.text','Add To Cart')
            cy.get('@addCartBtn2').click()
                .should('have.text','Already in Cart')
        })

        cy.get('.cartBtn').as('cartBtn').within($cartBtn => {
            cy.get('.count').contains('2').click()
            cy.url().should('include','cart')
        })

        cy.get('h2').should('have.text','You have 2 items in the cart.')

        cy.get('[data-test=product-list]').should('have.length',2)

    })

    it('add and substract product quantity', () => {
        let price1 = 49
        let price2 = 99
        let total = price1 + price2

        cy.get('[data-test=product-list]').first().within($firstP=> {
            cy.get('[data-test=price]').then(firstPrice => {
                const price1 = firstPrice.text();
                cy.wrap(price1).as('price1');
            })
        })
        cy.get('[data-test=product-list]').first().within($firstP=> {
            cy.get('[data-test=productCount]').then(firstCount => {
                const count1 = parseInt(firstCount.text()) ;
                cy.wrap(count1).as('count1');
            })
        })

        cy.get('@price1').then(p1 => {
            price1 = p1
        })
        cy.get('@count1')
        debugger
        cy.get('[data-test=product-list]').first().as('firstProduct')

        cy.get('@firstProduct').within($firstP => {
            cy.get('[data-test=plusBtn]').click()
            cy.get('[data-test=productCount]').contains('2')
        }) 

        cy.get('h2').should('have.text','You have 3 items in the cart.')
        cy.get('.cartBtn').as('cartBtn').within($cartBtn => {
            cy.get('.count').contains('3')
        })

        cy.get('@firstProduct').within($firstP => {
            cy.get('[data-test=minusBtn]').click()

            cy.get('[data-test=productCount]').contains('1')
        }) 
        
        cy.get('[data-test=totalPrice]').contains(`${total}`)
    })

    it('clear the cart', () => {
        cy.get('[data-test=clearBtn').click()
        cy.get('h2').should('have.text','Cart is empty')
    })

})
