import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import env from "../../environment/staging.json"
import commonSteps from "../../support/pageObjects/common";
import loginPage from "../../support/pageObjects/loginPage";

const cs = new commonSteps();
const lp = new loginPage();

Given("the user is on the login page", () => {
    cs.navigateUrl(env.url.loginPageUrl)
})
When("the user enters the credentials", () => {
    lp.enterCredentials(env.cred.userName, env.cred.password);
})
Then("clicks on the login button", () => {
    lp.clickOnLoginBtn()
})
Then("the shop page should be navigated", () => {
    cs.validateUrl(env.url.shopHomePageUrl);
})