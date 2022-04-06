describe( 'Search for books', () => {
    it('should return one book', () => {
    cy.visit('https://automationbookstore.dev/');
    cy.get('#searchBar').type('testing');
    expect(
        cy.get('li.ui-screen-hidden').
        its('length') ).to.not.equal(0);
    
    cy.get('li:not(.ui-screen-hidden)')
    .should('have.length', 1);
    });
});