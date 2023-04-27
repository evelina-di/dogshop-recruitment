Feature: Removing dogs record

  Scenario: Removing dogs record
    Given I access the application
    And There are dogs on the list
    When I click delete button next to the dogs record
    Then This dog record should dissapear from the list

  Scenario: Removing all dogs records from the list
    Given I access the application
    And There are dogs on the list
    When I remove all dogs records available on the list
    Then I should be presented with information that there is no data to display
