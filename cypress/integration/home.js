it('Home page is working.', () => {
  cy.visit('/')

  cy.contains("Books I've read").should('to.visible')
  cy.contains("Blogs I've written").should('to.visible')
  cy.contains("Games I've played").should('to.visible')
})
