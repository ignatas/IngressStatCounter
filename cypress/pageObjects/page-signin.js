class PageSignIn {

    setUsername(username) {
        cy.contains('Username')
            .type(username)
    }

    setPassword(password) {
        cy.contains('Password')
            .type(password)
    }

    clickSignUp() {
        cy.contains('Sign Up')
            .click()
    }

    clickLogInButton() {
        cy.contains('Log In')
            .click()
    }

} export default new PageSignIn()