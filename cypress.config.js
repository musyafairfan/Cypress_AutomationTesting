const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1500,
  viewportHeight: 1000,
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
  },
})