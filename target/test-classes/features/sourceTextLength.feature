Feature: As a user I should be able to follow the length of my source text
@wip
  Scenario: User can follow the length of their source text
    Given input text to source Translate Box
    When calculate length of source text
    Then verify length of source text is matching number displayed