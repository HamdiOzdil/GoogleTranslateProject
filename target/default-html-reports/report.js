$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/history.feature");
formatter.feature({
  "name": "As a user I should be able to see my translating history",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@history"
    }
  ]
});
formatter.scenario({
  "name": "User can see \"Sign In For Translation History\" message if user is not signed in",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@history"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "History Button is clicked",
  "keyword": "When "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.HistorySteps.history_Button_is_clicked()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Sign in for translation history\" message should appear",
  "keyword": "Then "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.HistorySteps.message_should_appear(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});