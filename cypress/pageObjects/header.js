class Header {

    clickDropdown() {
        cy.get('div[class="dropdown-header select"]')
            .click()
    }

    clickSettings() {
        cy.get('a[title="Settings"]')
            .click()
    }

    clickLogOut() {
        cy.get('a[title="Logout"]')
            .click()
    }

    clickUploadStats() {
        cy.contains('Upload Stats')
            .click()
    }

    clicFeed() {
        cy.get('#wt315_OutSystemsUIWeb_wt2_block_wtHeader_wtCenter_wt536_RichWidgets_wt12_block_wtMenuItem_wt8')
            .click()
    }

    clickMedals() {
        cy.contains('Medals')
            .click()
        cy.wait(500)
        cy.contains('Medal Details')
            .click()
    }

} export default new Header()