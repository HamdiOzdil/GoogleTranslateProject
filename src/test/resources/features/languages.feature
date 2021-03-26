@languages
Feature: Check Languages
Agile Story: As a user I should be able to select different languages
AC: User can select different languages

  Scenario:
    When user click on the source language dropdown button
    Then user should see all languages
      | Africans    |
      | Albanian    |
      | Amharic     |
      | Arabic      |
      | Armenian    |
      | Azerbaijani |
      | Basque      |
      | Belarusian  |
      | Bengali     |
      | Bosnian     |

