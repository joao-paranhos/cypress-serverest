describe('Login sem preenchimento do email (sem adicionar como ADM)', () => {

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
    });
    it('Iremos realizar o processo de login, preenchendo nome e senha mas deixando o email em branco para depois tentar se cadastrar no site', () => {

        cy.get('[data-testid="cadastrar"]').click()
        cy.location('pathname').should('equal','/cadastrarusuarios')
        cy.contains('Cadastro').should('be.visible')
        cy.get('[data-testid="nome"]').type('João Aurélio da Silva Paranhos')
        cy.get('[data-testid="password"]').type('Joaoaurelio10@')
        cy.get('[data-testid="cadastrar"]').click()
        cy.contains('Email é obrigatório').should('be.visible')
    });  
        
    });