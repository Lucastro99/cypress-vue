describe('Home', function() {
    it('Sucesso ao Carregar', function() {
        cy.visit('http://localhost:8080');
        cy.get('h2').should('contain', 'Olá Lucas');
        cy.get('input.hello-world').type('Por hoje é isso pessoal!');
        cy.get('button.hello-world').click();
    });
});