export class ItemsAddedCartPopup {
    
    verifyPamperItemAddedToCart(expectedAmounOfItems, expectedItem){
        cy.get('.summary-total__item-name')
        .contains(expectedAmounOfItems+ " x " +expectedItem)
    }

    verifyPrice(expectedPrice){
        cy.get('.summary-total__item > .medium-4 > .row > .columns')
        .contains("€"+expectedPrice)
    }

    clickGoToCartBtn(){
        cy.get('.small-12 > .primary')
        .click()
    }
}