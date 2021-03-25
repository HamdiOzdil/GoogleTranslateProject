
Feature: As a user I should be able to search source language
  @searchLanguage
  Scenario Outline: User can search source language
    Given user should click more button on translate page
    When user enters three letters "<searchLetters>"
    Then only languages including these three consequent letters "<searchLetters>" should be seen
  Examples: search some several languages with three letters
  |searchLetters|
  |ara          |
  |tur          |


