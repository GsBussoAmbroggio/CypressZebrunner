import BasePage from "../BasePage";
import {navBarLocators} from "../../locators";

class NavBarComponent extends BasePage{

    constructor() {
        super();
    }
    clickOnNavItem(locator){
        cy.get(locator).click()
    }
    clickOnStore(){
        cy.get(navBarLocators.navItemStore).click()
    }
    clickOnChat(){
        cy.get(navBarLocators.chat).click()
    }
    searchForProduct(product){
        cy.get(navBarLocators.searchBar).type(product + '{enter}')
    }

}
export default NavBarComponent;