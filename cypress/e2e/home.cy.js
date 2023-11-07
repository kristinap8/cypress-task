import HomePage from '../pages/home.page';
import LoginPage from '../pages/login.page';
import ArticlePage from '../pages/article.page';
import ProfilePage from '../pages/profile.page';
import validUser from "../fixtures/validUser.json";
import { faker } from '@faker-js/faker';

const validUserData = JSON.parse(JSON.stringify(validUser));
const commentText = faker.word.words({min:1, max:5});

describe("User Interactions with Articles", () => {

    beforeEach(() => {
        HomePage.open();
    });

    it("Filter articles by popular tags", () => {
        HomePage.getGlobalFeed().should('include.class', 'active');
        HomePage.getArticlesList().should('be.visible');

        HomePage.getPopularTagsList().each(($element) => {
            cy.wrap($element).click();
            cy.wait(2000);
            HomePage.getTagLink().should('include.text', $element.text());
            HomePage.getTagsLists().each(($tagList) => {
                expect($tagList.text()).contain($element.text());
            });
        });
    });

    it("Follow the article's author", () => {
        LoginPage.navigate();
        LoginPage.fillInputs(validUserData["email"], validUserData["password"]);
        LoginPage.login();
        
        cy.wait(1000);
        HomePage.goToGlobalFeed();
        HomePage.getGlobalFeed().should('include.class', 'active');
        HomePage.getArticlesList().should('be.visible');

        HomePage.getArticleAuthor().invoke('text').then(author => {
            HomePage.goToArticleAuthor();
            HomePage.getTitle().should('include', author);
            ProfilePage.getFollowButton().should('include.text', `Follow ${author}`);
            ProfilePage.follow();
            ProfilePage.getFollowButton().should('include.text', `Unfollow ${author}`);
        });

        ProfilePage.follow();
        cy.wait(2000);
    });

    it("Like the article", () => {
        LoginPage.navigate();
        LoginPage.fillInputs(validUserData["email"], validUserData["password"]);
        LoginPage.login();

        HomePage.goToGlobalFeed();
        HomePage.getGlobalFeed().should('include.class', 'active');
        HomePage.getArticlesList().should('be.visible');

        HomePage.getLikesNumber().invoke('text').then(likesBefore => {
            HomePage.likeLastArtcile();
            cy.wait(2000);
            HomePage.getLikesNumber().invoke('text').then(likesAfter => {
                expect(likesAfter - likesBefore).to.be.eq(1);
            });
        });
        HomePage.getLikeButton().should('not.include.class', 'outline');
       
        HomePage.likeLastArtcile();
        cy.wait(2000);
    });

    it("Comment on the article", () => {
        LoginPage.navigate();
        LoginPage.fillInputs(validUserData["email"], validUserData["password"]);
        LoginPage.login();
        
        cy.wait(1000);
        HomePage.goToGlobalFeed();
        HomePage.getGlobalFeed().should('include.class', 'active');
        HomePage.getArticlesList().should('be.visible');

        HomePage.getArticleAuthor().invoke('text').as('username');
        HomePage.getLastArticleTitle().invoke('text').as('title');
        HomePage.readMore();
        
        cy.get('@title').then((title) => {
            cy.get('@username').then((name) => {
              ArticlePage.getTitle().should('include', title);
              ArticlePage.getArticleTitle().should('have.text', title);
              ArticlePage.getUsername().should('have.text', name);
            });
        });

        ArticlePage.getCommentTextArea().should('be.visible');
        ArticlePage.getPostCommentButton().should('be.visible');

        ArticlePage.writeComment(commentText);
        ArticlePage.getCommentTextArea().should('have.value', commentText);
        ArticlePage.postComment();

        ArticlePage.getCommentText().should('have.text', commentText);
        ArticlePage.getCommentDate().invoke('text').then(dateText => {
            const today = new Date().toLocaleDateString();
            const date = new Date(Date.parse(dateText)).toLocaleDateString();
            expect(date).to.be.equal(today);
        });
        ArticlePage.deleteComment(); 
    });
})