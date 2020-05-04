import Page from './page'

class DashboardPage extends Page {
  get homeLink () { return $('#filter_inbox > .item_content') }
  get addTaskLink () { return $('.agenda_add_task a') }
  get textBoxTask () { return $('.public-DraftEditor-content') }
  get addTaskBtn () { return $('.item_editor_submit') }
  get changeTimezoneBtn () { return $('//div[@class="timezone_alert"]/a[2]') }

  async clickAddTask () {
    await this.addTaskLink.click()
  }

  async setTextBoxTask (task) {
    await this.textBoxTask.setValue(task)
  }

  async clickTextBoxTask () {
    await this.textBoxTask.click()
  }

  async clickAddTaskBtn () {
    await this.addTaskBtn.click()
  }

  async clickTimezoneBtn () {
    this.changeTimezoneBtn.click()
  }

  async isTimezoneAlertDisplayed () {
    return this.changeTimezoneBtn.isDisplayed()
  }

  async isTaskCreated (taskText) {
    const taskList = $('.ul_today>li.task_item div.task_item_content_text')
    for (let index = 0; index < taskList.length; index++) {
      if (taskList[index].getText() === taskText) {
        return true
      }
    }
    return false
  }
}
export default new DashboardPage()
