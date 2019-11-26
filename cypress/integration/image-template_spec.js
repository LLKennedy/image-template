describe('Demo HTML page', () => {
    it('Confirms that image-template is rendered', () => {
        cy.visit('cypress/testpages/demo.html');
        cy.screenshot();
        cy.get('image-template');
    })
})