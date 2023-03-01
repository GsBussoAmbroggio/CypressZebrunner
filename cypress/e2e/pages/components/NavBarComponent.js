import BasePage from "../BasePage";
import {navBarLocators} from "../../locators";

class NavBarComponent extends BasePage{

    constructor() {
        super();
    }
    clickOnStore(){
        cy.get(navBarLocators.navItemStore).click()
    }
    searchForProduct(product){
        cy.get(navBarLocators.searchBar).type(product + '{enter}')
    }

}
export default NavBarComponent;