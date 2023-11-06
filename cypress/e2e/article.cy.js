import NewArticlePage from "../pages/newArticle.page";
import ArticlePage from "../pages/article.page";
import LoginPage from "../pages/login.page";
import HomePage from "../pages/home.page";
import ProfilePage from "../pages/profile.page";
import { faker } from '@faker-js/faker';
import validUser from "../fixtures/validUser.json";

const validUserData = JSON.parse(JSON.stringify(validUser));
const articleTitle = faker.word.words(3);
const articleDescription = faker.lorem.sentence({min:1 ,max:6});
const articleText = faker.lorem.sentences({min:1, max:4});
const tag = faker.word.words(1);
const newArticleTitle = faker.word.words(3);
const newArticleDescription = faker.lorem.sentence({min:1 ,max:6});
const newArticleText = faker.lorem.sentences({min:1, max:4});
const newTag = faker.word.words(1);

describe("Article Actions", () => {
    
    beforeEach(() => {
        LoginPage.open();
        LoginPage.navigate();
        LoginPage.fillInputs(validUserData["email"], validUserData["password"]);
        LoginPage.login();
    });

    it("Create an article", () => {
        NewArticlePage.navigate();
        NewArticlePage.getTitle('New Article');
        NewArticlePage.getNewArticleLink().should('include.class', 'active');

        NewArticlePage.fillInputs(articleTitle, articleDescription, articleText, tag);
        NewArticlePage.getArticleTitle().should('have.value', articleTitle);
        NewArticlePage.getArticleShortDescription().should('have.value', articleDescription);
        NewArticlePage.getArticleText().should('have.value', articleText);
        NewArticlePage.getTags().should('have.value', tag);

        NewArticlePage.publishArticle();
        
        ArticlePage.getTitle().should('include', articleTitle);
        ArticlePage.getArticleTitle().should('have.text', articleTitle);
        ArticlePage.getArticleText().should('have.text', articleText);
        ArticlePage.getArticleTag().should('have.text', tag);

        ArticlePage.goHome();
        HomePage.getHomeLink().should('include.class', 'active');
        HomePage.getTitle().should('include', 'Home');

        HomePage.goToGlobalFeed();
        HomePage.getGlobalFeed().should('include.class', 'active');
        HomePage.getLastArticleTitle().should('have.text', articleTitle);
        HomePage.getLastArticleShortDescription().should('have.text', articleDescription);
        HomePage.getLastArticleTag().should('have.text', tag);
    });

    it("Edit an article", () => {
        HomePage.goToProfile();
        ProfilePage.getTitle().should("include", validUserData["username"]);
        ProfilePage.getMyArticlesLink().should('include.class', 'active');

        ProfilePage.readMore();
        ArticlePage.getTitle().should('include', articleTitle);
        ArticlePage.getEditButton().should('be.visible');

        ArticlePage.editArticle();
        NewArticlePage.getTitle('New Article');
        NewArticlePage.getNewArticleLink().should('include.class', 'active');
        NewArticlePage.getArticleTitle().should('have.value', articleTitle);
        NewArticlePage.getArticleShortDescription().should('have.value', articleDescription);
        NewArticlePage.getArticleText().should('have.value', articleText);
        NewArticlePage.getTags().should('have.value', tag);

        NewArticlePage.clearInputs();
        NewArticlePage.fillInputs(newArticleTitle, newArticleDescription, newArticleText, newTag);
        NewArticlePage.getArticleTitle().should('have.value', newArticleTitle);
        NewArticlePage.getArticleShortDescription().should('have.value', newArticleDescription);
        NewArticlePage.getArticleText().should('have.value', newArticleText);
        NewArticlePage.getTags().should('have.value', newTag);

        NewArticlePage.publishArticle();
        ArticlePage.getTitle().should('include', newArticleTitle);
        ArticlePage.getArticleTitle().should('have.text', newArticleTitle);
        ArticlePage.getArticleText().should('have.text', newArticleText);
        ArticlePage.getArticleTag().should('have.text', newTag);
    });

    it("Delete an article", () => {
        HomePage.goToProfile();
        ProfilePage.getTitle().should("include", validUserData["username"]);
        ProfilePage.getMyArticlesLink().should('include.class', 'active');

        ProfilePage.readMore();
        ArticlePage.getTitle().should('include', articleTitle);
        ArticlePage.getDeleteButton().should('be.visible');

        ArticlePage.deleteArticle();
        HomePage.getTitle().should('include', 'Home');
        HomePage.goToProfile();
        ProfilePage.getLastArticleTitle().should((title) => {
            if (title.length > 0) {
              expect(title).to.not.have.text(newArticleTitle);
            }}); 
    });
})