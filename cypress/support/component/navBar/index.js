class navBar {
  clickCarrefourCard() {
    // cy.get('a[href$="source=carrefour"]').invoke('attr','target', '_blank').click();
    cy.get('a[href$="source=carrefour"]').click();
  }
}

export default new navBar();
