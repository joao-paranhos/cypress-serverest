import usuarios from '/cypress/fixtures/dados-usuarios/login.json'
import CadastroPage from '/cypress/pages/Cadastro'

const cadastropage = new CadastroPage()

describe('Verificar cadastro com dados válidos e depois iremos realizar o cadastro novamente com o mesmo emais existente(sem adicionar como ADM)', () => {
    


    beforeEach(() => {
    cadastropage.AcessandoSite()
    });
    it('Iremos realizar o processo de login de forma correta, colocando nome, email e senha corretos para depois se cadastrar no site (sem adicionar como ADM)' ,() => {

        cadastropage.PaginaCadastro()
        cadastropage.FazendoCadastro(usuarios.login_sucesso.nome,usuarios.login_sucesso.email,usuarios.login_sucesso.senha)
        cadastropage.CadastroCheck()});
   
});