import SettingsPage from "../pages/settings.page";
import LoginPage from "../pages/login.page";
import ProfilePage from "../pages/profile.page";
import HomePage from "../pages/home.page";
import validUser from "../fixtures/validUser.json";
import {faker} from '@faker-js/faker';

const validUserData = JSON.parse(JSON.stringify(validUser));
const newPassword = faker.internet.password();

it("Change the password", () => {
    LoginPage.open();
    LoginPage.navigate();
    LoginPage.fillInputs(validUserData['email'], validUserData['password']);
    LoginPage.login();

    SettingsPage.navigate();
    SettingsPage.getTitle().should('include','Settings');
    SettingsPage.getHeading().should('have.text','Your Settings');
    SettingsPage.getNewPasswordInputField().should('be.visible').and('be.empty');

    SettingsPage.enterNewPassword(newPassword);
    SettingsPage.getNewPasswordInputField().should('have.attr', 'type').and('eq', 'password');

    SettingsPage.updateSettings();

    ProfilePage.getTitle().should("include", validUserData["username"]);
    ProfilePage.getHeading().should("have.text", validUserData["username"]);

    SettingsPage.navigate();
    SettingsPage.getTitle().should("include", "Settings");
    SettingsPage.getUsernameInputfield().should('have.value', validUserData["username"]);
    SettingsPage.getEmailInputField().should('have.value', validUserData["email"]);
    SettingsPage.getLogOutButton().should('be.visible');
    SettingsPage.logOut();
    
    HomePage.getTitle().should('include', 'Home');
    HomePage.getSignInLink().should('be.visible');

    LoginPage.navigate();
    LoginPage.getTitle().should('include', 'Sign in');
    LoginPage.getEmailInputField().should('be.visible');
    LoginPage.getPasswordInputField().should('be.visible');
    LoginPage.fillInputs(validUserData['email'], newPassword);
    LoginPage.login();

    HomePage.getTitle().should('include', 'Home');
    HomePage.getUsernameLink().should('include.text', validUserData["username"]);

    SettingsPage.navigate();
    SettingsPage.enterNewPassword(validUserData["password"]);
    cy.wait(100);
    SettingsPage.updateSettings();
    SettingsPage.logOut();
})
