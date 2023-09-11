describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: 'reservations.json'
    }).as('fetchCall');
    cy.visit('http://localhost:3000/');
  });

  it('Should render the home page with header, form, and cards', () => {
    cy.wait('@fetchCall');
    cy.contains('Turing Cafe Reservations');

    cy.get('.res-form').children().should('have.length', 5);

    cy.get('.resy-container').children().should('have.length', 3);

    cy.get('.resy-container')
      .children()
      .first()
      .children('ul')
      .children()
      .should('have.length', 4);

    cy.get('.resy-container')
      .children()
      .first()
      .children('ul')
      .children()
      .should('have.length', 4);
  });
});
