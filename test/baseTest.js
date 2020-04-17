import LoginPage from './pages/loginPage'
import {} from 'dotenv/config'

class BaseTest {
  loginFormFillValues (email, password) {
    LoginPage.setEmail(email)
    LoginPage.setPassword(password)
  }

  loginOpenPage () {
    LoginPage.open('https://todoist.com/users/showLogin')
  }

  loginSubmitValues () {
    LoginPage.submit()
  }
}

export default new BaseTest()
