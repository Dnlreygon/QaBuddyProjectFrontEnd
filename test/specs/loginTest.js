import BaseTest from '../baseTest'
import LoginPage from '../../pages/loginPage'
import FinalPage from '../../pages/finalPage'
import {} from 'dotenv/config'

describe('login form', () => {
  const EMAIL = process.env.EMAIL
  const PASSWORD = process.env.PASSWORD
  const WRONGPASSWORD = process.env.WRONGPASSWORD
  const EMPTYPWD = process.env.EMPTYPWD
  const WRONGEMAIL = process.env.WRONGEMAIL

  beforeEach('Precondition', () => {
    BaseTest.loginOpenPage()
  })

  it('Positive TC - Login Successful', () => {
    BaseTest.loginFormFillValues(EMAIL, PASSWORD)
    BaseTest.loginSubmitValues()
    expect(FinalPage.homeLink).toBeDisplayed()
  })

  it('Negative TC - Invalid email', () => {
    BaseTest.loginFormFillValues(WRONGEMAIL, PASSWORD)
    BaseTest.loginSubmitValues()
    expect(LoginPage.InvalidEmailMsg).toBeDisplayed()
  })

  it('Negative TC - Wrong Pwd', () => {
    BaseTest.loginFormFillValues(EMAIL, WRONGPASSWORD)
    BaseTest.loginSubmitValues()
    expect(LoginPage.WrongPwdMsg).toBeDisplayed()
  })

  it('Negative TC - Empty Pwd', () => {
    BaseTest.loginFormFillValues(EMAIL, EMPTYPWD)
    BaseTest.loginSubmitValues()
    expect(LoginPage.EmptyPwdMsg).toBeDisplayed()
  })
})
