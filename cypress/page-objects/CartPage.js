export class CartPage {

    verifyCartDetails(order, description, quantity, price){
        cy.get('h5 > .dark-grey')
        .contains(order)
    
        cy.get('.item__switch-type > .text-9')
        .contains(description)
    
        cy.get('#quote-item-version-qty-14270')
        .contains(quantity)
    
        cy.get('.summary-total__content > .total > #checkout_total')
        .contains("€"+price)
    }
}