export default class page{
    consructor() {
        this.title = 'My Page'
    }

    open(path) {
        browser.url(path)
    }
}