import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import RandomGenerator from "../../../support/utils/random_generator";
import Form from "../Form";

const firstDogsBreed = '[data-cy="dog-1"] td:nth-child(1)';
const firstDogsNick = '[data-cy="dog-1"] td:nth-child(2)';
const firstDogsPrice = '[data-cy="dog-1"] td:nth-child(3)';
const firstDogsPircute = '[data-cy="dog-1"] td:nth-child(4) img';

const breedNew = RandomGenerator.Breed();
const nickNew = RandomGenerator.String();
const priceNew = RandomGenerator.StringNumber();
const imageUrlNew = RandomGenerator.GetRandomDogUrl(breedNew);

And("There are dogs on the list", () => {
	const dogsList = '[data-cy="dogs-list"] tbody tr';

	cy.get(dogsList).its("length").should("not.eq", 0);
});

When("I click edit button next to the dog record from the list", () => {
	const firstDogEditBtn = '[data-cy="dog-1"] [data-cy="edit-btn"]';

	cy.get(firstDogEditBtn).click();
});

Then("The edit form is visible", () => {
	Form.containsHeader("Edit");
});

And("All inputs are filled with correct data", () => {
	cy.get(firstDogsBreed)
		.invoke("text")
		.then((breed) => {
			cy.get(Form.breedInput).should("have.value", breed);
		});

	cy.get(firstDogsNick)
		.invoke("text")
		.then((nick) => {
			cy.get(Form.nickInput).should("have.value", nick);
		});

	cy.get(firstDogsPrice)
		.invoke("text")
		.then((price) => {
			cy.get(Form.priceInput).should("have.value", price);
		});

	cy.get(firstDogsPircute)
		.invoke("attr", "src")
		.then((imageUrl) => {
			cy.get(Form.imageInput).should("have.value", imageUrl);
		});
});

And("Buttons Uptade and Cancel are visible", () => {
	cy.get(Form.updateBtn).should("be.visible");
	cy.get(Form.cancelBtn).should("be.visible");
});

When("I change value in the Bread, Nick, Price and Image input", () => {
	cy.get(Form.breedInput).clear().type(breedNew);
	cy.get(Form.nickInput).clear().type(nickNew);
	cy.get(Form.priceInput).clear().type(priceNew);
	cy.get(Form.imageInput).clear().type(imageUrlNew);
});

And("I click Update button", () => {
	cy.get(Form.updateBtn).click();
});

Then("Values for this record should be updated on the list", () => {
	cy.get(firstDogsBreed).invoke("text").should("eq", breedNew);
	cy.get(firstDogsNick).invoke("text").should("eq", nickNew);
	cy.get(firstDogsPrice).invoke("text").should("eq", priceNew);
	cy.get(firstDogsPircute).invoke("attr", "src").should("eq", imageUrlNew);
});

And("Add form should appear insted of Edit form", () => {
	Form.containsHeader("Add");
	cy.get(Form.addButton).should("be.visible");
});

When("I remove data from Breed input", () => {
	cy.get(Form.breedInput).clear();
	cy.get(Form.nickInput).clear();
	cy.get(Form.priceInput).clear();
	cy.get(Form.imageInput).clear();
});

Then(
	"I should receive validation with information to provide necessary data",
	() => {
		Form.errorMessage(
			"Please, provide a correct value for Breed, Nick and Price fields."
		);
	}
);
