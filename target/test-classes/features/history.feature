@history
Feature: As a user I should be able to see my translating history
  Scenario: User can see "Sign In For Translation History" message if user is not signed in
    When History Button is clicked
    Then "Sign in for translation history" message should appear