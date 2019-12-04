class PageSignUp {

    newUsername(username) {
        cy.contains('Username (4-50 chars)')
            .type(username)
    }

    newPassword(password) {
        cy.contains('Password (8-150 chars)')
            .type(password)
    }

    newConfirmPassword(password) {
        cy.contains('Confirm password')
            .type(password)
    }

    newAgentName(agentname) {
        cy.contains('Agent Name (4-15 chars)')
            .type(agentname)
    }

    newEmail(email) {
        cy.contains('Email')
            .type(email)
    }

    checkConfirmation() {
        cy.get('input[type="checkbox"]')
            .click()
    }

    clickRegisterButton() {
        cy.wait(1000)
        cy.get('input[value="Register"]')
            .click()
    }

} export default new PageSignUp()