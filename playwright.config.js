// @ts-check
const { devices } = require('@playwright/test');

const config = {
 // testDir: 'D:/STUDY MATERIAL/Playwright Automation/tests/UIHomePage.spec.js./tests',
  
 // testDir: 'D:/STUDY MATERIAL/Playwright Automation/tests',

 testDir: './tests',


  // Max time to run a Test
timeout: 80 * 1000,

expect: {
  timeout : 5000 
 },
  reporter: 'html',
  
  use: {
 // Test codes
 browserName : 'chromium', 
 headless:false

  },
 
 };
 module.exports = config;

