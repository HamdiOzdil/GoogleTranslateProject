$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/sourceTextLength.feature");
formatter.feature({
  "name": "As a user I should be able to follow the length of my source text",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User can follow the length of their source text",
  "description": "",
  "keyword": "Scenario",
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
  "name": "input text to source Translate Box",
  "keyword": "Given "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.SourceTextLength.input_text_to_source_Translate_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "calculate length of source text",
  "keyword": "When "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.SourceTextLength.calculate_length_of_source_text()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify length of source text is matching number displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.SourceTextLength.verify_length_of_source_text_is_matching_number_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});