/// <reference types="cypress" />

context('Realizar Movimentações', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Criar uma movimentação de receita', () => {
        cy.login();
        cy.get(':nth-child(3) > a').click()
          .get('#data_transacao').type('19/10/2022')
          .get('#data_pagamento').type('19/10/2022')
          .get('#descricao').type('Salário Outubro')
          .get('#interessado').type('Leonardo')
          .get('#valor').type('2000')
          .get('#conta').select('Conta Movimentação 1')
          .get('#status_pendente').click()
          .get('.btn').click()
          .get('.body-index').contains('Movimentação adicionada com sucesso!').should('be.visible')
    })

    it('Criar uma movimentação de despesa', () => {
        cy.login();
        cy.get(':nth-child(3) > a').click()
          .get('#tipo').select('Despesa')
          .get('#data_transacao').type('19/10/2022')
          .get('#data_pagamento').type('19/10/2022')
          .get('#descricao').type('Energia')
          .get('#interessado').type('Leonardo')
          .get('#valor').type('1000')
          .get('#conta').select('Conta Movimentação 1')
          .get('#status_pago').click()
          .get('.btn').click()
          .get('.body-index').contains('Movimentação adicionada com sucesso!').should('be.visible')
    })

    it('Validar campos obrigatórios na Movimentação', () => {
        cy.login();
        cy.get(':nth-child(3) > a').click()
          .get('#tipo').select('Despesa')
          .get('#descricao').type('Plano Saúde')
          .get('#interessado').type('Leonardo')
          .get('#valor').type('500')
          .get('#conta').select('Conta Movimentação 1')
          .get('#status_pago').click()
          .get('.btn').click()
          .get('.body-index').contains('Data da Movimentação é obrigatório').should('be.visible')
          .get('.body-index').contains('Data do pagamento é obrigatório').should('be.visible')
    })

    it('Validar campos obrigatórios na Situação Pendente', () => {
        cy.login();
        cy.get(':nth-child(3) > a').click()
          .get('#tipo').select('Despesa')
          .get('#descricao').type('Lazer')
          .get('#interessado').type('Leonardo')
          .get('#valor').type('100')
          .get('#conta').select('Conta Movimentação 1')
          .get('#status_pendente').click()
          .get('.btn').click()
          .get('.body-index').contains('Data da Movimentação é obrigatório').should('be.visible')
          .get('.body-index').contains('Data do pagamento é obrigatório').should('be.visible')
    })

    it('Validar campo Valor ser numérico', () => {
        cy.login();
        cy.get(':nth-child(3) > a').click()
          .get('#tipo').select('Despesa')
          .get('#data_transacao').type('19/10/2022')
          .get('#data_pagamento').type('19/10/2022')
          .get('#descricao').type('Carro')
          .get('#interessado').type('Leonardo')
          .get('#valor').type('abc!@#')
          .get('#conta').select('Conta Movimentação 1')
          .get('#status_pendente').click()
          .get('.btn').click()
          .get('.body-index').contains('Valor deve ser um número').should('be.visible')
    })

    it('Validar a criação de uma Movimentação com Data Futura', () => {
        cy.login();
        cy.get(':nth-child(3) > a').click()
          .get('#tipo').select('Despesa')
          .get('#data_transacao').type('30/12/2022')
          .get('#data_pagamento').type('19/10/2022')
          .get('#descricao').type('Escola')
          .get('#interessado').type('Leonardo')
          .get('#valor').type('100')
          .get('#conta').select('Conta Movimentação 1')
          .get('#status_pendente').click()
          .get('.btn').click()
          .get('.body-index').contains('Data da Movimentação deve ser menor ou igual à data atual').should('be.visible')
    })

    it('Validar formato Data em Movimentações', () => {
        cy.login();
        cy.get(':nth-child(3) > a').click()
          .get('#tipo').select('Despesa')
          .get('#data_transacao').type('2022/10/12')
          .get('#data_pagamento').type('19/10/2022')
          .get('#descricao').type('Escola')
          .get('#interessado').type('Leonardo')
          .get('#valor').type('100')
          .get('#conta').select('Conta Movimentação 1')
          .get('#status_pendente').click()
          .get('.btn').click()
          .get('.body-index').contains('Data da Movimentação inválida (DD/MM/YYYY)').should('be.visible')
    })
})
