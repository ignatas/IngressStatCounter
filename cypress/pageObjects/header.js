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
        cy.contains('Log Out')
            .click()
    }

} export default new Header()