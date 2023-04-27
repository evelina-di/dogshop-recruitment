import { And, Then } from "cypress-cucumber-preprocessor/steps";

Then("The list of dogs should be visible", () => {
	const dogsList = '[data-cy="dogs-list"]';

	cy.get(dogsList).should("be.visible");
});

And(
	"The table should have columns Breed, Nick, Price, Image and Actions",
	() => {
		const breedHeader = '[data-cy="breed-header"]';
		const nickHeader = '[data-cy="nick-header"]';
		const priceHeader = '[data-cy="price-header"]';
		const imageHeader = '[data-cy="image-header"]';
		const actionsHeader = '[data-cy="action-header"]';

		cy.get(breedHeader).should("be.visible");
		cy.get(breedHeader).should("contain", "Breed");

		cy.get(nickHeader).should("be.visible");
		cy.get(nickHeader).should("contain", "Nick");

		cy.get(priceHeader).should("be.visible");
		cy.get(priceHeader).should("contain", "Price");

		cy.get(imageHeader).should("be.visible");
		cy.get(imageHeader).should("contain", "Image");

		cy.get(actionsHeader).should("be.visible");
		cy.get(actionsHeader).should("contain", "Actions");
	}
);

And("Every record on the list should have Edit and Delete button", () => {
	const dogsRecords = '[data-cy="dogs-list"] tbody tr';
	const editButtonsAll = '[data-cy="edit-btn"]';
	const deleteButtonsAll = '[data-cy="delete-btn"]';

	cy.get(dogsRecords)
		.its("length")
		.then((listLength) => {
			cy.get(editButtonsAll).its("length").should("eq", listLength);
			cy.get(deleteButtonsAll).its("length").should("eq", listLength);
		});
});
