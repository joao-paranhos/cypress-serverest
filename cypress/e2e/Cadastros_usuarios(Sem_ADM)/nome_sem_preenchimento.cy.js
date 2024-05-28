describe('Login com o nome em branco (sem adicionar como ADM)', () => {

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
    });
    it('Iremos realizar o processo de login, deixando o nome em branco, mas preenchendo o email e senha corretos para depois tentar se cadastrar no site', () => {


        cy.get('[data-testid="cadastrar"]').click()
        cy.location('pathname').should('equal','/cadastrarusuarios')
        cy.contains('Cadastro').should('be.visible')
        cy.get('[data-testid="email"]').type('joaoaurelio091@gmail.com');
        cy.get('[data-testid="password"]').type('Joaoaurelio10@');
        cy.get('[data-testid="cadastrar"]').click();
        cy.contains('Nome é obrigatório').should('be.visible')
        
    });
});