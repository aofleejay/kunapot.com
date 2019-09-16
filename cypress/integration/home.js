it('Home page is working.', () => {
  cy.visit('/')

  cy.contains('Home').should('to.visible')
})
