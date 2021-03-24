@keyboardDropdown
Feature: Keyboard Dropdown Options
  Agile Story: As a user I should be able to change my entry keyboard
  AC: User can change their entry keyboard based on selected language

  Scenario: Verify that user can see keyboard options based on selected language
    When user select "Turkish" as a source language
    And user click on Select Input Tool dropdown button
    Then User should see below options
      | Turkish - Q         |
      | Turkish - F         |
      | Turkish - Handwrite |
#    When user select "English" as a source language
#    And user click on Select Input Tool dropdown button
#    Then User should see below options
#      | English             |
#      | English - DVORAK    |
#      | English - Handwrite |
#    When user select "Spanish" as a source language
#    And user click on Select Input Tool dropdown button
#    Then User should see below options
#      | Spanish             |
#      | US International    |
#      | Spanish - Handwrite |
