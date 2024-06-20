import usuarios from '/cypress/fixtures/dados-usuarios/login.json';
import CadastroPage from '../../pages/Cadastro'

const cadastropage = new CadastroPage()
describe('Login com o nome em branco (sem adicionar como ADM)', () => {



    beforeEach(() => {
        cadastropage.AcessandoSite()
    });
    it('Iremos realizar o processo de login, deixando o nome em branco, mas preenchendo o email e senha corretos para depois tentar se cadastrar no site', () => {

        cadastropage.PaginaCadastro()
        cadastropage.FazendoCadastroSemNome(usuarios.Nome_Sem_Preenchimento.email,usuarios.Nome_Sem_Preenchimento.senha)
        cadastropage.ValidarNomeSemPreechimento()

        
    });
});