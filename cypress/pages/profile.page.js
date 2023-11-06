import Page from './page';

const heading = 'h4.ng-binding';
const myArticlesLink = '.articles-toggle > .nav > :nth-child(1) > .nav-link';
const readMoreLink = ':nth-child(1) > .article-preview > .preview-link > span';
const lastArticleTitle = ':nth-child(1) > .article-preview > .preview-link > h1.ng-binding';

class ProfilePage extends Page {
  getHeading() {
    return super.getElement(heading);
  }

  getMyArticlesLink() {
    return super.getElement(myArticlesLink);
  }

  getLastArticleTitle() {
    return super.getElement(lastArticleTitle);
  }

  readMore() {
    super.clickElement(readMoreLink);
  }
}

export default new ProfilePage();