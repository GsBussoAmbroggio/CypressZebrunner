const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },
  env: {
    url : "https://store.steampowered.com",
    loginUrl: "https://store.steampowered.com/login/",
    userName: "the4fantastiquest",
    passWord: "testautomation{enter}"
  },


  reporter: "@zebrunner/javascript-agent-cypress",
  "reporterOptions": {
    "reportingServerHostname": "https://solvdinternal.zebrunner.com",
    "reportingServerAccessToken": "q7PWsMETNkedQTnrLOnQ3bfqp7iQz66wxBPzwIKFnIHSkY9bpL",
    "reportingProjectKey": "ALPHA",
    "reportingRunEnvironment": "STAGE",
    "reportingRunBuild": "1.0-alpha",
    "reportingRunDisplayName": "My regression suite",
    "reportingRunLocale": "en_US",
    "reportingCiRunId": "46190073-55db-4411-ac42-fd42b7c96958"
  }

});
