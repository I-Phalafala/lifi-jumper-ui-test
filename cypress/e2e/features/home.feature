Feature: Home Page

Scenario: Ensure the home page loads
  Given I open the home page
  Then I should see the home page title
  And I should see the "Connect" button
  And I should see the "Exchange" menu