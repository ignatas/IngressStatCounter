Cypress.Commands.add('loadValidations', () => {
    return cy.fixture('validations.json').then((validations) => { return validations })
})