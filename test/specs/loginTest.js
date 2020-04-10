import LoginPage from '../../pages/loginPage'
import InitPage from '../../pages/initPage'
import FinalPage from '../../pages/finalPage'
import {} from 'dotenv/config'

describe( 'login form' , () => {
    beforeEach('Precondition',() => {
        LoginPage.open('https://todoist.com/users/showLogin')
        //InitPage.submit();
    })

    it('Caso de prueba postivo' , () => {
        LoginPage.setEmail(process.env.EMAIL)
        LoginPage.setPassword(process.env.PASSWORD)
        LoginPage.submit()

        expect(FinalPage.homeLink).toBeDisplayed()
    })
})