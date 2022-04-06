describe("API", () => {

    it('should trigger an alert with a message', () => {
    cy.visit('https://tenor.com/search/thank-you-gifs'); 
    cy.request(`https://api.tenor.com/v1/search?q=thank%20you&limit=1`)
        .then( (response) => {
            const imgurl = response.body.results[0].media[0].tinygif.url; 
            cy.get('.GifList .Gif img').should('have.attr', 'src')
            .should('include', imgurl); 
        });
    });
});