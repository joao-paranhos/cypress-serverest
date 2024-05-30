import usuarios from '/cypress/fixtures/dados-usuarios/login.json'
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
        cy.get(ListaSeletores.nomeSeletor).type(usuarios.Email_invalido.nome)
        cy.get(ListaSeletores.emailSeletor).type(usuarios.Email_invalido.email)
        cy.get(ListaSeletores.senhaSeletor).type(usuarios.Email_invalido.senha)
        cy.get(ListaSeletores.cadastroButton).click()
    });
});