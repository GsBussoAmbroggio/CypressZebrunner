import BasePage from "./BasePage";
import  {storePageLocators} from "../locators";

class StorePage extends BasePage{
    constructor() {
        super();

    }
    clickFirstStoreElement(){

        cy.get(storePageLocators.firstStoreElementTitle).click()
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

    goToTopSeller(){
        this.clickOnElement(storePageLocators.topSellerBtn);
    }
    orderByPrice(element){
        this.clickOnElement(storePageLocators.orderDropdown);
        if(element === "bajo"){
            this.clickOnElement(storePageLocators.ascOrder);
        }else{
            this.clickOnElement(storePageLocators.descOrder);
        }
    }
    firstElementContains(locator, parameter){
        cy.get(locator).should('contain', parameter);
    }


}
export default StorePage