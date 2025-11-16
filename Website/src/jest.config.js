module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  verbose: true,
  clearMocks: true
};

/*
testEnvironment: Run tests in a Node.js-like environment since the code targets the backend.
testMatch: Look for test files ending in .test.js within any __tests__ directory, 
           or .integration.test.js files within any IntegrationTests directory.
verbose: Show individual test results for easier debugging.
clearMocks: Automatically reset mocked calls and instances between tests.
*/
