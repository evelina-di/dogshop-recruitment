import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

const firstDogRecordButtonSection = '[data-cy="dog-1"] td:nth-child(5)';
const firstDogRecord = '[data-cy="dog-1"]';

When("I click delete button next to the dogs record", () => {
	const deleteButton = '[data-cy="delete-btn"]';

	cy.get(firstDogRecordButtonSection).children(deleteButton).click();
});

Then("This dog record should dissapear from the list", () => {
	cy.get(firstDogRecord).should("not.exist");
});

When("I remove all dogs records available on the list", () => {
	const deleteButton = '[data-cy="delete-btn"]';

	cy.get(deleteButton).click({ multiple: true });
});

Then(
	"I should be presented with information that there is no data to display",
	() => {
		const messageArea = "tbody > tr > td";

		cy.get(messageArea).should("contain", "No data");
	}
);
