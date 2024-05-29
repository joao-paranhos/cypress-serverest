describe('Login com usando somente 1 caractere no nome (sem adicionar como ADM)', () => {


    const ListaSeletores = {
        
        paginaCadastroButton: '[data-testid="cadastrar"]',
        nomeSeletor: '[data-testid="nome"]',
        emailseletor:'[data-testid="email"]',
        senhaSeletor: '[data-testid="password"]',
        cadastroButton: '[data-testid="cadastrar"]'}

 beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
    });
    it('Iremos realizar o processo de login, preenchendo nome o nome com somente 1 caractere e depois preenchendo um email e senha valido', () => {

    cy.get(ListaSeletores.paginaCadastroButton).click()
    cy.location('pathname').should('equal','/cadastrarusuarios')
    cy.contains('Cadastro').should('be.visible')
    cy.get(ListaSeletores.nomeSeletor).type('J')
    cy.get(ListaSeletores.emailseletor).type('joaoaurelio0911@gmail.com')
    cy.get(ListaSeletores.senhaSeletor).type('Joaoaurelio10@')
    cy.get(ListaSeletores.cadastroButton).click()
    });
});