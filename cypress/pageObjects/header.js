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
        cy.contains('a[title="Logout"]')
            .click()
    }

    clickUploadStats() {
        cy.contains('Upload Stats')
            .click()
    }

    clickMedals() {
        cy.contains('Medals')
            .click()
    }

} export default new Header()