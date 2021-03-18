
Feature: As a user I should be able to search source language
@wip
  Scenario: User can search source language
    Given user should see translate page
    When user enters three words
    Then only languages including these three consequent letters should be seen

