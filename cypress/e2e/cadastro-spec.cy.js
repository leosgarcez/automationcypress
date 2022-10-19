/// <reference types="cypress" />

context('Registration', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should I make a new register', () => {
        cy.contains('Novo usuário').click()
          .get('#nome').type('Teste Cypress')
          .get('#email').type('meuemail4@mail.com.br')
          .get('#senha').type('123124')
          .get('.btn').click()
          .get('.body-index').should('be.visible')
    })
 
    it('If I make a register only with Name', () => {
        cy.contains('Novo usuário').click()
          .get('#nome').type('Teste Cypress')
          .get('.btn').click()
          .get('.body-index').contains('Email é um campo obrigatório').should('be.visible')
          .get('.body-index').contains('Senha é um campo obrigatório').should('be.visible')
    })

    it('If I make a register only with Email', () => {
        cy.contains('Novo usuário').click()
          .get('#email').type('a@a.com.br')
          .get('.btn').click()
          .get('.body-index').contains('Nome é um campo obrigatório').should('be.visible')
          .get('.body-index').contains('Senha é um campo obrigatório').should('be.visible')
    })

    it('If I make a register only with password', () => {
        cy.contains('Novo usuário').click()
          .get('#senha').type('123124')
          .get('.btn').click()
          .get('.body-index').contains('Nome é um campo obrigatório').should('be.visible')
          .get('.body-index').contains('Email é um campo obrigatório').should('be.visible')
    })
})
    