import usuarios from '/cypress/fixtures/dados-usuarios/login.json';
describe('Login com o nome em branco (sem adicionar como ADM)', () => {


    const ListaSeletores = {
        Paginacadastrobutton: '[data-testid="cadastrar"]',
        emailSeletor: '[data-testid="email"]',
        senhaSeletor: '[data-testid="password"]',
        cadastroButton: '[data-testid="cadastrar"]'
    }

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
    });
    it('Iremos realizar o processo de login, deixando o nome em branco, mas preenchendo o email e senha corretos para depois tentar se cadastrar no site', () => {


        cy.get(ListaSeletores.Paginacadastrobutton).click()
        cy.location('pathname').should('equal','/cadastrarusuarios')
        cy.contains('Cadastro').should('be.visible')
        cy.get(ListaSeletores.emailSeletor).type(usuarios.Nome_Sem_Preenchimento.email);
        cy.get(ListaSeletores.senhaSeletor).type(usuarios.Nome_Sem_Preenchimento.email);
        cy.get(ListaSeletores.cadastroButton).click();
        cy.contains('Nome é obrigatório').should('be.visible')
        
    });
});