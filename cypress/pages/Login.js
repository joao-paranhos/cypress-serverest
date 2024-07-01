class LoginPage
    {   
        SeletoresLista(){
            const seletores =
            {CampoEmail: "[name='email']",
             CampoSenha: "[name='password']",
             BotaoLogin: "[data-testid='entrar']",} 

        return seletores
        }

        AcessandoSite(){
            cy.visit('/login')
        }
        FazerLogin(email,senha)
        {cy.get(this.SeletoresLista().CampoEmail).type(email),
         cy.get(this.SeletoresLista().CampoSenha).type(senha),
         cy.get(this.SeletoresLista().BotaoLogin).click()}

    }   

    export default LoginPage