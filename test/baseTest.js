import LoginPage from '../pages/loginPage'
import {} from  'dotenv/config'
class BaseTest{

    precondition(){
        LoginPage.open('https://todoist.com/users/showLogin')

    }
}

export default new BaseTest()