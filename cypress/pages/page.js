const url = 'https://demo.realworld.io/#';

class Page {
  open() {
    return cy.visit(url);
  }

  getTitle() {
    return cy.title();
  }

  getElement(selector) {
    return cy.get(selector);
  }

  clickElement(selector) {
    this.getElement(selector).click();
  }

  fillElement(selector, text) {
    this.getElement(selector).type(text);
  }
}

export default Page;
