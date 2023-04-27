class Form {
	static breedInput = 'input[name="breed"]';
	static nickInput = 'input[name="nick"]';
	static priceInput = 'input[name="price"]';
	static imageInput = 'input[name="url"]';
    static addButton = '[data-cy="add-button"]';
	static updateBtn = '[data-cy="update-button"]';
	static cancelBtn = '[data-cy="cancel-button"]';

	static fillInput(input, value) {
		cy.get(input).type(value);
	}

	static emptyForm() {
		cy.get(this.breedInput).should("be.empty");
		cy.get(this.nickInput).should("be.empty");
		cy.get(this.priceInput).should("be.empty");
		cy.get(this.imageInput).should("be.empty");
	}

    static clickAdd() {
        cy.get(this.addButton).click();
    }

	static errorMessage(message) {
		const errorMessage = "div.error";

		cy.get(errorMessage).invoke("text").should("equal", message);
	}

	static containsHeader(value) {
		cy.get("h2").contains(value);
	}
}

export default Form;
