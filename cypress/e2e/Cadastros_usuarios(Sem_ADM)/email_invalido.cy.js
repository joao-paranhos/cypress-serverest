describe('Email invalido (sem ADM)', () => {
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/home')
    });
    it('Iremos realizar o preenchimento do e-mail com uma formatação invalida para verificar se o site acusa um erro de formatação', () => {
        cy.get('[data-testid="cadastrar"]').click()
        cy.location('pathname').should('equal','/cadastrarusuarios')
        cy.contains('Cadastro').should('be.visible')
        cy.get('[data-testid="nome"]').type('João Aurélio da Silva Paranhos')
        cy.get('[data-testid="email"]').type('joaoaurelio091gmail.com')
        cy.get('[data-testid="password"]').type('Joaoaurelio10@')
        cy.get('[data-testid="cadastrar"]').click()
    });
});