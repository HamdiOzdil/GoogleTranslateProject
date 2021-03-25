@swap
  Feature: As a user I should be able to swap the languages with one click
    Scenario: User should be able to swap languages
      When User presses swap button
      Then Both languages should be swapped
