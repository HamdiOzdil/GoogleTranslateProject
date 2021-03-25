package com.googleTranslateProject.step_definitions;

import com.googleTranslateProject.pages.BasePage;
import com.googleTranslateProject.pages.SwapPage;
import com.googleTranslateProject.pages.TranslatePage;
import com.googleTranslateProject.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.jsoup.Connection;
import org.junit.Assert;

public class SwapLanguagesSteps {

    SwapPage swapPage = new SwapPage();

    @When("User presses swap button")
    public void user_presses_swap_button() throws InterruptedException {
        swapPage.pressSwapButton();
    }

    @Then("Both languages should be swapped")
    public void both_languages_should_be_swapped() {
        swapPage.verifyLanguagesAreSwapped();
    }

    @Then("verify the meanings in {string} is changed with {string}")
    public void verify_the_meanings_in_is_changed_with(String sourceWord, String targetWord) {
        swapPage.verifyMeaningSwapped(sourceWord,targetWord);
    }


}
