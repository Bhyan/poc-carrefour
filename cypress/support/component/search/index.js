class Search {
  fillForm(sr) {
    cy.get('.hidden.justify-center [data-testid="store-search-input"]').type(
      sr.term
    );

    cy.get('.hidden.justify-center [data-testid="store-button"]').click();
  }

  verifySearch(sr) {
    cy.wait(5000)
    cy.get('.text-monet-400', { timeout: 100000 }).eq(0).contains(sr.term).should('be.visible')
  }
}

export default new Search();
