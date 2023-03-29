class Regionalization {
  receive() {
    cy.contains('div[role="menuitem"] > p', "Receba em Casa").click();
  }

  fillCEP() {
    cy.get('input[type="search"]').type("05690000")
    
    cy.contains('button[type="submit"]', 'Buscar').click()
  }
}

export default new Regionalization();