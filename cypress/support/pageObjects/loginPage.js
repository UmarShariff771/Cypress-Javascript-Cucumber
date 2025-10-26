import cred from "../../environment/staging.json";
import loginPageLocators  from "./pageObjectLocators/loginPage.json";

class loginPage {
  // Enter the valid credentials
  enterCredentials() {
    cy.get(loginPageLocators .email_Input_field).type(cred.cred.userName);
    cy.get(loginPageLocators .password_Input_field).type(cred.cred.password);
    cy.log("Enterred the credentials in the input field");
  }

  // Click on the login Button
  clickOnLoginBtn() {
    cy.get(loginPageLocators .login_button).click();
    cy.log("Clicked on the login button successfully");
  }
}
export default loginPage;
