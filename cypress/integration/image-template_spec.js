describe('Demo HTML page', () => {
    it('Confirms that image-template is rendered', () => {
        cy.visit('demo.html')
        cy.get('image-template')
    })
})