import Page from './page';

const newArticleBtn = 'a[href*="editor"]';
const articleTitleInputField = 'input[placeholder="Article Title"]';
const articleShortDescriptionInputField = 'input[placeholder="What\'s this article about?"]';
const articleTextarea = 'textarea[placeholder="Write your article (in markdown)"]';
const tagsInputField = 'input[placeholder="Enter tags"]';
const publishArticleBtn = '.btn';

class NewArticlePage extends Page {
    navigate() {
        super.clickElement(newArticleBtn);
    }

    getNewArticleLink() {
        return super.getElement(newArticleBtn);
    }

    getArticleTitle() {
        return super.getElement(articleTitleInputField);
    }

    getArticleShortDescription() {
        return super.getElement(articleShortDescriptionInputField);
    }

    getArticleText() {
        return super.getElement(articleTextarea);
    }

    getTags() {
        return super.getElement(tagsInputField);
    }

    fillInputs(title, shortDescription, articleText, tags) {
        super.fillElement(articleTitleInputField, title);
        super.fillElement(articleShortDescriptionInputField, shortDescription);
        super.fillElement(articleTextarea, articleText);
        super.fillElement(tagsInputField, tags);
    }

    clearInputs() {
        this.getArticleTitle().clear();
        this.getArticleShortDescription().clear();
        this.getArticleText().clear();
        this.getTags().clear();
    }

    publishArticle() {
        super.clickElement(publishArticleBtn);
    }
}
  
  export default new NewArticlePage();