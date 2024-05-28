describe('Verificar cadastro com dados válidos e depois iremos realizar o cadastro novamente com o mesmo emais existente(sem adicionar como ADM)', () => {

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
    });
    it('Iremos realizar o processo de login de forma correta, colocando nome, email e senha corretos para depois se cadastrar no site (sem adicionar como ADM)' ,() => {

        cy.get('[data-testid="cadastrar"]').click()
        cy.location('pathname').should('equal','/cadastrarusuarios')
        cy.contains("Cadastro").should('be.visible')
        cy.get('[data-testid="nome"]').type('João Aurélio da Silva Paranhos')
        cy.get('[data-testid="email"]').type('joaoaurelio091@gmail.com')
        cy.get('[data-testid="password"]').type('Joaoaurelio10@')
        cy.get('[data-testid="cadastrar"]').click()
        
    });
    it('remos realizar todo o processo de cadastro, porém com um email já criado' ,() => {

        cy.get('[data-testid="cadastrar"]').click()
        cy.location('pathname').should('equal','/cadastrarusuarios')
        cy.contains("Cadastro").should('be.visible')
        cy.get('[data-testid="nome"]').type('João Aurélio da Silva Paranhos')
        cy.get('[data-testid="email"]').type('joaoaurelio091@gmail.com')
        cy.get('[data-testid="password"]').type('Joaoaurelio10@')
        cy.get('[data-testid="cadastrar"]').click()
        cy.contains('Este email já está sendo usado').should('be.visible')
    });
});