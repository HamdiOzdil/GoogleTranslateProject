@swap
  Feature: As a user I should be able to swap the languages with one click
    Scenario Outline: User should be able to swap languages
      When user select "Turkish" as a source language
      And user select "English" as a target language
      And user enter "<Source Word>" as a source word
      Then user should see "<Target Word>" as a target word
      When User presses swap button
      Then Both languages should be swapped
      And verify the meanings in "<Source Word>" is changed with "<Target Word>"
      Examples:
        | Source Word | Target Word |
        | çiçek       | flower      |
#        | bilgisayar  | computer    |
#        | araba       | car         |
#        | bilim       | science     |
#        | merhaba     | Hello there |
      


