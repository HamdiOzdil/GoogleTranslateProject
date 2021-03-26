$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/smokeTest.feature");
formatter.feature({
  "name": "Smoke Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify that user can translate words from one language to another language",
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
  "name": "Verify that user can translate words from one language to another language",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User can see \"Sign In For Translation History\" message if user is not signed in",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
formatter.scenario({
  "name": "Verify that user can see keyboard options based on selected language",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
formatter.step({
  "name": "user select \"English\" as a source language",
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
formatter.step({
  "name": "user select \"Spanish\" as a source language",
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
formatter.scenario({
  "name": "All languages",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click on the source language dropdown button",
  "keyword": "When "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.LanguagesStepDef.user_click_on_the_source_language_dropdown_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see all languages",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.LanguagesStepDef.user_should_see_all_languages(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User can search source language",
  "description": "",
  "keyword": "Scenario Outline"
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
      "name": "@smoke"
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
      "name": "@smoke"
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
formatter.scenario({
  "name": "User can follow the length of their source text",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
    },
    {
      "cells": [
        "bilgisayar",
        "computer"
      ]
    },
    {
      "cells": [
        "araba",
        "car"
      ]
    },
    {
      "cells": [
        "kedi",
        "cat"
      ]
    },
    {
      "cells": [
        "bir",
        "one"
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
      "name": "@smoke"
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
formatter.scenario({
  "name": "User should be able to swap languages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
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
  "name": "user enter \"bilgisayar\" as a source word",
  "keyword": "And "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.BasicTranslation.user_enter_as_a_source_word(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"computer\" as a target word",
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
  "name": "verify the meanings in \"bilgisayar\" is changed with \"computer\"",
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
formatter.scenario({
  "name": "User should be able to swap languages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
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
  "name": "user enter \"araba\" as a source word",
  "keyword": "And "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.BasicTranslation.user_enter_as_a_source_word(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"car\" as a target word",
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
  "name": "verify the meanings in \"araba\" is changed with \"car\"",
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
formatter.scenario({
  "name": "User should be able to swap languages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
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
  "name": "user enter \"kedi\" as a source word",
  "keyword": "And "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.BasicTranslation.user_enter_as_a_source_word(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"cat\" as a target word",
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
  "name": "verify the meanings in \"kedi\" is changed with \"cat\"",
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
formatter.scenario({
  "name": "User should be able to swap languages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
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
  "name": "user enter \"bir\" as a source word",
  "keyword": "And "
});
formatter.match({
  "location": "com.googleTranslateProject.step_definitions.BasicTranslation.user_enter_as_a_source_word(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"one\" as a target word",
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
  "name": "verify the meanings in \"bir\" is changed with \"one\"",
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