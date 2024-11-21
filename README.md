# Cypress UI Test Automation Suite

This project is a UI test automation suite for [Jumper Exchange](https://jumper.exchange) using Cypress, Gherkin feature files, and the Page Object Model (POM) approach. The project also includes HTML reporting using the `cypress-mochawesome-reporter` plugin.

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/I-Phalafala/lifi-jumper-ui-test/
   cd <repository-directory>
2. Install packages
    npm install
3. Run Tests
    npm run cypress:run

## HTML Reporting
This project uses the cypress-mochawesome-reporter plugin to generate HTML reports. After running the tests, you can find the HTML report in the cypress/reports directory.

Viewing the Report
Open the HTML file in the cypress/reports directory in a web browser to view the test results.

## Writing Tests
Feature Files
Feature files are written in Gherkin syntax and located in the cypress/e2e/features directory. Each feature file contains scenarios that describe the behavior of the application.
Step Definitions
Step definitions are located in the cypress/e2e/step_definitions directory. Each step definition file corresponds to a feature file and contains the implementation of the steps.
Page Objects
Page objects are located in the cypress/support/page_objects directory. Each page object file contains methods for interacting with the elements on a specific page.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.
