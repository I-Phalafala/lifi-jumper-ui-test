Feature: Connect Wallet

Scenario: Verify available wallets
    Given I open the home page
    When I click on the Connect Wallet button
    Then I should see the following wallets available:
      | MetaMask      |
      | WalletConnect |
      | Coinbase      |

Scenario: Connect MetaMask Wallet
  Given I open the home page
  When I click on the Connect Wallet button
  And I select "MetaMask" from the wallet options
  Then I should see the MetaMask wallet connected

Scenario: Connect WalletConnect Wallet
    Given I open the home page
    When I click on the Connect Wallet button
    And I select "WalletConnect" from the wallet options
    Then I should see the WalletConnect wallet connected

Scenario: Connect Coinbase Wallet Wallet
    Given I open the home page
    When I click on the Connect Wallet button
    And I select "Coinbase Wallet" from the wallet options
    Then I should see the Coinbase Wallet wallet connected

