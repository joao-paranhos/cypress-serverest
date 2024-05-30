import usuarios from '/cypress/fixtures/dados-usuarios/login.json'
describe('Login com a senha em branco (sem adicionar como ADM)', () => {


    const ListaSeletores = {

        paginaCadastroButton: '[data-testid="cadastrar"]',
        nomeSeletor: '[data-testid="nome"]',
        emailSeletor: '[data-testid="email"]',
        cadastroButton: '[data-testid="cadastrar"]'

    }

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
    });
    it('Iremos realizar o processo de login, preenchendo nome e email mas deixando senha em branco para depois tentar se cadastrar no site', () => {

        cy.get(ListaSeletores.paginaCadastroButton).click()
        cy.location('pathname').should('equal','/cadastrarusuarios')
        cy.get('.font-robot').contains('Cadastro')
        cy.get(ListaSeletores.nomeSeletor).type(usuarios.Senha_Sem_Preenchimento.nome)
        cy.get(ListaSeletores.emailSeletor).type(usuarios.Senha_Sem_Preenchimento.email)
        cy.get(ListaSeletores.cadastroButton).click()
        cy.contains('Password é obrigatório').should('be.visible')
        
    });
        
 });