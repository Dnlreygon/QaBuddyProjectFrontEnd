import Page from './page'

class FinalPage extends Page {

    get homeLink() {return $('#filter_inbox > .item_content')}
    get addTask() {return $(".agenda_add_task .icon_add")}
    get textBoxTask(){return $('.richtextinput')}
    get addTaskBtn(){return $('.item_editor_submit')}

    clickAddTask(){
        this.addTask.click()
    }

    setTextBoxTask(task){
        this.textBoxTask.click()
        this.textBoxTask.setValue(task)
    }

    clickAddTaskBtn(){
        this.addTaskBtn.click()
    }

    isTaskVisible(taskName){
        let task = $(".task_item_content_text*=" + taskName)
        return task.toBeDisplayed()
    }
}

export default new FinalPage()