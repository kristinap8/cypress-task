import Page from './page';

const heading = 'h1.text-xs-center.ng-binding';
const signInLink = 'a[href*="login"]';
const emailInputField = 'input[type="email"]';
const passwordInputField = 'input[type="password"]';
const signInButton = 'button[type="submit"]';

class LoginPage extends Page {
  navigate() {
    super.clickElement(signInLink);
  }

  getHeading() {
    return super.getElement(heading);
  }

  getEmailInputField() {
    return super.getElement(emailInputField);
  }

  getPasswordInputField() {
    return super.getElement(passwordInputField);
  }

  fillInputs(email, password) {
    super.fillElement(emailInputField, email);
    super.fillElement(passwordInputField, password);
  }

  login() {
    super.clickElement(signInButton);
  }

}

export default new LoginPage();