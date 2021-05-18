/// <reference types="cypress" />

import { CartPage } from "../../page-objects/cartPage"
import { HomePage } from "../../page-objects/HomePage"
import { ItemsAddedCartPopup } from "../../page-objects/ItemsAddedCartPopup"
import { PamperTreatsPage } from "../../page-objects/PamperTreatsPage"


describe('Add a random box from the ‘Our popular box’ section', ()=>{

    const homePage = new HomePage()
    const pamperTreatsPage = new PamperTreatsPage()
    const itemsAddedCartPopup = new ItemsAddedCartPopup()
    const cartPage = new CartPage()

    it('Given the user is on the Smartbox home page', () => {
        homePage.launchHomePage()
        homePage.acceptCookies()
        homePage.clickSeeMoreBtnPamperTreats()
       
        pamperTreatsPage.verifyPamperTreatsTitle()
        pamperTreatsPage.clickAddToCartBtn()
    
        itemsAddedCartPopup.verifyPamperItemAddedToCart("1", "Pamper Treats")
        itemsAddedCartPopup.verifyPrice("29.00")
        itemsAddedCartPopup.clickGoToCartBtn()
    
        cartPage.verifyCartDetails("Pamper Treats","1 spa or beauty treatment for 1 or 2 people","1","29.00")
    
    })

})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })