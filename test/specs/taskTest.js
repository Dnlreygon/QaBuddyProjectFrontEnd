import BaseTest from '../baseTest'
import FinalPage from '../../pages/finalPage'
import {} from 'dotenv/config'

describe('Adding Tasks', () => {
  const EMAIL = process.env.EMAIL
  const PASSWORD = process.env.PASSWORD
  const TASK = process.env.TASK

  beforeEach('Log in', () => {
    BaseTest.loginOpenPage()
    BaseTest.loginFormFillValues(EMAIL, PASSWORD)
    BaseTest.loginSubmitValues()
  })

  it('Adding the first task', async () => {
    FinalPage.clickAddTask()
    await FinalPage.setTextBoxTask(TASK)
    FinalPage.clickAddTaskBtn()
    expect(FinalPage.isTaskVisible(TASK)).toBeDisplayed()
  })
})
