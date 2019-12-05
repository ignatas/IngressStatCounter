class PageUpload {

    setStats(data) {
        cy.get('textarea[placeholder="Paste here stats from your scanner"]')
            .type(data)
    }

    setMessage(message) {
        cy.get('textarea[placeholder="Describe your upload (optional)"]')
            .type(message)
    }
    
    checkPublicUpload() {
        cy.get('input[type="checkbox"]')
            .click()
    }

    clickUploadButton() {
        cy.get('input[type="submit"]')
            .click()
    }

} export default new PageUpload()