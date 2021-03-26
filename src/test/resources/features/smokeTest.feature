@smoke
Feature: Smoke Test

  Scenario Outline: Verify that user can translate words from one language to another language
  When user select "Turkish" as a source language
  And user select "English" as a target language
  And user enter "<Source Word>" as a source word
  Then user should see "<Target Word>" as a target word
  Examples:
  | Source Word | Target Word |
  | çiçek      | flower       |

  Scenario: User can see "Sign In For Translation History" message if user is not signed in
    When History Button is clicked
    Then "Sign in for translation history" message should appear

  Scenario: Verify that user can see keyboard options based on selected language
    When user select "Turkish" as a source language
    And user click on Select Input Tool dropdown button
    Then User should see below options
      | Turkish - Q         |
      | Turkish - F         |
      | Turkish - Handwrite |
    When user select "English" as a source language
    And user click on Select Input Tool dropdown button
    Then User should see below options
      | English             |
      | English - DVORAK    |
      | English - Handwrite |
    When user select "Spanish" as a source language
    And user click on Select Input Tool dropdown button
    Then User should see below options
      | Spanish             |
      | US International    |
      | Spanish - Handwrite |

  Scenario: All languages
    When user click on the source language dropdown button
    Then user should see all languages
      | Afrikaans   |
      | Albanian    |
      | Amharic     |
      | Arabic      |
      | Armenian    |
      | Azerbaijani |
      | Basque      |
      | Belarusian  |
      | Bengali     |
      | Bosnian     |

  Scenario Outline: User can search source language
    Given user should click more button on translate page
    When user enters three letters "<searchLetters>"
    Then only languages including these three consequent letters "<searchLetters>" should be seen
    Examples: search some several languages with three letters
      |searchLetters|
      |ara          |
      |tur          |

  Scenario: User can follow the length of their source text
    Given input text to source Translate Box
    When calculate length of source text
    Then verify length of source text is matching number displayed

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
      | bilgisayar  | computer    |
      | araba       | car         |
      | kedi        | cat         |
      | bir         | one         |