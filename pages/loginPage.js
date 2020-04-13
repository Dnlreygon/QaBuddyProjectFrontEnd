import Page from './page'

class LoginPage extends Page {

    get Email(){return $(".input_email")}
    get Password(){ return $("#password")}
    get InvalidEmailMsg() {return $("//span[text()='Dirección de email no válida.']")}
    get EmptyPwdMsg() {return $("//span[text()='Contraseña en blanco.']")}
    get WrongPwdMsg() {return $("//span[text()='Email o contraseña incorrectos']")}
    get SubmitBtn(){return $(".submit_btn")}

    open(url){
        super.open('https://todoist.com/users/showLogin')
    }

    setEmail(email){
        this.Email.setValue(email)
    }

    setPassword(password){
        this.Password.setValue(password)
    }

    setInvalidEmailMsg(){
        this.InvalidEmailMsg.toBeDisplayed()
    }

    setEmptyPwdMsg(){
        this.EmptyPwdMsg.toBeDisplayed()
    }

    setWrongPwdMsg(){
        this.WrongPwdMsg.toBeDisplayed()
    }

    submit(){
        this.SubmitBtn.click()
    }



}

export default new LoginPage()

