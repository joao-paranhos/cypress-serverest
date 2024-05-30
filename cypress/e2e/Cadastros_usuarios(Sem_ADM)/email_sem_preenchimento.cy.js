import usuarios from '/cypress/fixtures/dados-usuarios/login.json'
describe('Login sem preenchimento do email (sem adicionar como ADM)', () => {


    const ListaSeletores = {

        PaginaCadastroButton: '[data-testid="cadastrar"]',
        nomeSeletor: '[data-testid="nome"]',
        senhaSeletor: '[data-testid="password"]',
        cadastroButton: '[data-testid="cadastrar"]'}

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
    });
    it('Iremos realizar o processo de login, preenchendo nome e senha mas deixando o email em branco para depois tentar se cadastrar no site', () => {

        cy.get(ListaSeletores.PaginaCadastroButton).click()
        cy.location('pathname').should('equal','/cadastrarusuarios')
        cy.contains('Cadastro').should('be.visible')
        cy.get(ListaSeletores.nomeSeletor).type(usuarios.Email_Sem_Preenchimento.nome)
        cy.get(ListaSeletores.senhaSeletor).type(usuarios.Email_Sem_Preenchimento.senha)
        cy.get(ListaSeletores.cadastroButton).click()
        cy.contains('Email é obrigatório').should('be.visible')
    });  
        
    });