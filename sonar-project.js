const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://localhost:9000',
  options : {
  'sonar.sources': '.',
  'sonar.inclusions' : 'src/**', // Entry point of your code
  'sonar.exclusions' :
    'src/**/*.test.*, src/reportWebVitals.ts, src/index.tsx, src/setupTests.ts src/testUtils.tsx',
   // Ignore test files
  }
}, () => {});
