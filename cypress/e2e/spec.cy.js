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

  it('Should render a newly added reservation', () => {
    cy.get('input[name="name"]').type('Josh');
    cy.get('input[name="name"]').should('have.value', 'Josh');

    cy.get('input[name="date"]').type('12/12');
    cy.get('input[name="date"]').should('have.value', '12/12');

    cy.get('input[name="time"]').type('6:30');
    cy.get('input[name="time"]').should('have.value', '6:30');

    cy.get('input[name="number"]').type('2');
    cy.get('input[name="number"]').should('have.value', '2');

    cy.get('.submit-btn').click()



    cy.get('.resy-container').children().last().within(() => {
      cy.get('li').eq(0).should('have.text', 'Josh')
      cy.get('li').eq(1).should('have.text', '12/12')
      cy.get('li').eq(2).should('have.text', '6:30 pm')
      cy.get('li').eq(3).should('have.text', 'Number of guests: 2')
    })
    
  });
});
