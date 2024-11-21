class ExchangePage {
  // locators
  selectTokenDropdown = "div.mui-11qjisw";
  showNetworksButton = ".mui-snx5lx";
  amountInput = "input.mui-2duac4";
  provider = ".mui-q2c72z";

  selectSourceToken(token, network) {
    cy.contains("From").should('be.visible').click(); // Click on the dropdown to open the list of tokens

    cy.get(this.showNetworksButton).click();
    cy.contains("div", network).click();

    cy.contains("div", token).should('be.visible').click();
  }

  selectDestinationToken(token, network) {
    cy.contains("To").click(); // Click on the dropdown to open the list of tokens

    cy.get(this.showNetworksButton).click();
    cy.contains("div", network).click();

    // wait for the tokens to load, did not allow any alternative
    cy.wait(1000);
    cy.contains("div", token).click();
  }

  enterAmount(amount) {
    cy.get(this.amountInput).type(amount);
  }

  clickButton(buttonText) {
    cy.contains("button", buttonText).click();
  }

  verifyConfirmationMessage() {
    cy.contains("div", "Exchange successful").should("be.visible");
  }
  verifyQuoteVisible() {
    cy.contains("div", "Receive").should("be.visible");
  }
  verifyExchangeProvider() {
    cy.get(this.provider, { timeout: 20000 }).should('exist').and('be.visible');
  }

}

export default ExchangePage;
