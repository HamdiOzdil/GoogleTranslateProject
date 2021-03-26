@basicTranslation
Feature: Basic Translation
  Agile Story: As a user I should be able to translate words from one language to another language
  AC: User can translate words from one language to another language

  Scenario Outline: Verify that user can translate words from one language to another language
    When user select "Turkish" as a source language
    And user select "English" as a target language
    And user enter "<Source Word>" as a source word
    Then user should see "<Target Word>" as a target word
    Examples:
      | Source Word | Target Word |
      | çiçek      | flower       |
#      | computer    | bilgisayar  |
#      | car         | araba       |


