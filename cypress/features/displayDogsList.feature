Feature: Displaying dogs list

  Scenario: Displaying dogs list with action buttons
    Given I access the application
    Then The list of dogs should be visible
    And The table should have columns Breed, Nick, Price, Image and Actions
    And Every record on the list should have Edit and Delete button