import PageSignIn from "../pageObjects/page-signin"
import PageSignUp from "../pageObjects/page-signup"
import Chance from 'chance'

let agent = {
    username: chance.first() + chance.last(),
    password: chance.hash(),
    nickname: chance.word({ length: 15 }),
    email: chance.email({ domain: 'yopmail.com' })
}

let emailValidations = [
    "mail@mail@yopmail.com",
    "mail@yopmail..com",
    "mail"
]

describe('Sign up', () => {

    beforeEach(() => {
        cy.clearCookies()
        cy.visit('')
        cy.contains('Log in to your account')
        PageSignIn.clickSignUp()
    })

    it('positive: random registration', () => {
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

    emailValidations.forEach(element => {
        it('negative: invalid email = ' + element, () => {
            PageSignUp.newUsername(chance.word({ length: 15 }))
            PageSignUp.newPassword(agent.password)
            PageSignUp.newConfirmPassword(agent.password)
            PageSignUp.newAgentName(chance.word({ length: 15 }))
            PageSignUp.newEmail(element)
            PageSignUp.checkConfirmation()
            PageSignUp.clickRegisterButton()
            cy.contains('Email is not valid')
        })
    })

})