import BaseTest from '../baseTest'
import FinalPage from '../pages/finalPage'
import {} from 'dotenv/config'

describe('Adding Tasks', () => {
  const EMAIL = process.env.EMAIL
  const PASSWORD = process.env.PASSWORD

  beforeEach('Log in', () => {
    BaseTest.loginOpenPage()
    BaseTest.loginFormFillValues(EMAIL, PASSWORD)
    BaseTest.loginSubmitValues()
  })

  it('Adding the first task', () => {
    FinalPage.clickAddTask()
    FinalPage.clickTextBoxTask()
    FinalPage.setTextBoxTask('testing task')
    browser.debug()
    FinalPage.clickAddTaskBtn()
    expect(FinalPage.isTaskVisible('testing task'))
  })
})
