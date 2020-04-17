import Page from './page'

class FinalPage extends Page {
  get homeLink () { return $('#filter_inbox > .item_content') }
  get addTaskLink () { return $('.agenda_add_task a') }
  get textBoxTask () { return $('.public-DraftStyleDefault-block') }
  get addTaskBtn () { return $('.item_editor_submit') }

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

  async isTaskVisible (taskName) {
    const tasks = $('.task_item_content_text')
    for (let index = 0; index < tasks.length; index++) {
      if (tasks[index].getText() === taskName) {
        return true
      }
    }
    return false
  }
}
export default new FinalPage()
