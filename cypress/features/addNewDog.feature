Feature: Adding new dog to the list

  Scenario: Creating new dog record
    Given I access the application
    When I fill in the Bread input
    And I fill in the Nick input
    And I fill in the Price input
    And I fill in the Image input
    And I click the Add button
    Then The new dog record should be visible at the end of the list
    And The add form should be empty

  Scenario: Trying to add new dog record without providing necessary data
    Given I access the application
    When I click the Add button
    Then I should receive the validation informing I should provide data to save