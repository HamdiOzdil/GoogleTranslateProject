package com.googleTranslateProject.step_definitions;

import com.googleTranslateProject.pages.BasePage;
import com.googleTranslateProject.utilities.BrowserUtils;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;

public class SearchLanguageSteps {
    BasePage basePage = new BasePage();
    @Given("user should click more button on translate page")
    public void user_should_click_more_button_on_translate_page() {
       basePage.moreButton.click();

    }

    @When("user enters three letters {string}")
    public void user_enters_three_letters(String searchLetters) {
        basePage.searchArea.sendKeys(searchLetters);
    }

    @Then("only languages including these three consequent letters {string} should be seen")
    public void only_languages_including_these_three_consequent_letters_should_be_seen(String searchLetters) {
        basePage.verifySearchedLetters(searchLetters);
    }
}
