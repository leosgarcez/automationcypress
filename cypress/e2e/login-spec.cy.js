/// <reference types="cypress" />

context('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should i login with my credentials', () => {
        cy.get('#email').type('leosgarcez@gmail.com')
          .get('#senha').type('123124')
          .get('.btn').click()
          .get('.body-index').contains('Bem vindo, Leonardo da Silva!').should('be.visible')
    })

    it('Should i try login with wrong credentials', () => {
        cy.get('#email').type('aaaa@gmail.com')
          .get('#senha').type('123124')
          .get('.btn').click()
          .get('.body-index').contains('Problemas com o login do usuário').should('be.visible')
    })

    it('Should i try login only with Email', () => {
        cy.get('#email').type('leosgarcez@gmail.com')
          .get('.btn').click()
          .get('.body-index').contains('Senha é um campo obrigatório').should('be.visible')
    })

    it('Should i try login only with Password', () => {
        cy.get('#senha').type('123124')
          .get('.btn').click()
          .get('.body-index').contains('Email é um campo obrigatório').should('be.visible')
    })

})