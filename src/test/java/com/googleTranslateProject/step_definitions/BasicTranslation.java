package com.googleTranslateProject.step_definitions;

import com.googleTranslateProject.pages.TranslatePage;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class BasicTranslation {

    TranslatePage translatePage = new TranslatePage();

    @When("user select {string} as a source language")
    public void user_select_as_a_source_language(String sourceLanguage) {
        translatePage.selectSourceLanguage(sourceLanguage);
    }

    @When("user select {string} as a target language")
    public void user_select_as_a_target_language(String targetLanguage) {
        translatePage.selectTargetLanguage(targetLanguage);
    }

    @When("user enter {string} as a source word")
    public void user_enter_as_a_source_word(String sourceWord) {
        translatePage.enterSourceWord(sourceWord);
    }

    @Then("user should see {string} as a target word")
    public void user_should_see_as_a_target_word(String targetWord) {
        translatePage.verifyTargetWordIsCorrect(targetWord);
    }



}
