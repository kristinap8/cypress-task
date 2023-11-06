import Page from './page';

const articleTitle = 'h1.ng-binding';
const articleText = 'div.ng-binding > p';
const articleTag = '.tag-list > li';
const homeLink = '[show-authed="true"] > :nth-child(1) > .nav-link';
const deleteBtn = '.container > article-actions.ng-isolate-scope > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > [ng-show="$ctrl.canModify"] > .btn-outline-danger';
const editBtn = '.container > article-actions.ng-isolate-scope > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > [ng-show="$ctrl.canModify"] > .btn-outline-secondary';

class ArticlePage extends Page {
    getArticleTitle() {
        return super.getElement(articleTitle);
    }

    getArticleText() {
        return super.getElement(articleText);
    }

    getArticleTag() {
        return super.getElement(articleTag);
    }

    getEditButton() {
        return super.getElement(editBtn);
    }

    getDeleteButton() {
        return super.getElement(deleteBtn);
    }

    goHome() {
        super.clickElement(homeLink);
    }

    deleteArticle() {
        super.clickElement(deleteBtn);
    }

    editArticle() {
        super.clickElement(editBtn);
    }
}
  
  export default new ArticlePage();