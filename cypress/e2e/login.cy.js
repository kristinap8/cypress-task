import HomePage from '../pages/home.page';
import LoginPage from '../pages/login.page';
import validUser from "../fixtures/validUser.json";

const validUserData = JSON.parse(JSON.stringify(validUser));

it("Login with valid credentials", () => {
    
    LoginPage.open();
    LoginPage.navigate();
    
    LoginPage.getTitle().should('include', 'Sign in');
    LoginPage.getHeading().should('have.text', 'Sign in');
    LoginPage.getEmailInputField().should('be.visible');
    LoginPage.getPasswordInputField().should('be.visible');

    LoginPage.fillInputs(validUserData["email"], validUserData["password"]);

    LoginPage.getEmailInputField().should('have.value', validUserData['email']);
    LoginPage.getPasswordInputField().should('have.attr', 'type').and('eq', 'password');

    LoginPage.login();

    HomePage.getTitle().should('include', 'Home');
    HomePage.getHomeLink().should('include.class', 'active');
    HomePage.getUsernameLink().should('include.text', validUserData['username']);
})