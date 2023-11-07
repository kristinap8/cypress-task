import Page from './page';

const heading = 'h4.ng-binding';
const myArticlesLink = '.articles-toggle > .nav > :nth-child(1) > .nav-link';
const readMoreLink = ':nth-child(1) > .article-preview > .preview-link > span';
const lastArticleTitle = ':nth-child(1) > .article-preview > .preview-link > h1.ng-binding';
const followBtn = 'follow-btn > button';

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

  getFollowButton() {
    return super.getElement(followBtn);
  }

  readMore() {
    super.clickElement(readMoreLink);
  }

  follow() {
    super.clickElement(followBtn);
  }
}

export default new ProfilePage();