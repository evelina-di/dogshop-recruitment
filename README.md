# Assignment for the QA recruitation process

## What changes did I do to the application:

In order to make selectors more specific I added some classes and arrtibutes to the elements in the application.

- data-cy attributes to buttons (Add, Cancel, Update, Edit and Delete) and the table containing dogs records
- data-cy with dynamicly changing id of dogs record (data-cy="dog-1", data-cy="dog-2", ...)
- class "dogs-record" to the element containing all dogs data

I also made one little addition to functionality of application:

- in case no data is provided during creation of a new dogs record, validation with information about the missing data is presented to the user
  > "Please provide a correct value for Breed, Nick and Price fields."
- in case no data is provided during editing of dogs record, the same information is presented to the user.
