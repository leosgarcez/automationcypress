
Cypress.Commands.add('login', () => {
    cy.get('#email').type('leosgarcez@gmail.com')
        .get('#senha').type('123124')
        .get('.btn').click()
        .get('.body-index').contains('Bem vindo, Leonardo da Silva!').should('be.visible')
})