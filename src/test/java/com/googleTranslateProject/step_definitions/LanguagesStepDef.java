package com.googleTranslateProject.step_definitions;

import com.googleTranslateProject.pages.TranslatePage;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.List;

public class LanguagesStepDef {

    TranslatePage translatePage = new TranslatePage();

    @When("user click on the source language dropdown button")
    public void user_click_on_the_source_language_dropdown_button() {
        translatePage.clickOnSourceLanguageDropdownButton();
    }

    @Then("user should see all languages")
    public void user_should_see_all_languages(List<String> expectedLanguagesList) {
        List<String> actualLanguagesList = translatePage.createActualLanguagesList();
        translatePage.verifyLanguages(expectedLanguagesList,actualLanguagesList);
    }

}
