import LoginPage from '../../pages/loginPage'
import InitPage from '../../pages/initPage'
import FinalPage from '../../pages/finalPage'
const username = 'dnlreygon34@gmail.com'
const password = 'contraseña123'

describe( 'login form' , () => {
    before(async function(){
        LoginPage.open()
        await InitPage.submit();
    })

    instanceof('Caso de prueba postivo' , () => {
        LoginPage.Email.setValue(username)
        LoginPage.Contraseña.setValue(password)
        LoginPage.Submit()

        expect( FinalPage.homeLink.getText()).to.equal('Bandeja de entrada')
    })
})