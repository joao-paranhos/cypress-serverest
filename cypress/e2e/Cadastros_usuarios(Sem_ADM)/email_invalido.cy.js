describe('Email invalido (sem ADM)', () => {

    const ListaSeletores = {

        paginaCadastroButton: '[data-testid="cadastrar"]',
        nomeSeletor: '[data-testid="nome"]',
        emailSeletor: '[data-testid="email"]',
        senhaSeletor: '[data-testid="password"]',
        cadastroButton: '[data-testid="cadastrar"]'}

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/home')
    });
    it('Iremos realizar o preenchimento do e-mail com uma formatação invalida para verificar se o site acusa um erro de formatação', () => {
        cy.get(ListaSeletores.paginaCadastroButton).click()
        cy.location('pathname').should('equal','/cadastrarusuarios')
        cy.contains('Cadastro').should('be.visible')
        cy.get(ListaSeletores.nomeSeletor).type('João Aurélio da Silva Paranhos')
        cy.get(ListaSeletores.emailSeletor).type('joaoaurelio091gmail.com')
        cy.get(ListaSeletores.senhaSeletor).type('Joaoaurelio10@')
        cy.get(ListaSeletores.cadastroButton).click()
    });
});