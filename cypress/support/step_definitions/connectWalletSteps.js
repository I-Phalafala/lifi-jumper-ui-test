import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../page_objects/homePage';
import ConnectWalletModal from '../page_objects/connectWalletModal';

const homePage = new HomePage();
const connectWalletModal = new ConnectWalletModal();


When('I click on the Connect Wallet button', () => {
  homePage.clickConnectWalletButton();
});

When('I select {string} from the wallet options', (walletName) => {
  connectWalletModal.selectWalletOption(walletName);
});


Then('I should see the MetaMask wallet connected', () => {
    walletName = "MetaMask";
  connectWalletModal.verifyWalletConnected(walletName);
});

Then('I should see the WalletConnect wallet connected', () => {
    walletName = "WalletConnect";
  connectWalletModal.verifyWalletConnected(walletName);
});

Then('I should see the Coinbase Wallet wallet connected', () => {
    walletName = "Coinbase Wallet";
  connectWalletModal.verifyWalletConnected(walletName);
});

Then('I should see the following wallets available:', (dataTable) => {
    const wallets = dataTable.raw().flat();
    connectWalletModal.verifyWalletsAvailable(wallets);
});