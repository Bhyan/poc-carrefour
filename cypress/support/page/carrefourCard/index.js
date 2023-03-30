class carrefourCard {
    verifyTitle(){
        cy.get('p[class="carrefourbr-virtual-card-0-x-titleInitialData tc tl-l f8 mt0 mb2"]')
        .should('have.text', "Cartão Carrefour");
    }

}

export default new carrefourCard();
