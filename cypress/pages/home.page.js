import Page from './page';

const usernameLink = 'a[class="nav-link ng-binding"]';
const homeLink = '*[show-authed="true" ] > .nav-item > a[href="#/"]';
const signInLink = '.nav-item > a[href*="login"]';
const globalFeedLink = '.feed-toggle > .nav > :nth-child(2) > .nav-link';
const lastArticleTitle = ':nth-child(1) > .article-preview > .preview-link > h1.ng-binding';
const lastArticleShortDescription = ':nth-child(1) > .article-preview > .preview-link > p.ng-binding';
const lastArticleTag = ':nth-child(1) > .article-preview > .preview-link > .tag-list > :nth-child(1)';
const readMoreLink = ':nth-child(1) > .article-preview > .preview-link > span';
const articlesList = 'article-list';
const popularTagsList = 'div.tag-list > a';
const tagLink = '[ng-show="$ctrl.listConfig.filters.tag"] > .nav-link';
const tagsLists = 'ul.tag-list';
const articleAuthorName = ':nth-child(1) > .article-preview > article-meta.ng-isolate-scope > .article-meta > .info > .author';
const likeBtn = ':nth-child(1) > .article-preview > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > .pull-xs-right > .btn';
const likesNumberSpan = ':nth-child(1) > .article-preview > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > .pull-xs-right > .btn >ng-transclude > span';

class HomePage extends Page {
    getUsernameLink() {
        return super.getElement(usernameLink);
    }

    getHomeLink() {
        return super.getElement(homeLink);
    }

    getSignInLink() {
        return super.getElement(signInLink);
    }

    getGlobalFeed() {
        return super.getElement(globalFeedLink);
    }

    goToGlobalFeed() {
        super.clickElement(globalFeedLink);
    }

    getLastArticleTitle() {
        return super.getElement(lastArticleTitle);
    }

    getLastArticleShortDescription() {
        return super.getElement(lastArticleShortDescription);
    }

    getLastArticleTag() {
        return super.getElement(lastArticleTag);
    }

    getArticlesList() {
        return super.getElement(articlesList);
    }

    getPopularTagsList() {
        return super.getElement(popularTagsList);
    }

    getTagLink() {
        return super.getElement(tagLink);
    }

    getTagsLists() {
        return super.getElement(tagsLists);
    }

    getArticleAuthor() {
        return super.getElement(articleAuthorName);
    }

    getLikesNumber() {
        return super.getElement(likesNumberSpan);
    }

    getLikeButton() {
        return super.getElement(likeBtn);
    }

    readMore() {
        super.clickElement(readMoreLink);
    }

    goToProfile() {
        super.clickElement(usernameLink);
    }

    goToArticleAuthor() {
        super.clickElement(articleAuthorName);
    }

    likeLastArtcile() {
        super.clickElement(likeBtn);
    }
}
  
  export default new HomePage();
  