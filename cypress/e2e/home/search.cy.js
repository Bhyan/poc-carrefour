import searchFactory from "../../factories/search";
import regionalization from "../../support/component/regionalization";
import search from "../../support/component/search";
import home from "../../support/page/home";

describe("Busca", function () {
  context("Quando o usuário busca por um produto válido", function () {
    it("Então o site deve mostrar uma lista de produtos", function () {
      const sr = searchFactory.search();

      home.go();
      regionalization.receive();
      regionalization.fillCEP();

      search.fillForm(sr);
      search.verifySearch(sr);
    });
  });
});
