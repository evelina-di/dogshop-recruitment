import React from "react";

const DogTable = (props) => (
	<table data-cy="dogs-list">
		<thead>
			<tr>
				<th data-cy="breed-header">Breed</th>
				<th data-cy="nick-header">Nick</th>
				<th data-cy="price-header">Price</th>
				<th data-cy="image-header">Image</th>
				<th data-cy="action-header">Actions</th>
			</tr>
		</thead>
		<tbody>
			{props.dogs.length > 0 ? (
				props.dogs.map((dog) => (
					<tr key={dog.id} className="dogs-record" data-cy={`dog-${dog.id}`}>
						<td>{dog.breed}</td>
						<td>{dog.nick}</td>
						<td>{dog.price}</td>
						<td>
							<img src={dog.url} width="150" height="100" alt="dog"></img>
						</td>
						<td>
							<button
								onClick={() => {
									props.editRow(dog);
								}}
								className="button muted-button"
								data-cy="edit-btn">
								Edit
							</button>
							<button
								onClick={() => props.deleteDog(dog.id)}
								className="button muted-button"
								data-cy="delete-btn">
								Delete
							</button>
						</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan={3}>No data</td>
				</tr>
			)}
		</tbody>
	</table>
);

export default DogTable;
