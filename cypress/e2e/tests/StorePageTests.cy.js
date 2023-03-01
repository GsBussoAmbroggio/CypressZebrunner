import StorePage from "../pages/StorePage";
import NavBarComponent from "../pages/components/NavBarComponent";
import LoginPage from "../pages/LoginPage";
import {storePageLocators} from "../locators";
import * as constants from "constants";
import {storePageConsts} from "../constants";

describe('Testing store page workflows' ,()=>{

    let loginPage = new LoginPage();
    let navBar = new NavBarComponent();
    let storePage = new StorePage();
    beforeEach("navigate to steam login page", ()=>{
        cy.viewport(1920,1080)
        loginPage.login()
    })


    it('Should add an item to wishlist', ()=>{
        navBar.clickOnStore()
        navBar.searchForProduct(storePageConsts.cyberpunk)
        storePage.clickFirstStoreElement()
        storePage.fillBirthDaySelect(storePageConsts.birthYear)
        storePage.viewProductPage()
        storePage.addToWishlist()
        cy.wait(3000)
    })
    it('Should check my item is on wishlist', ()=>{
        navBar.clickOnStore()
        storePage.clickUserWishlist()
        cy.wait(3000)
        if(cy.get('.title').contains(storePageConsts.cyberpunk)){
            storePage.deleteItemFromWishlist()
            cy.get(storePageLocators.acceptDeleteBtn).click()
        }

        cy.get(storePageLocators.noItemWishlistTitle).should('be.visible')
        cy.visit(Cypress.env('url'))
    })
    it('Should order products by price', () => {
        storePage.goToTopSeller();
        storePage.orderByPrice(storePageConsts.ascendant);
        storePage.firstElementContains(storePageLocators.firstStoreElementPrice, storePageConsts.freeToPlay)
        storePage.orderByPrice(storePageConsts.descendant);
        storePage.firstElementContains(storePageLocators.firstStoreElementPrice, storePageConsts.higherPriceItem)
    })
})