import Page from './page'

class LoginPage extends Page {

    get Email(){return $(".input_email")}
    get Password(){ return $("#password")}
    get SubmitBtn(){return $(".submit_btn")}

    open(url){
        super.open(url)
    }

    setEmail(email){
        this.Email.setValue(email)
    }

    setPassword(password){
        this.Password.setValue(password)
    }

    submit(){
        this.SubmitBtn.click()
    }



}

export default new LoginPage()

