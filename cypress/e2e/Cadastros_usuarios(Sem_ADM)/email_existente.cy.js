import usuarios from '/cypress/fixtures/dados-usuarios/login.json'
import CadastroPage from '../../pages/Cadastro';

const cadastropage = new CadastroPage() 

describe ('Iremos realizar um cadastro de um usuario que já tenha o e-mail criado',()=>{

    beforeEach('',()=>{

        cadastropage.AcessandoSite()
    })

it('iremos realizar todo o processo de cadastro, porém com um email já criado' ,() => {

        cadastropage.PaginaCadastro()
        cadastropage.FazendoCadastro(usuarios.Email_Existente.nome,usuarios.Email_Existente.email,usuarios.Email_Existente.senha)
        cadastropage.ValidarEmailExistente()
    });






})