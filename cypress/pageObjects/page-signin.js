class PageSignIn {

    setUsername(username) {
        cy.contains('Username')
            //.parent().get('input[type="text"]')
            .type(username)
    }

    setPassword(password) {
        cy.contains('Password')
            //.parent().get('input[type="text"]')
            .type(password)
    }

    clickSygnUp() {
        cy.contains('Sign Up')
            .click()
    }

    clickLogInButton() {
        cy.contains('Log In')
            .click()
    }

} export default new PageSignIn()