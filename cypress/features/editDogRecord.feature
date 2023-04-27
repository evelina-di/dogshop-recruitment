Feature: Editing dogs record

  Scenario: Opening edit form
    Given I access the application
    And There are dogs on the list
    When I click edit button next to the dog record from the list
    Then The edit form is visible
    And All inputs are filled with correct data
    And Buttons Uptade and Cancel are visible

  Scenario: Editing dogs breed
    Given I access the application
    And There are dogs on the list
    And I click edit button next to the dog record from the list
    When I change value in the Bread, Nick, Price and Image input
    And I click Update button
    Then Values for this record should be updated on the list
    And Add form should appear insted of Edit form

  Scenario: Opening edit form and clicking Cancel button
    Given I access the application
    And There are dogs on the list
    When I click edit button next to the dog record from the list
    When I click Update button
    Then Add form should appear insted of Edit form
    
  Scenario: Opening edit form, removing data from inputs and trying to save
    Given I access the application
    And There are dogs on the list
    When I click edit button next to the dog record from the list
    When I remove data from Breed input
    And I click Update button
    Then I should receive validation with information to provide necessary data