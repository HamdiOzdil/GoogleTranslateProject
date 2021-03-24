$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/searchLanguage.feature");
formatter.feature({
  "name": "As a user I should be able to search source language",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User can search source language",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user should click more button on translate page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters three letters \"\u003csearchLetters\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "only languages including these three consequent letters \"\u003csearchLetters\u003e\" should be seen",
  "keyword": "Then "
});
formatter.examples({
  "name": "search some several languages with three letters",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "searchLetters"
      ]
    },
    {
      "cells": [
        "ara"
      ]
    },
    {
      "cells": [
        "tur"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User can search source language",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should click more button on translate page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.SearchLanguageSteps.user_should_click_more_button_on_translate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters three letters \"ara\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.SearchLanguageSteps.user_enters_three_letters(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "only languages including these three consequent letters \"ara\" should be seen",
  "keyword": "Then "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.SearchLanguageSteps.only_languages_including_these_three_consequent_letters_should_be_seen(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User can search source language",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should click more button on translate page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.SearchLanguageSteps.user_should_click_more_button_on_translate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters three letters \"tur\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.SearchLanguageSteps.user_enters_three_letters(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "only languages including these three consequent letters \"tur\" should be seen",
  "keyword": "Then "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.SearchLanguageSteps.only_languages_including_these_three_consequent_letters_should_be_seen(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});