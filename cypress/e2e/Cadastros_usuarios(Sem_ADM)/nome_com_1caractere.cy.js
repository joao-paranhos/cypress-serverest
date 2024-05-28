describe('Login com usando somente 1 caractere no nome (sem adicionar como ADM)', () => {

 beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
    });
    it('Iremos realizar o processo de login, preenchendo nome o nome com somente 1 caractere e depois preenchendo um email e senha valido', () => {

    cy.get('[data-testid="cadastrar"]').click()
    cy.location('pathname').should('equal','/cadastrarusuarios')
    cy.contains('Cadastro').should('be.visible')
    cy.get('[data-testid="nome"]').type('J')
    cy.get('[data-testid="email"]').type('joaoaurelio0911@gmail.com')
    cy.get('[data-testid="password"]').type('Joaoaurelio10@')
    cy.get('[data-testid="cadastrar"]').click()
    });
});