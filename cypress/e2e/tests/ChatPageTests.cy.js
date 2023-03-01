import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ChatPage from "../pages/ChatPage";
import NavBarComponent from "../pages/components/NavBarComponent";

describe('Testing chat page components', ()=>{
    let loginPage = new LoginPage();
    let homePage = new HomePage();
    let chatPage = new ChatPage();
    let navBar = new NavBarComponent();
    beforeEach("Navigating to Chat page", ()=>{
        cy.viewport(1920,1080)
        homePage.navigate(Cypress.env('url'))
        loginPage.login()
        navBar.clickOnChat()
        cy.wait(5000)
    })
    it('do something', ()=>{

    })
})