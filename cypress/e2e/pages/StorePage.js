import BasePage from "./BasePage";
import  {storePageLocators} from "../locators";

class StorePage extends BasePage{
    constructor() {
        super();

    }
    clickCyberpunk(){

        cy.get(storePageLocators.cyberPunkStoreElement).click()
    }
    fillBirthDaySelect(year){

        cy.get(storePageLocators.birthDayYear).eq(0).select(year)
    }
    viewProductPage(){
        cy.get(storePageLocators.productPageBtn).click()
    }
    addToWishlist(){
        cy.get(storePageLocators.addToWishlistBtn).click()
    }
    clickUserWishlist(){
        cy.get(storePageLocators.userWishlistBtn).click()
    }

    deleteItemFromWishlist(){

        cy.get(storePageLocators.deleteFromWishlistBtn).click()
    }




}
export default StorePage