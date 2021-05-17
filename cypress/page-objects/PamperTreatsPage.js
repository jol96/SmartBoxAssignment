export class PamperTreatsPage{

    verifyPamperTreatsTitle(){
        cy.get('.qa-box-product-title')
    }

    clickAddToCartBtn() {
        cy.get('.add-to-cart--primary > .js-add-to-cart')
        .click()
    }
}