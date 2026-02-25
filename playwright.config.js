// playwright.config.js (CommonJS)
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  reporter: 'html',

  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
      },
    },
  ],
});
