import Page from './page';

const heading = '.text-xs-center.ng-binding';
const signUpLink = 'a[href*="register"]';
const usernameInputField = '[placeholder="Username"]';
const emailInputField = '[placeholder="Email"]';
const passwordInputField = '[placeholder="Password"]';
const signUpButton = 'button[type="submit"]';

class RegisterPage extends Page {
  navigate() {
    super.clickElement(signUpLink);
  }

  getHeading() {
    return super.getElement(heading);
  }

  getUsernameInputField() {
    return super.getElement(usernameInputField);
  }

  getEmailInputField() {
    return super.getElement(emailInputField);
  }

  getPasswordInputField() {
    return super.getElement(passwordInputField);
  }

  fillInputs(username, email, password) {
    super.fillElement(usernameInputField, username);
    super.fillElement(emailInputField, email);
    super.fillElement(passwordInputField, password);
  }

  register() {
    super.clickElement(signUpButton);
  }
  
}

export default new RegisterPage();
