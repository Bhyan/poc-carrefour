import navBar from "../../support/component/navBar";
import regionalization from "../../support/component/regionalization";
import home from "../../support/page/home"


describe("Cartão Carrefour", function () {
    context("Quando o usuário clicar no link do Cartão Carrefour", function () {
        it("Então a página Cartão Carrefour é carregada", function () {
            home.go();
            regionalization.receive();
            regionalization.fillCEP();
            navBar.clickCarrefourCard();


        })


    })
})