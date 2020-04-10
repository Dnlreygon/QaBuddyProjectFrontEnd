import Page from './page'

class FinalPage extends Page {

    get homeLink() {return $('#agenda_view header h1')}

}

export default new FinalPage()