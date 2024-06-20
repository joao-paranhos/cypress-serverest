import usuarios from '/cypress/fixtures/dados-usuarios/login.json'
import CadastroPage from '../../pages/Cadastro'

const cadastropage = new CadastroPage()
describe('Login com usando somente 1 caractere no nome (sem adicionar como ADM)', () => {


 beforeEach(() => {
        cadastropage.AcessandoSite()
    });
    it('Iremos realizar o processo de login, preenchendo nome o nome com somente 1 caractere e depois preenchendo um email e senha valido', () => {

    cadastropage.PaginaCadastro()
    cadastropage.FazendoCadastro(usuarios.Nome_com_1caractere.nome,usuarios.Nome_com_1caractere.email,usuarios.Nome_com_1caractere.senha)
    cadastropage.CadastroCheck()

    });
});