import Page from './page'

class InitPage extends Page {

    get IniciarSesionBtn(){ return $("#Iniciar sesión")}

    open() {
        super.open('login')
    }

    submit() {
        this.IniciarSesionBtn.click()
    }
}

export default new InitPage()