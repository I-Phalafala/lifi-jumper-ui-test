Feature: Exchange

  Scenario: Verify Exchange Menu Loads
    Given I open the home page
    Then I should see the "Exchange" menu

Scenario: Request a Token Exchange Quote With Jupiter Supported Tokens
    Given I open the home page
    When I select "SOL" as the source token
    And I select "CHEEMS" as the destination token
    And I enter "100" as the amount to exchange
    Then I should see a Quote for the exchange
    And Jupiter should be the exchange provider


  Scenario: Perform a Token Exchange
    Given I open the home page
    When I select "SOL" as the source token
    And I select "CHEEMS" as the destination token
    And I enter "100" as the amount to exchange
    And I click on the "Exchange" button
    Then I should see a confirmation message