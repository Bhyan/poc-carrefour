class navBar {
    clickCarrefourCard (){
        cy.get('a[href$="source=carrefour"]').click();
    }


}

export default new navBar();