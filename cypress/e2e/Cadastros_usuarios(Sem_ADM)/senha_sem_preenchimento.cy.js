describe('Login com a senha em branco (sem adicionar como ADM)', () => {

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
    });
    it('Iremos realizar o processo de login, preenchendo nome e email mas deixando senha em branco para depois tentar se cadastrar no site', () => {

        cy.get('[data-testid="cadastrar"]').click()
        cy.location('pathname').should('equal','/cadastrarusuarios')
        cy.get('.font-robot').contains('Cadastro')
        cy.get('[data-testid="nome"]').type('João Aurélio da Silva Paranhos')
        cy.get('[data-testid="email"]').type('joaoaurelio091@gmail.com')
        cy.get('[data-testid="cadastrar"]').click()
        cy.contains('Password é obrigatório').should('be.visible')
        
    });
        
 });