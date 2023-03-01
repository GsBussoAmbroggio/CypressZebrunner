 ///<reference types='cypress' />

 import HomePage from "../pages/HomePage";
 import constants, {homePageLocators} from "../locators";
 describe("Steam HomePage testing",() => {

     let homepage = new HomePage()
     beforeEach("navigate to steam", ()=>{
         homepage.navigate(Cypress.env('url'));
     })
     it('Should navigate to steam and equals title', ()=>{
         assert(cy.title('eq', "Bienvenidos a Steam"))
     })
     it('Should navigate to login page by clicking login btn', ()=>{
         homepage.clickOnElement(homePageLocators.loginBtn)
        assert(cy.title('eq', "Iniciar sesión"))

     })




 });