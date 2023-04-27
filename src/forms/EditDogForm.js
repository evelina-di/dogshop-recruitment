import React, { useState, useEffect } from "react";

const EditDogForm = (props) => {
	const [dog, setDog] = useState(props.currentDog);

	useEffect(() => {
		setDog(props.currentDog);
	}, [props]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setDog({ ...dog, [name]: value });
	};

	const [errorMessage, setErrorMessage] = useState("");

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (!dog.breed || !dog.nick || !dog.price) {
					setErrorMessage(
						"Please, provide a correct value for Breed, Nick and Price fields."
					);
					return;
				} else {
					setErrorMessage("");
				}
				props.updateDog(dog.id, dog);
			}}>
			<label>Breed</label>
			<input
				type="text"
				name="breed"
				value={dog.breed}
				onChange={handleInputChange}
			/>
			<label>Nick</label>
			<input
				type="text"
				name="nick"
				maxLength="10"
				value={dog.nick}
				onChange={handleInputChange}
			/>
			<label>Price</label>
			<input
				type="number"
				name="price"
				value={dog.price}
				onChange={handleInputChange}
			/>
			<label>Image</label>
			<input
				type="text"
				name="url"
				value={dog.url}
				onChange={handleInputChange}
			/>
			{errorMessage && <div className="error">{errorMessage}</div>}
			<button data-cy="update-button">Update</button>
			<button
				onClick={() => props.setEditing(false)}
				className="button muted-button"
				data-cy="cancel-button">
				Cancel
			</button>
		</form>
	);
};

export default EditDogForm;
