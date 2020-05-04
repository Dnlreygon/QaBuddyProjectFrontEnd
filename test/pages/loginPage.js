import Page from './page'
class LoginPage extends Page {
  get Email () { return $('.input_email') }
  get Password () { return $('#password') }
  get ErrorMsg () { return $('.error_msg span') }
  get SubmitBtn () { return $('.submit_btn') }

  open (url) { super.open('https://todoist.com/users/showLogin') }

  setEmail (email) { this.Email.setValue(email) }

  setPassword (password) { this.Password.setValue(password) }

  setErrorMsg () { this.ErrorMsg.toBeDisplayed() }

  submit () { this.SubmitBtn.click() }
}

export default new LoginPage()
