class PageSettings {

    clickSaveButton() {
        cy.contains('Save')
            .click()
    }

    clickCancelButton() {
        cy.contains('Cancel')
            .click()
    }

    clickDeleteButton() {
        cy.contains('Save')
            .click()
    }

} export default new PageSettings()