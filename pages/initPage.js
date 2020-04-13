import Page from './page'

class InitPage extends Page {

    get IniciarSesionBtn(){ return $("//nav/div/ul/li/a[text()='Iniciar sesión']")}

    open() {
        super.open('login')
    }

    submit() {
        this.IniciarSesionBtn.click()
    }
}

export default new InitPage()