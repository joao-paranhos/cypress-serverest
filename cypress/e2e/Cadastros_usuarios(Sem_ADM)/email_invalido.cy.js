import usuarios from '/cypress/fixtures/dados-usuarios/login.json'
import CadastroPage from '../../pages/Cadastro'

const cadastropage = new CadastroPage()

describe('Email invalido (sem ADM)', () => {

    beforeEach(() => {
        cadastropage.AcessandoSite()
    });
    it('Iremos realizar o preenchimento do e-mail com uma formatação invalida para verificar se o site acusa um erro de formatação', () => {
        cadastropage.PaginaCadastro()
        cadastropage.FazendoCadastro(usuarios.Email_invalido.nome,usuarios.Email_invalido.email,usuarios.Email_invalido.senha)
    });
});