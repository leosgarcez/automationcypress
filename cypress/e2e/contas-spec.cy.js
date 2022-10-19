/// <reference types="cypress" />

context('Movimentar Contas', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should I create a new Conta', () => {
        cy.login();
        cy.get('.dropdown-toggle').click()
          .get('.body-index').contains('Adicionar').click()
          .get('#nome').type('Conta Nova') // ALTERAR TYPE ANTES DE ENVIAR CÓDIGO
          .get('.btn').click()
          .get('.body-index').contains('Conta adicionada com sucesso!').should('be.visible')
    })

    it('Should I create a Conta with same name', () => {
        cy.login();
        cy.get('.dropdown-toggle').click()
          .get('.body-index').contains('Adicionar').click()
          .get('#nome').type('Conta Nova')
          .get('.btn').click()
          .get('.body-index').contains('Já existe uma conta com esse nome!').should('be.visible')
    })
})
