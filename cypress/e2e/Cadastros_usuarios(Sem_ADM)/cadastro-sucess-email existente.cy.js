describe('Verificar cadastro com dados válidos e depois iremos realizar o cadastro novamente com o mesmo emais existente(sem adicionar como ADM)', () => {

   const  ListaSeletores = {
    
    paginaCadastroButton: '[data-testid="cadastrar"]',
    nomeSeletor: '[data-testid="nome"]',
    emailSeletor: '[data-testid="email"]',
    senhaSeletor: '[data-testid="password"]',
    cadastroButton: '[data-testid="cadastrar"]'}

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
    });
    it('Iremos realizar o processo de login de forma correta, colocando nome, email e senha corretos para depois se cadastrar no site (sem adicionar como ADM)' ,() => {

        cy.get(ListaSeletores.paginaCadastroButton).click()
        cy.location('pathname').should('equal','/cadastrarusuarios')
        cy.contains("Cadastro").should('be.visible')
        cy.get(ListaSeletores.nomeSeletor).type('João Aurélio da Silva Paranhos')
        cy.get(ListaSeletores.emailSeletor).type('joaoaurelio091@gmail.com')
        cy.get(ListaSeletores.senhaSeletor).type('Joaoaurelio10@')
        cy.get(ListaSeletores.cadastroButton).click()
        
    });
    it('remos realizar todo o processo de cadastro, porém com um email já criado' ,() => {

        cy.get(ListaSeletores.paginaCadastroButton).click()
        cy.location('pathname').should('equal','/cadastrarusuarios')
        cy.contains("Cadastro").should('be.visible')
        cy.get(ListaSeletores.nomeSeletor).type('João Aurélio da Silva Paranhos')
        cy.get(ListaSeletores.emailSeletor).type('joaoaurelio091@gmail.com')
        cy.get(ListaSeletores.senhaSeletor).type('Joaoaurelio10@')
        cy.get(ListaSeletores.cadastroButton).click()
        cy.contains('Este email já está sendo usado').should('be.visible')
    });
});