/// <reference types="cypress" />

context('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should i logoff my session', () => {
        cy.get('#email').type('leosgarcez@gmail.com')
          .get('#senha').type('123124')
          .get('.btn').click()
          .get('.body-index').contains('Sair').click()
    })
})