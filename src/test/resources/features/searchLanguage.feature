
Feature: As a user I should be able to search source language
@wip
  Scenario: User can search source language
    Given user should click more button on translate page
    When user enters three letters "ara"
    Then only languages including these three consequent letters "ara" should be seen

