class Home {
  go() {
    cy.visit("/", { failOnStatusCode: false});
  }
}

export default new Home();
