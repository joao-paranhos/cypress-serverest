class CadastroPage{

    ListaSeletores(){
    const Seletores = {
        paginaCadastroButton: '[data-testid="cadastrar"]',
        nomeSeletor: '[data-testid="nome"]',
        emailSeletor: '[data-testid="email"]',
        senhaSeletor: '[data-testid="password"]',
        cadastroButton: '[data-testid="cadastrar"]'}
    
    return Seletores}


    AcessandoSite()
    
        {cy.visit('/login')}

    PaginaCadastro(){

        cy.get(this.ListaSeletores().paginaCadastroButton).click()
        cy.location('pathname').should('equal','/cadastrarusuarios')
        cy.contains("Cadastro").should('be.visible')}

    FazendoCadastro(nome,email,senha){
        cy.get(this.ListaSeletores().nomeSeletor).type(nome)
        cy.get(this.ListaSeletores().emailSeletor).type(email)
        cy.get(this.ListaSeletores().senhaSeletor).type(senha)
        cy.get(this.ListaSeletores().cadastroButton).click()}

    CadastroCheck(){

        cy.contains('Cadastro realizado com sucesso').should('be.visible')
    }

    ValidarEmailExistente(){

        cy.contains('Este email já está sendo usado').should('be.visible')
    }

    ValidarEmailSemPreechimento(){

        cy.contains('Email é obrigatório').should('be.visible')
    }
    FazendoCadastroSemEmail(nome,senha){
        cy.get(this.ListaSeletores().nomeSeletor).type(nome)
        cy.get(this.ListaSeletores().senhaSeletor).type(senha)
        cy.get(this.ListaSeletores().cadastroButton).click()

    }
    FazendoCadastroSemNome(email,senha){
        cy.get(this.ListaSeletores().emailSeletor).type(email)
        cy.get(this.ListaSeletores().senhaSeletor).type(senha)
        cy.get(this.ListaSeletores().cadastroButton).click()
    }

    ValidarNomeSemPreechimento(){

        cy.contains('Nome é obrigatório').should('be.visible')

    }
    FazendoCadastroSemSenha(nome,email){

        cy.get(this.ListaSeletores().nomeSeletor).type(nome)
        cy.get(this.ListaSeletores().emailSeletor).type(email)
        cy.get(this.ListaSeletores().cadastroButton).click()}

    ValidarSenhaSemPreechimento(){

        cy.contains('Password é obrigatório').should('be.visible')
    }
    }
    


export default CadastroPage