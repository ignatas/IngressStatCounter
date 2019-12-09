class PageFeed {

    getPublicFeedMessage(username, text) {
        cy.contains(username).parent().parent().parent()
            .contains(text)
    }

    clickPrivateFeed() {
        cy.contains('My Feed')
            .click()
    }

} export default new PageFeed()