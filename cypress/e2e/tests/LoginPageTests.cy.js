import LoginPage from "../pages/LoginPage";
import {loginPageLocators} from "../locators";
describe('Testing Loginpage', ()=>{

    let loginPage = new LoginPage()
    beforeEach("navigate to steam login page", ()=>{
        loginPage.login()
    })

   it('Should log off', ()=>{
       loginPage.logout()
   })



})

