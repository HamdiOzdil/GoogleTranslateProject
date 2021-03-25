$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/keyboardDropdown.feature");
formatter.feature({
  "name": "Keyboard Dropdown Options",
  "description": "  Agile Story: As a user I should be able to change my entry keyboard\n  AC: User can change their entry keyboard based on selected language",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@keyboardDropdown"
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can see keyboard options based on selected language",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@keyboardDropdown"
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
  "name": "user click on Select Input Tool dropdown button",
  "keyword": "And "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.KeyboardOptionsStepDefs.user_click_on_Select_Input_Tool_dropdown_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see below options",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.KeyboardOptionsStepDefs.user_should_see_below_options(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});