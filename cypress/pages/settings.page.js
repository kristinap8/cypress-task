import Page from './page';

const settingsLink = '.nav-item > a[href*="settings"]';
const heading = 'h1.text-xs-center';
const newPasswordInputField = 'input[type="password"]';
const usernameInputField = 'input[placeholder="Username"]';
const emailInputField = 'input[type="email"]';
const updateSettingsBtn = 'button[type="submit"]';
const logOutBtn = 'button.btn.btn-outline-danger';

class SettingsPage extends Page {
    navigate() {
        super.clickElement(settingsLink);
    }

    getHeading() {
        return super.getElement(heading);
    }

    getNewPasswordInputField() {
        return super.getElement(newPasswordInputField);
    }

    getLogOutButton() {
        return super.getElement(logOutBtn);
    }

    getUsernameInputfield() {
        return super.getElement(usernameInputField);
    }

    getEmailInputField() {
        return super.getElement(emailInputField);
    }

    enterNewPassword(newPassword) {
        super.fillElement(newPasswordInputField, newPassword);
    }

    updateSettings() {
        super.clickElement(updateSettingsBtn);
    }

    logOut() {
        super.clickElement(logOutBtn);
    }
}

export default new SettingsPage();