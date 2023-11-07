import Page from './page';

const articleTitle = 'h1.ng-binding';
const articleText = 'div.ng-binding > p';
const articleTag = '.tag-list > li';
const username = '.container > article-actions.ng-isolate-scope > article-meta.ng-isolate-scope > .article-meta > .info > .author';
const homeLink = '[show-authed="true"] > :nth-child(1) > .nav-link';
const deleteBtn = '.container > article-actions.ng-isolate-scope > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > [ng-show="$ctrl.canModify"] > .btn-outline-danger';
const editBtn = '.container > article-actions.ng-isolate-scope > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > [ng-show="$ctrl.canModify"] > .btn-outline-secondary';
const commentTextArea = '.form-control';
const postCommentBtn = '.card-footer > .btn';
const deleteCommentBtn = ':nth-child(3) > .card > .card-footer > .mod-options > .ion-trash-a';
const commentText = ':nth-child(3) > .card > .card-block > .card-text';
const commentDate = ':nth-child(3) > .card > .card-footer > .date-posted';

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

    getUsername() {
        return super.getElement(username);
    }

    getCommentTextArea() {
        return super.getElement(commentTextArea);
    }

    getPostCommentButton() {
        return super.getElement(postCommentBtn);
    }

    getCommentText() {
        return super.getElement(commentText);
    }

    getCommentDate() {
        return super.getElement(commentDate);
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

    writeComment(comment) {
        super.fillElement(commentTextArea, comment);
    }

    postComment() {
        super.clickElement(postCommentBtn);
    }

    deleteComment() {
        super.clickElement(deleteCommentBtn);
    }
}
  
  export default new ArticlePage();