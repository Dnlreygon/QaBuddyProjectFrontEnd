import BaseTest from '../baseTest'
import DashboardPage from '../pages/dashboardPage'
import {} from 'dotenv/config'
import Assert from 'assert'

describe('Adding Tasks', () => {
  const EMAIL = process.env.EMAIL
  const PASSWORD = process.env.PASSWORD
  const TASK = process.env.TASK

  beforeEach('Log in', () => {
    BaseTest.loginOpenPage()
    BaseTest.loginFormFillValues(EMAIL, PASSWORD)
    BaseTest.loginSubmitValues()
    DashboardPage.clickTimezoneBtn()
  })

  it('Adding the first task', () => {
    const nameTask = TASK + '_' + Math.floor(Date.now() / 10000)
    DashboardPage.clickAddTask()
    DashboardPage.clickTextBoxTask()
    DashboardPage.setTextBoxTask(nameTask)
    DashboardPage.clickAddTaskBtn()
    browser.pause(2000)
    Assert.ok(DashboardPage.isTaskCreated(nameTask))
  })

  it('Adding 10 tasks', () => {
    for (let index = 0; index < 10; index++) {
      const nameTask = TASK + '_' + Math.floor(Date.now() / 1000)
      DashboardPage.clickAddTask()
      DashboardPage.clickTextBoxTask()
      DashboardPage.setTextBoxTask(nameTask)
      DashboardPage.clickAddTaskBtn()
      Assert.ok(DashboardPage.isTaskCreated(nameTask))
    }
  })
})
