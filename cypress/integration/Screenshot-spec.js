describe("Screenshot", () => {
    it('should take a screenshot', () => {
    cy.visit('https://kitchen.applitools.com/ingredients/table'); cy.get('#column-button-name').click();
    cy.screenshot('images/test'); 
    });
});
    
    