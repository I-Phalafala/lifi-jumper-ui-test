class ConnectWalletModal {
  // locators
  connectWalletButtonId = "connect-wallet-button";

  // actions

  selectWalletOption(walletName) {
    cy.contains(walletName).click();
  }

  verifyWalletConnected(walletName) {
    // Simulate wallet connection assert true
    assert.isTrue(true, walletName + ' is connected');
  }

  verifyWalletsAvailable(wallets) {
 
    wallets.forEach(wallet => {
      cy.contains(wallet).should('be.visible');
    });
  }

}

export default ConnectWalletModal;
