//import BaseTest from '../baseTest'
import LoginPage from '../../pages/loginPage'
import FinalPage from '../../pages/finalPage'
import {} from 'dotenv/config'

describe( 'login form' , () => {
    beforeEach('Precondition',() => {
        LoginPage.open('https://todoist.com/users/showLogin')
    })

    it('Positive TC' , () => {
        LoginPage.setEmail(process.env.EMAIL)
        LoginPage.setPassword(process.env.PASSWORD)
        LoginPage.submit()
        expect(FinalPage.homeLink).toBeDisplayed()
    })

    it('Negative TC - Wrong email' , () => {
        LoginPage.setEmail(process.env.WRONGEMAIL)
        LoginPage.setPassword(process.env.PASSWORD)
        LoginPage.submit()
        expect(LoginPage.InvalidEmailMsg).toBeDisplayed()
    })

    it('Negative TC - Wrong Pwd' , () => {
        LoginPage.setEmail(process.env.EMAIL)
        LoginPage.setPassword(process.env.WRONGPASSWORD)
        LoginPage.submit()
        expect(LoginPage.WrongPwdMsg).toBeDisplayed()
    })

    it('Negative TC - Empty Pwd' , () => {
        LoginPage.setEmail(process.env.EMAIL)
        LoginPage.setPassword(process.env.EMPTYPWD)
        LoginPage.submit()
        expect(LoginPage.EmptyPwdMsg).toBeDisplayed()
    })

})