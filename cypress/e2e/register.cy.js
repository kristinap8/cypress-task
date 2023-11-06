import RegisterPage from "../pages/register.page";
import HomePage from "../pages/home.page";
import { faker } from '@faker-js/faker';

const randomUsername = faker.internet.userName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

it('Register with valid credentials', () => {

    RegisterPage.open();
    RegisterPage.navigate();

    RegisterPage.getTitle().should('include', 'Sign up');
    RegisterPage.getHeading().should('have.text', 'Sign up');
    RegisterPage.getUsernameInputField().should('be.visible');
    RegisterPage.getEmailInputField().should('be.visible');
    RegisterPage.getPasswordInputField().should('be.visible');

    RegisterPage.fillInputs(randomUsername, randomEmail, randomPassword);

    RegisterPage.getUsernameInputField().should('have.value', randomUsername);
    RegisterPage.getEmailInputField().should('have.value', randomEmail);
    RegisterPage.getPasswordInputField().should('have.attr', 'type').and('eq', 'password');

    RegisterPage.register();
    
    HomePage.getTitle().should('include', 'Home');
    HomePage.getHomeLink().should('include.class', 'active');
    HomePage.getUsernameLink().should('include.text', randomUsername);
})