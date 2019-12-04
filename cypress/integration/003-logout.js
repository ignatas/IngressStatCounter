import PageSignIn from "../pageObjects/page-signin"
import PageSignUp from "../pageObjects/page-signup"
import Header from "../pageObjects/header"
import PageSettings from "../pageObjects/page-settings"
import Chance from 'chance'
import header from "../pageObjects/header"

let agent = {
    username: chance.first() + chance.last(),
    password: chance.hash(),
    nickname: chance.word({ length: 15 }),
    email: chance.email({ domain: 'yopmail.com' })
}

describe('Sign up -> Sign in -> Log out', () => {
    
    it('positive: registration', () => {
        cy.visit('')
        cy.contains('Log in to your account')
        PageSignIn.clickSignUp()
        cy.log('[username = ](http://i.com)' + agent.username)
        cy.log('[password = ](http://i.com)' + agent.password)
        cy.log('[nick = ](http://i.com)' + agent.nickname)
        cy.log('[email = ](http://i.com)' + agent.email)
        PageSignUp.newUsername(agent.username)
        PageSignUp.newPassword(agent.password)
        PageSignUp.newConfirmPassword(agent.password)
        PageSignUp.newAgentName(agent.nickname)
        PageSignUp.newEmail(agent.email)
        PageSignUp.checkConfirmation()
        PageSignUp.clickRegisterButton()
        cy.contains('This Username, Agent Name or Email already exist but not confirmed.')
    })

    it('positive: login', () => {
        cy.visit('')
        cy.contains('Log in to your account')
        PageSignIn.setUsername(agent.username)
        PageSignIn.setPassword(agent.password)
        PageSignIn.clickLogInButton()
        cy.contains(agent.nickname)
    })
    
    it('positive: logout', () => {
        Header.clickDropdown()
        Header.clickLogOut()
    })

})