import Page from './page'

class LoginPage extends Page {

    get Email(){return $(".input_email")}
    get Contraseña(){ return $("#password")}
    get SubmitBtn(){return $(".submit_btn")}

    open(){
        super.open('https://todoist.com/es')
    }

    submit(){
        this.SubmitBtn.click()
    }



}

export default new LoginPage()

