const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/Features/**/*.feature",
    setupNodeEvents: async (on, config) => {
      const options = {
        stepDefinitions: "cypress/e2e/StepDefinitions/**/*.{js,ts}",
      };

      // ✅ Mirror it into env so it's visible at runtime
      config.env.stepDefinitions = options.stepDefinitions;

      // 1) add cucumber preprocessor plugin (it will add event handlers)
      await addCucumberPreprocessorPlugin(on, config, options);

      // 2) setup esbuild bundler with the cucumber esbuild plugin
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
  defaultCommandTimeout: 15000,
});
