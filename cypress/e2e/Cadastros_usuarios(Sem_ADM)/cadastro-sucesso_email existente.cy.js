import usuarios from '/cypress/fixtures/dados-usuarios/login.json'

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
    it.skip('Iremos realizar o processo de login de forma correta, colocando nome, email e senha corretos para depois se cadastrar no site (sem adicionar como ADM)' ,() => {

        cy.get(ListaSeletores.paginaCadastroButton).click()
        cy.location('pathname').should('equal','/cadastrarusuarios')
        cy.contains("Cadastro").should('be.visible')
        cy.get(ListaSeletores.nomeSeletor).type(usuarios.login_sucesso.nome)
        cy.get(ListaSeletores.emailSeletor).type(usuarios.login_sucesso.email)
        cy.get(ListaSeletores.senhaSeletor).type(usuarios.login_sucesso.senha)
        cy.get(ListaSeletores.cadastroButton).click()
        
    });
    it('remos realizar todo o processo de cadastro, porém com um email já criado' ,() => {

        cy.get(ListaSeletores.paginaCadastroButton).click()
        cy.location('pathname').should('equal','/cadastrarusuarios')
        cy.contains("Cadastro").should('be.visible')
        cy.get(ListaSeletores.nomeSeletor).type(usuarios.Email_Existente.nome)
        cy.get(ListaSeletores.emailSeletor).type(usuarios.Email_Existente.email)
        cy.get(ListaSeletores.senhaSeletor).type(usuarios.Email_Existente.senha)
        cy.get(ListaSeletores.cadastroButton).click()
        cy.contains('Este email já está sendo usado').should('be.visible')
    });
});