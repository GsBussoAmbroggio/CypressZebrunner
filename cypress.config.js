const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    suite: {
      baseUrl: "https://store.steampowered.com",
      viewportWidth: 1366,
      viewportHeight: 768,
      integrationFolder: "cypress/e2e",
      testFiles: [
        "cypress/e2e/tests/HomePageTests.cy.js",
        "cypress/e2e/tests/LoginPageTests.cy.js",
        "cypress/e2e/tests/StorePageTests.cy.js"
      ],
      video: true,
      screenshotsFolder: "cypress/screenshots",
      chromeWebSecurity: false
    }
  },
  env: {
    url : "https://store.steampowered.com",
    loginUrl: "https://store.steampowered.com/login/",
    userName: "the4fantastiquest",
    passWord: "testautomation{enter}"
  },
  reporter: "@zebrunner/javascript-agent-cypress",
  reporterOptions: {
    reportingServerHostname: "https://solvdinternal.zebrunner.com",
    reportingServerAccessToken: "q7PWsMETNkedQTnrLOnQ3bfqp7iQz66wxBPzwIKFnIHSkY9bpL",
    reportingProjectKey: "ALPHA",
    reportingRunEnvironment: "STAGE",
    reportingRunBuild: "1.0-alpha",
    reportingRunDisplayName: "Steam Web Demo",
    reportingRunLocale: "en_US",
    reportingCiRunId: "46190073-55db-4411-ac42-fd42b7c96958",
    reportingEnabled: true
  }
});
