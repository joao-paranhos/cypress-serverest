import usuarios from '/cypress/fixtures/dados-usuarios/login.json'
import CadastroPage from '../../pages/Cadastro'

const cadastropage = new CadastroPage()

describe('Login sem preenchimento do email (sem adicionar como ADM)', () => {
    beforeEach(() => {
        
        cadastropage.AcessandoSite()
    });
    it('Iremos realizar o processo de login, preenchendo nome e senha mas deixando o email em branco para depois tentar se cadastrar no site', () => {

        cadastropage.PaginaCadastro()
        cadastropage.FazendoCadastroSemEmail(usuarios.Email_Sem_Preenchimento.nome,usuarios.Email_Sem_Preenchimento.senha)
        cadastropage.ValidarEmailSemPreechimento()
        
    });  
        
    });