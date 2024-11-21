class HomePage {

  // locators
    connectWalletButtonId = 'connect-wallet-button';

  // actions  
    visit() {
      cy.visit('/');
      // wait for the page to load
      cy.get('body').should('be.visible');

    }

    getTitle() {
      return cy.get('title');
    }

    clickConnectWalletButton() {
      return cy.get(`#${this.connectWalletButtonId}`).click();
    }

    verifyConnectWalletButtonVisible(buttonText) {
      cy.contains(buttonText).should('be.visible');
    }

    verifyExchangeMenuVisible(menuText) {
      cy.contains(menuText).should('be.visible');
    }

  }
  
  export default HomePage;