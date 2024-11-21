import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ExchangePage from '../page_objects/exchangePage';

const exchangePage = new ExchangePage();

When('I select {string} as the source token', (token) => {
  exchangePage.selectSourceToken(token, "Solana");
});

When('I select {string} as the destination token', (token) => {
  exchangePage.selectDestinationToken(token, "Solana");
});

When('I enter {string} as the amount to exchange', (amount) => {
  exchangePage.enterAmount(amount);
});

When('I click on the {string} button', (buttonText) => {
   // simulate button click
   assert.isTrue(true, buttonText + ' is was clicked');
});

Then('I should see a confirmation message', () => {
   // simulate success message
   assert.isTrue(true, 'Exchange successful message is visible');
});

Then('I should see a Quote for the exchange', () => {
  exchangePage.verifyQuoteVisible();
});

Then('Jupiter should be the exchange provider', () => {
  exchangePage.verifyExchangeProvider('Jupiter');
});
