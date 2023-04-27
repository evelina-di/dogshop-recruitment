import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import AppPage from '../AppPage'

Given('I open application', () => {
    AppPage.visit()
})

Then('I should see main page', () => {
    cy.get('#root').should('be.visible')
})
