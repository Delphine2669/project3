const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true,
  videoCompression: true,

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    video: true,
    videoCompression: true,
  },
});
