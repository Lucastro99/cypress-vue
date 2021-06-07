// https://docs.cypress.io/api/introduction/api.html

describe('Primeiro Teste', () => {
    it('Acessa o URL da raiz do aplicativo', () => {
        cy.visit('/')
        cy.contains('h1', 'Welcome to Your Vue.js App')
        cy.contains('h2', 'Olá Lucas')
    })
})