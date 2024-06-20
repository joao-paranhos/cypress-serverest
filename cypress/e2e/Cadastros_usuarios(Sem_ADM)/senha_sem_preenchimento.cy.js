import usuarios from '/cypress/fixtures/dados-usuarios/login.json'
import CadastroPage from '../../pages/Cadastro'

const cadastropage = new CadastroPage()
describe('Login com a senha em branco (sem adicionar como ADM)', () => {

    beforeEach(() => {
        cadastropage.AcessandoSite()
    });
    it('Iremos realizar o processo de login, preenchendo nome e email mas deixando senha em branco para depois tentar se cadastrar no site', () => {

        cadastropage.PaginaCadastro()
        cadastropage.FazendoCadastroSemSenha(usuarios.Senha_Sem_Preenchimento.nome,usuarios.Senha_Sem_Preenchimento.email)
        cadastropage.ValidarSenhaSemPreechimento()
        
    });
        
 });