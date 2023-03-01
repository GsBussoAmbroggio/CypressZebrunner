import StorePage from "../pages/StorePage";
import NavBarComponent from "../pages/components/NavBarComponent";
import LoginPage from "../pages/LoginPage";
import {storePageLocators} from "../locators";

describe('Testing store page workflows' ,()=>{

    let loginPage = new LoginPage();
    let navBar = new NavBarComponent();
    let storePage = new StorePage();
    beforeEach("navigate to steam login page", ()=>{
        loginPage.login()
    })

    it('Should add an item to wishlist', ()=>{
        navBar.clickOnStore()
        navBar.searchForProduct('Cyberpunk 2077')
        storePage.clickCyberpunk()
        storePage.fillBirthDaySelect('1992')
        storePage.viewProductPage()
        storePage.addToWishlist()
        cy.wait(3000)
    })
    it('Should check my item is on wishlist', ()=>{
        navBar.clickOnStore()
        storePage.clickUserWishlist()
        cy.wait(3000)
        if(cy.get('.title').contains('Cyberpunk 2077')){
            storePage.deleteItemFromWishlist()
            cy.get(storePageLocators.acceptDeleteBtn).click()
        }

        cy.get(storePageLocators.noItemWishlistTitle).should('be.visible')
        loginPage.logout()
    })
})