import PageSignIn from "../pageObjects/page-signin"
import Chance from 'chance'

describe ('Sign in', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('')
        cy.contains('Log in to your account')
    })

    it ('positive: kown agent logins with Username', () => {
        PageSignIn.setUsername('logintest')
        PageSignIn.setPassword('logintest')
        PageSignIn.clickLogInButton()
        cy.contains('logintest')
    })

    it ('negative: unkown agent logins', () => {
        PageSignIn.setUsername(chance.email())
        PageSignIn.setPassword(chance.hash())
        PageSignIn.clickLogInButton()
        cy.get('.Feedback_Message_Error').contains('Invalid username or password.')
    }) 
})