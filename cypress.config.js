const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "th92pg",
  reporter: "junit",
  reporterOptions:{
    mochaFile: "cypress/results/junit-results-{hash}.xml",
    toConsole: true
  },
  e2e: {
    //"defaultCommandTimeout":30000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});