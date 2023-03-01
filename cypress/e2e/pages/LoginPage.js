import BasePage from "./BasePage";
import {loginPageLocators} from "../locators";

class LoginPage extends BasePage{


    constructor() {
        super();
    }

    login(){
        cy.log('Navigating to login')
        this.navigate(Cypress.env('loginUrl'));
        cy.log('Filling imputs')
        cy.get(loginPageLocators.imputEmail).type(Cypress.env('userName'));
        cy.get(loginPageLocators.imputPassword).type(Cypress.env('passWord'));
        cy.wait(5000)
    }

    logout(){
        cy.get(loginPageLocators.accountPulldown).click();
        cy.get(loginPageLocators.logOutBtn).click()
    }
}
export default LoginPage