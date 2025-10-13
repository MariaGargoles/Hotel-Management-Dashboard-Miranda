import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://dashboard-miranda-mgl.s3-website.eu-west-3.amazonaws.com",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
