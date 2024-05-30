import usuarios from '/cypress/fixtures/dados-usuarios/login.json'
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
    cy.get(ListaSeletores.nomeSeletor).type(usuarios.Nome_com_1caractere.nome)
    cy.get(ListaSeletores.emailseletor).type(usuarios.Nome_com_1caractere.email)
    cy.get(ListaSeletores.senhaSeletor).type(usuarios.Nome_com_1caractere.senha)
    cy.get(ListaSeletores.cadastroButton).click()
    });
});