const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://mercado.carrefour.com.br/",
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
