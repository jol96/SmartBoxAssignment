export class HomePage {
    
    launchHomePage(){
        cy.visit('https://www.smartbox.com/ie/')
    }

    acceptCookies() {
        cy.get('#onetrust-accept-btn-handler')
        .click()
    }

    clickSeeMoreBtnPamperTreats() {
        cy.get('.widget-type-d-20779 > .thematic-wrapper > .row > .slick-list > .slick-track > .slick-current > .thematic__wrapper-link > :nth-child(4) > .button')
        .click()
    }
}