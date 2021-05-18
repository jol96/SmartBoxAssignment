import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

import { HomePage } from "../../../page-objects/HomePage"
import { PamperTreatsPage } from "../../../page-objects/PamperTreatsPage"
import { ItemsAddedCartPopup } from "../../../page-objects/ItemsAddedCartPopup"
import { CartPage } from "../../../page-objects/CartPage"


const homePage = new HomePage()
const pamperTreatsPage = new PamperTreatsPage()
const itemsAddedCartPopup = new ItemsAddedCartPopup()
const cartPage = new CartPage()

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

Given('User is on the Smartbox home page', () => {
    homePage.launchHomePage()
    homePage.acceptCookies()
})

And('User clicks see more Pamper treats button', () => {
    homePage.clickSeeMoreBtnPamperTreats()
})

When('User adds item to the cart', () => {
    pamperTreatsPage.verifyPamperTreatsTitle()
    pamperTreatsPage.clickAddToCartBtn()
   
})

And('User Verifies {string} {string} is in the cart window at price {string}', (quantity, item, price) =>{
    itemsAddedCartPopup.verifyPamperItemAddedToCart(quantity, item)
    itemsAddedCartPopup.verifyPrice(price)
})

Then('go to cart', () => {
    itemsAddedCartPopup.clickGoToCartBtn()
})

Then('validate the cart details {string} {string} {string} {string}', (item, description, quantity, price) => {
    cartPage.verifyCartDetails(item, description, quantity, price)
})
