import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import AppPage from "../AppPage";
import RandomGenerator from "../../../support/utils/random_generator";
import Form from "../Form";

const breed = RandomGenerator.Breed();
const nick = RandomGenerator.String();
const price = RandomGenerator.StringNumber();
const imageUrl = RandomGenerator.GetRandomDogUrl(breed);

Given("I access the application", () => {
	AppPage.visit();
});

When("I fill in the Bread input", () => {
	Form.fillInput(Form.breedInput, breed);
});

And("I fill in the Nick input", () => {
	Form.fillInput(Form.nickInput, nick);
});

And("I fill in the Price input", () => {
	Form.fillInput(Form.priceInput, price);
});

And("I fill in the Image input", () => {
	Form.fillInput(Form.imageInput, imageUrl);
});

And("I click the Add button", () => {
	Form.clickAdd();
});

Then("The new dog record should be visible at the end of the list", () => {
	cy.get("tbody")
		.find("tr")
		.then((tableRows) => {
			const listLength = Cypress.$(tableRows).length;
			const lastRecordsBreed =
				"[data-cy=dog-" + listLength + "] > td:nth-child(1)";
			const lastRecordsNick =
				"[data-cy=dog-" + listLength + "] > td:nth-child(2)";
			const lastRecordsPrice =
				"[data-cy=dog-" + listLength + "] > td:nth-child(3)";
			const lastRecordsUrl =
				"[data-cy=dog-" + listLength + "] > td:nth-child(4) > img";

			cy.get(lastRecordsBreed).invoke("text").should("eq", breed);
			cy.get(lastRecordsNick).invoke("text").should("eq", nick);
			cy.get(lastRecordsPrice).invoke("text").should("eq", price);
			cy.get(lastRecordsUrl).invoke("attr", "src").should("eq", imageUrl);
		});
});

And("The add form should be empty", () => {
	Form.emptyForm();
});

Then(
	"I should receive the validation informing I should provide data to save",
	() => {
		Form.errorMessage(
			"Please provide a correct value for Breed, Nick and Price fields."
		);
	}
);
