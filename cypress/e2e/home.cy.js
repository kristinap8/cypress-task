import HomePage from '../pages/home.page';
import LoginPage from '../pages/login.page';
import validUser from "../fixtures/validUser.json";

const validUserData = JSON.parse(JSON.stringify(validUser));

describe("User Interactions with Articles", () => {

    beforeEach(() => {
        HomePage.open();
    });

    it("Filter articles by popular tags", () => {
        HomePage.getGlobalFeed().should('include.class', 'active');
        HomePage.getArticlesList().should('be.visible');

        HomePage.getPopularTagsList().each(($element) => {
            cy.wrap($element).click();
            cy.wait(1000);
            HomePage.getTagLink().should('include.text', $element.text());
            HomePage.getTagsLists().each(($tagList) => {
                expect($tagList.text()).contain($element.text());
            });
        });
    });

    it("Follow the article's author", () => {

    });

    it("Like the article", () => {

    });

    it("Comment on the article", () => {

    });
})