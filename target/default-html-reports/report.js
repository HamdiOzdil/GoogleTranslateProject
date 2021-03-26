$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/swap.feature");
formatter.feature({
  "name": "As a user I should be able to swap the languages with one click",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@swap"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to swap languages",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user select \"Turkish\" as a source language",
  "keyword": "When "
});
formatter.step({
  "name": "user select \"English\" as a target language",
  "keyword": "And "
});
formatter.step({
  "name": "user enter \"\u003cSource Word\u003e\" as a source word",
  "keyword": "And "
});
formatter.step({
  "name": "user should see \"\u003cTarget Word\u003e\" as a target word",
  "keyword": "Then "
});
formatter.step({
  "name": "User presses swap button",
  "keyword": "When "
});
formatter.step({
  "name": "Both languages should be swapped",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the meanings in \"\u003cSource Word\u003e\" is changed with \"\u003cTarget Word\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Source Word",
        "Target Word"
      ]
    },
    {
      "cells": [
        "çiçek",
        "flower"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should be able to swap languages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@swap"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user select \"Turkish\" as a source language",
  "keyword": "When "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.BasicTranslation.user_select_as_a_source_language(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"English\" as a target language",
  "keyword": "And "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.BasicTranslation.user_select_as_a_target_language(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"çiçek\" as a source word",
  "keyword": "And "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.BasicTranslation.user_enter_as_a_source_word(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"flower\" as a target word",
  "keyword": "Then "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.BasicTranslation.user_should_see_as_a_target_word(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User presses swap button",
  "keyword": "When "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.SwapLanguagesSteps.user_presses_swap_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Both languages should be swapped",
  "keyword": "Then "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.SwapLanguagesSteps.both_languages_should_be_swapped()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the meanings in \"çiçek\" is changed with \"flower\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.SwapLanguagesSteps.verify_the_meanings_in_is_changed_with(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});