import usuarios from '/cypress/fixtures/dados-usuarios/login.json'
import LoginPage from '/cypress/pages/Login'

const loginpage = new LoginPage()

describe ('Login com sucesso',()=>{


    beforeEach(() => {
        loginpage.AcessandoSite()
    });

    it('',()=>{
        loginpage.FazerLogin(usuarios.login_sucesso.email,usuarios.login_sucesso.senha)
        cy.location('pathname').should('equal','/home')})
})