import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../page_objects/homePage';

const homePage = new HomePage();

Given('I open the home page', () => {
  cy.visit('/');
});

Then('I should see the home page title', () => {
  cy.get('title').should('contain', 'Jumper');
});

Then('I should see the {string} button', (buttonText) => {
  homePage.verifyConnectWalletButtonVisible(buttonText);
});

Then('I should see the {string} menu', (menuText) => {
  homePage.verifyExchangeMenuVisible(menuText);
});